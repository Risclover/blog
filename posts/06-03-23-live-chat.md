---
title: Cloning Reddit's Live Chat Feature
subtitle: Using WebSockets to create Reddit's live messaging feature.
date: 06/21/23
description: Join me as we take a deep dive into the code that powers Ribbit's live chat feature and discuss the project in its entirety, from the initial planning stages all the way to its completion.
category: Tutorial
---

## Introduction

In [today's](https://www.google.com) fast-paced online community landscape, real-time interaction has become the lifeblood of user engagement. As the creator and developer of Ribbit, a comprehensive and pixel-perfect replica of Reddit, I knew that the app couldn't be complete until I had at least captured the captivating experience of live communication offered by the popular platform. My long-standing ambition of integrating a live chat feature within Ribbit finally came to fruition just last week, and I am excited to break down and discuss this process in detail. Join me as we take a deep dive into the code that powers Ribbit's live chat feature and discuss the project in its entirety, from the initial planning stages all the way to its completion.

It's important to note that this blog post assumes a basic understanding of the languages and technologies employed in the project, which are listed below. However, the project also utilizes flask-socketio, which is one technology that we will explore in greater detail.

## Main Languages and Technologies Used

- React
- Redux
- Flask
- SQLAlchemy (flask-sqlalchemy)
- WebSockets (flask-socketio)

## Initial Research and Planning

Before diving into any project, it is crucial to spend time on research and planning. This stage sets the foundation for a successful implementation and ensures high-quality code. Since we have a finished and working model to reference, let's begin by thoroughly examining Reddit's live chat feature, making sure to pay attention to its functionality and user experience in particular.

To illustrate the feature's intricacies, I created a GIF demonstrating its different aspects. Let's take a closer look and identify some key elements.

<img src="/images/6ek5EavVy4.gif" />

By studying these details, we gain a comprehensive understanding of the feature and can ensure a faithful recreation.

Some noteworthy observations:

- The chat window consists of two main sections: the left side containing chat navigation and a "Create Chat" button, and the right side displaying the chat thread title, messages, and an input area.
- Chat navigation buttons provide relevant information including the other user's image and username, and the last message's content, the time it was sent, and who sent it.
- If the last message sent was an emoji sticker, rather than displaying the sticker, the chat nav button displays a picture emoji (🖼️).
- Messages are grouped by date. Messages sent more than a day ago display the abbreviated date, and messages sent today or yesterday are labeled accordingly.
- Each chat thread is headed by a spacious area containing the other user's information, including their image, username, karma count, and the number of days they have been on the site.
- When a user sends multiple messages in a row (with each message sent less than 60 seconds after the previous), they are grouped together, omitting redundant user information.
- Hovering over a grouped message reveals the time it was sent.
- Each message has buttons that appear on hover, allowing reactions or actions like deleting or reporting a message.
- Deleting a message doesn't actually delete it, but instead updates its content to "[message deleted]", and changes the font color to a light grey.
- Clicking the "Create Chat" button opens a "New Chat" overlay where users can search and select other users to start a chat.
- The input box expands to show four lines of text, and then allows scrolling.
- When users without any existing chat threads open the chat feature, they see the "Welcome" overlay with a "Start new chat" button that leads to the "New Chat" overlay when clicked.

## Implementing the Backend

When working on a full-stack project, I personally prefer to start with the backend before proceeding to the frontend. This approach minimizes the need to switch back and forth between the two and ensures smoother development. Although some backend adjustments may be necessary later, completing most of the backend work up front allows us to focus solely on the frontend when the time comes.

### Models

To begin, let's consider the necessary database tables. If I ever have trouble with coming up with what models are needed, I consider the ways in which users will interact with my feature and base them off of this information. In this particular instance, we have the following user actions:

1. Creating a new chat thread by clicking the "Create Chat" button
2. Sending messages via the input box.
3. Clicking on a chat navigation button to open its respective thread.
4. "Deleting" a message (which really just updates its content).

All interactions are either with the chat threads themselves or with messages, which makes it clear that we need to include two models: `ChatThread` and `ChatMessage`. We will also be using the `Users` model that already happens to exist.

In addition, we have a many-to-many relationship between users and chat threads (chat threads can have many users, and users can have many chat threads), so we'll need an association table that we'll call `user_chat_threads`.

:::important About `from .db import db`

As a quick side note, some of the code snippets will have an import statement at the top that says `from .db import db`. This is referring to the `db.py` file, which contains this code:

```python
from flask_sqlalchemy import SQLAlchemy
import os
environment = os.getenv("FLASK_ENV")
db = SQLAlchemy()
```

:::

#### user_chat_threads

Let's begin with the `user_chat_threads` association table to establish the relationship between users and chat threads. This table has two foreign keys, one for the user id and one for the chat thread id:

```python
from .db import db

user_chat_threads = db.Table('user_chat_threads',
  db.Model.metadata,
  db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
  db.Column('chat_thread_id', db.Integer, db.ForeignKey('chat_threads.id'),
    primary_key=True),
)
```

#### ChatThread

Next, we have the `ChatThread` model to represent the chat thread between two users.

```python
from .db import db

"""user_chat_threads"""

class ChatThread(db.Model):
    __tablename__ = 'chat_threads'
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default.db.func.now())
    messages = db.relationship('ChatMessage', back_populates = 'chat_thread',
        cascade='all, delete')
    chat_thread_users = db.relationship('User', back_populates='chat_threads',
        secondary=user_chat_threads, lazy='joined')
```

- `id` - primary key for the chat thread
- `created_at` - timestamp indicating when the chat thread was created
- `messages` - one-to-many relationship with the `ChatMessage` model to represent messages in the thread (each thread has many messages, whilst each message belongs to one thread).
- `cascade = 'all, delete'` ensures that when the chat thread is deleted, its messages get deleted, too.
- `chat_thread_users` - many-to-many relationship with the `User` model to associate the users participating in the chat thread. Note the user of the `secondary` argument, which associates the `user_chat_threads` table.

#### ChatMessage

Finally, we have the `ChatMessage` model:

```python
from .db import db

"""
user_chat_threads and ChatThread
"""

class ChatMessage(db.Model):
    __tablename__ = 'chat_messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'),
        nullable=False)
    receiver_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.String(10000), nullable=False)
    thread_id = db.Column(db.Integer, db.ForeignKey('chat_threads.id'),
        unique=False, nullable=False)
    read = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    chat_thread = db.relationship('ChatThread', back_populates='messages')
    sender = db.relationship('User', back_populates='user_chat_messages',
        primaryjoin='User.id==ChatMessage.sender_id')
    recipient = db.relationship('User', primaryjoin='User.id==ChatMessage.receiver_id')
```

- `id` - primary key for the chat message
- `sender_id` - the id of the user sending the message
- `receiver_id` - the id of the user receiving the message
- `content` - the message content
- `thread_id` - the id of the chat thread that the message belongs to
- `read` - a boolean indicating whether or not the message has been sent, or "read", for notification purposes
- `created_at` - a timestamp of when the message was sent
- `chat_thread` - one-to-many relationship with the `ChatThread` model to represent the thread that the messages belong to
- `sender` -
- `recipient` -

#### User

Here are the properties we need to add to the existing `User` model.

```python
# ...
class User(db.Model):
    # ...
    chat_threads = db.relationship('ChatThread', back_populates='chat_thread_users',
        secondary=user_chat_threads, lazy='joined')
    user_chat_messages = db.relationship('ChatMessage', back_populates='sender',
        overlaps='recipient', primaryjoin='User.id==ChatMessage.receiver_id',
        cascade='all, delete')
```

#### Entire Code for Models

```python
from .db import db

user_chat_threads = db.Table('user_chat_threads',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('chat_thread_id', db.Integer, db.ForeignKey('chat_message_threads.id'), primary_key=True),
)

class ChatMessage(db.Model):
    __tablename__ = "chat_messages"

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete="CASCADE"), nullable=False)
    receiver_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(10000), nullable=False)
    thread_id = db.Column(db.Integer, db.ForeignKey("chat_message_threads.id"), unique=False, nullable=False)
    read = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    chat_message_thread = db.relationship('ChatMessageThread', back_populates="messages")
    sender = db.relationship("User", back_populates="user_chat_messages", primaryjoin="User.id==ChatMessage.sender_id")
    recipient = db.relationship("User", primaryjoin="User.id==ChatMessage.receiver_id")

    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "read": self.read,
            "sender": self.sender.to_dict(),
            "receiver": self.recipient.to_dict(),
            "threadId": self.thread_id,
            "createdAt": self.created_at,
        }

    def __repr__(self):
        return f"<Chat Message {self.id}: {self.content}>"


class ChatMessageThread(db.Model):
    __tablename__ = "chat_message_threads"

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    messages = db.relationship('ChatMessage', back_populates='chat_message_thread', cascade='all, delete')
    chat_thread_users = db.relationship('User', back_populates='chat_threads', secondary=user_chat_threads, lazy='joined')

    def to_dict(self):
        return {
            "id": self.id,
            "messages": [msg.to_dict() for msg in self.messages],
            "users": [user.to_dict() for user in self.chat_thread_users],
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }

    def __repr__(self):
        return f"<Chat Message Thread {self.id}: {[msg.to_dict() for msg in self.messages]}>"
```

### Routes

With our models designed and written, we can move on to our endpoints. We can refer to the same list of actions that we referenced to create our models to figure out which endpoints are needed:

1. Creating a new chat thread by clicking the "Create Chat" button
2. Sending messages via the input box.
3. Clicking on a chat navigation button to open its respective thread.
4. "Deleting" a message (which really just updates its content).

Let's start with our import statements.

```python
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, User, ChatThread, ChatMessage
```

- From `flask`:
  - `Blueprint` - Used to add views to our route using the `route` decorator
  - `request` - Contains the data that the client has sent to our app
- From `flask_login`:

  - `login_required` - Restricts views to logged-in users
  - `current_user` - Access to the logged-in user

- From `app.models`: The models that we reference within our routes (`db`, `User`, `ChatThread`, `ChatMessage`).

Following this, we need to name our route:

```python
# Import statements

# ...

chat_thread_routes = Blueprint("chat_threads", __name__)



```

Now we can use `@chat_thread_routes.route` to add our views to `chat_threads`.

Starting with our endpoints for chat threads, we need to be able to "GET" a user's threads.

```python
@chat_thread_routes.route("")
def get_user_chats():
    user = User.query.get(current_user.get_id())
    if user is not None:
        user_chats = user.chat_threads
        return { "ChatThreads": [ chat.to_dict() for chat in user_chats]}
    else:
        return { "message": "error" }
```

Here, we find the logged-in user using `current_user.get_id()`, which literally gets the id of the current user, and querying our User model with it.

Then we say that if `user` exists (`is not None`), we need to return the user's chat threads, which are held in `user.chat_threads`. The return statement turns each chat thread into a dictionary (`chat.to_dict()`) so that we may use its properties.

If `user` does not exist, we return a simple error message.

Next, it would be handy to be able to get a specific chat thread by its id, so let's write an endpoint that can do just that.

```python
# 3. Clicking on a chat navigation button to open the respective thread.
@chat_thread_routes.route("/<int:id>")
def get_user_chat(id):
    chat = ChatThread.query.get(id)
    if chat is not None:
        return chat.to_dict()
    else:
        return {"message": "Chat not found"}
```

This time, we find a specific chat thread by grabbing its id, which is stored as a parameter in the route. If a chat thread with that id exists, we return it as a dictionary, and if not, we return a "Chat not found" message.

Our final chat thread-related endpoint allows us to create chat threads using `POST`.

```python
# 1. Creating a new chat thread by clicking the "Create Chat" button.
@chat_thread_routes.route("", methods=["POST"])
@login_required
def create_thread():
    data = request.get_json()
    receiver = User.query.get(data.get("receiverId"))
    sender = User.query.get(current_user.get_id())

    thread = ChatMessageThread()
    receiver.chat_threads.append(thread)
    sender.chat_threads.append(thread)

    db.session.add(thread)
    db.session.commit()


    return { "chatThread": thread.to_dict() }
```

We are utilizing the `@login_required` decorator here, because users who aren't logged in shouldn't be able to create chat threads.

We are also utilizing the `request` object - specifically, the `get_json()` method, which parses the incoming JSON request data and returns it so we may reference it.

For example, after setting `request.get_json()` to a variable called `data`, when we write the code `data.get("receiverId")`, this is literally the receiver's id, which we set to the `receiverId` variable in the frontend before converting it to JSON.

- `receiver = User.query.get(data.get("receiverId"))` - We find the receiver by their user id and set it to the `receiver` variable
- `sender = User.query.get(current_user.get_id())` - Once again, we find the current user by using `current_user.get_id()`, and we set it to the `sender` variable.
- `thread = ChatThread()` - We create our chat thread. We don't need any information inside the parentheses for this particular model.
- `receiver.chat_threads.append(thread)` - Remember the `chat_threads` field that we gave the `User` model earlier? We append our newly-created thread to it so that the receiving user now has that thread.
- `sender.chat_threads.append(thread)` - We do the same for the sending user.
- `db.session.add(thread)` - Our new thread is added to the database...
- `db.session.commit()` - and committed.

We finish off this endpoint by returning a dictionary form of our chat thread.

We now move on to the endpoints for chat messages. Just like with chat threads, we need to be able to create a message with `POST`, but we'll also simultaneously add the message to its chat thread.

```python
# 2. Sending messages through the input box.
@chat_thread_routes.route("/<int:id>/messages", methods=["POST"])
@login_required
def create_message(id):
    data = request.get_json()

    message = ChatMessage(
        content=data.get("content"),
        sender_id=current_user.get_id(),
        receiver_id = data.get("receiver_id"),
        thread_id = id
    )

    chat_thread = ChatMessageThread.query.get(id)
    chat_thread.messages.append(message)

    db.session.add(message)
    db.session.commit()

    return message.to_dict()
```

We've already discussed what the `@login_required` decorator and the `data = request.get_json()` line do, so let's move right along.

```python
message = ChatMessage(
  content=data.get("content"),
  sender_id=current_user.get_id(),
  receiver_id = data.get("receiver_id"),
  thread_id = id
)
```

Here, we create our new message, passing along the following parameters:

- `content=data.get("content")` - Our message's content
- `sender_id=current_user.get_id()` - We set the sender's id to the current user's id, since they will always be one in the same.
- `receiver_id=data.get("receiver_id")` - We get the receiver's id from data
- `thread_id=id` - Our thread id comes directly from the route.

```python
chat_thread = ChatMessageThread.query.get(id)
chat_thread.messages.append(message)

db.session.add(message)
db.session.commit()

return message.to_dict()
```

Following that, we simply find the correct chat thread by its id, append our new message to the chat thread's `messages` property, add the message to the database, commit, and finally, return a dictionary version of our message.

We've covered most of our "actions" list, but there is one more action to do: "deleting" a message.

```python
# 4. "Deleting" a message by updating its content.
@chat_thread_routes.route("/messages/<int:id>", methods=["PUT"])
@login_required
def fake_delete_message(id):
    message = ChatMessage.query.get(id)
    setattr(message, "content", "[Message deleted]")

    db.session.commit()
    return message.to_dict()
```

Since this is just an update, we use `PUT` - and more specifically, the `setattr()` method, which is a Python function that sets the value of the specified attribute; or, in other words, changes the value of the `"content"` attribute of the `message` to `"[Message deleted]"`.

We commit this change to the database and return our message as a dictionary.

#### Entire Code for Endpoints

```python
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, ChatMessageThread, ChatMessage


chat_thread_routes = Blueprint("chat_threads", __name__)

# GET CURRENT USER'S CHATS
@chat_thread_routes.route("")
def get_user_chats():
    user = User.query.get(current_user.get_id())
    if user is not None:
        user_chats = user.chat_threads
        return { "ChatThreads": [ chat.to_dict() for chat in user_chats]}
    else:
        return { "message": "error" }


# GET SINGLE CHAT BY ID
@chat_thread_routes.route("/<int:id>")
def get_user_chat(id):
    chat = ChatMessageThread.query.get(id)
    print(chat)
    if chat is not None:
        return chat.to_dict()
    else:
        return { "message": "Chat not found" }


# CREATE A CHAT THREAD
@chat_thread_routes.route("", methods=["POST"])
@login_required
def create_thread():
    data = request.get_json()
    receiver = User.query.get(data.get("receiverId"))
    sender = User.query.get(current_user.get_id())

    thread = ChatMessageThread()
    receiver.chat_threads.append(thread)
    sender.chat_threads.append(thread)

    db.session.add(thread)
    db.session.commit()


    return { "chatThread": thread.to_dict() }


# CREATE A NEW MESSAGE & ADD TO CHAT
@chat_thread_routes.route("/<int:id>/messages", methods=["POST"])
@login_required
def create_message(id):
    data = request.get_json()

    message = ChatMessage(
        content=data.get("content"), sender_id=current_user.get_id(),
            receiver_id = data.get("receiver_id"), thread_id = id
    )

    chat_thread = ChatMessageThread.query.get(id)
    chat_thread.messages.append(message)

    db.session.add(message)
    db.session.commit()

    return message.to_dict()


# "DELETE" A MESSAGE (UPDATE TO SAY '[MESSAGE DELETED]')
@chat_thread_routes.route("/messages/<int:id>", methods=["PUT"])
@login_required
def fake_delete_message(id):
    message = ChatMessage.query.get(id)
    setattr(message, "content", "[Message deleted]")

    db.session.commit()
    return message.to_dict()
```

## WebSockets Backend

Our last backend task is to create the `flask-socketio` endpoints needed to turn our chat feature into a live chat feature. First, let's briefly cover what WebSockets are and why they are used for real-time communication.

WebSockets are a communication protocol that provides communication channels over a single connection. Unlike traditional HTTP requests, which are stateless and require a new request-response cycle for every communication, WebSockets allow for continuous, bidirectional communication between the client and the server, making WebSockets ideal for implementing real-time features like chat applications.

To implement WebSockets in our live chat feature, we'll be using the `flask-socketio` library, which integrates Socket.IO with Flask and provides the necessary functionality to handle real-time communication.

Let's start by adding required code to `__init__.py`:

```python
# At the top with the other import statements:
from .socket import socketio

# Following `db.init_app(app)`:
socketio.init_app(app)

# At the bottom of the file:
if __name__ == '__main__':
    socketio.run(app)
```

From the `flask-socketio` documentation:

> The `init_app()` style of initialization is also supported. To start the web server simply execute your script. Note the way the web server is started. The `socketio.run()` function encapsulates the start up of the web server and replaces the `app.run()` standard Flask development server start up.
>
> . . .
>
> The simplest deployment strategy is to start the web server by calling `socketio.run(app)`. This will look through the packages that are installed for the best available web server start the application on it. The current web server choices that are evaluated are eventlet, gevent and the Flask development server.
>
> If eventlet or gevent are available, `socketio.run(app)` starts a production-ready server using one of these frameworks. If neither of these are installed, then the Flask development web server is used, and in this case the server is not intended to be used in a production deployment.

The `socketio.init_app(app)` line initializes the SocketIO instance with our Flask app.

Next, we'll create a new file called `socket.py` in the `app/` folder (which is the root backend folder) to handle the remaining backend code needed for WebSockets.

```python
# socket.py

from flask_socketio import SocketIO, emit, join_room, leave_room
from app.models import db, User, ChatMessage
from flask_login import current_user
from flask import request

import os

# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://ribbit-app.herokuapp.com',
        'https://ribbit-app.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)
```

At the top of `socket.py`, we import the necessary modules and initialize the `socketio` instance with the appropriate CORS settings.

Next, we can move on to the WebSocket endpoints. We start by creating the `chat_users` variable, which is initialized as an empty list and will hold the data of users currently connected, followed by the connection and disconnection events:

```python
chat_users = []

@socketio.on("connect")
def on_connect():
    user = User.query.get(current_user.get_id()).username
    user_exists = len([user for user in chatUsers if user['username'] == user])
    if not user_exists:
        chat_user = {}
        chat_user['username'] = user
        chat_user['sid'] = request.sid
        chat_users.append(chatUser)


@socketio.on("disconnect")
def on_disconnect():
    for i in range(len(chatUsers)):
        if chat_users[i]['username'] == User.query.get(current_user.get_id()).username:
            del chat_users[i]
            break
```

In the `on_connect` event, we retrieve the username of the connected user and check if they already exist in the `chat_users` list. If not, we create a new entry for the user and add it to the list.

In the `on_disconnect` event, we remove the user from the `chat_users` list when they disconnect.

Next, let's handle the messaging functionality.

```python
# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    if data['threadId']:
        room = data['threadId']
        emit("chat", data, broadcast=True, to=room)
        emit("new_message", data, broadcast=True, to=room)
```

The `handle_chat` event grabs the thread's id from the incoming JSON data, and we create a new room based on that id, making rooms and chat threads pretty much one in the same.

Following that are two `emit()` statements. Both of these statements send the incoming data to the room and broadcasts it to that room.

There are two `emit()` statements because we need one for sending a message and one for updating the chat nav button live.

Lastly, we'll implement the events to join and leave chat rooms.

And with that, we complete our backend code! Note that I haven't mentioned or shown things like registering our chat_thread_routes blueprint or adding our models to the `models/__init__.py` file. As I mentioned in the beginning, this post assumes that you've used Flask and SQLAlchemy before. If you are using this as a guide, just don't forget to handle those details.
