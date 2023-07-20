---
title: Cloning Reddit's Live Chat Feature
subtitle: Using WebSockets to create Reddit's live messaging feature.
date: 06/30/23
preview: Join me as we take a deep dive into the code that powers Ribbit's live chat feature and discuss the project in its entirety, from the initial planning stages all the way to its completion.
category: Tutorial
toc: Tech Stack and Tools/Initial Planning and Research
slug: first-post
---

## Introduction

In this post, I go over the process of replicating Reddit's live chat feature from initial research all the way to completion. I recently managed to build this for my pixel-perfect Reddit clone, Ribbit, and wanted to document the process for anyone who might find it useful.

> This walkthrough assumes decent understanding of the languages and technologies utilized. The full tech stack is listed below. I do, however, go into some detail regarding WebSockets.

## Tech Stack and Tools

- React
- Redux
- Flask
- flask-sqlalchemy
- flask-socketio
- React-Router
- moment.js

## Initial Planning and Research

Before diving into any project, it is crucial to spend time on research and planning. This stage sets the foundation for a successful implementation and ensures high-quality code. Since we have a finished and working model to reference, let's begin by thoroughly examining Reddit's live chat feature, making sure to pay attention to its functionality and user experience in particular.

To illustrate the feature's intricacies, I created a GIF demonstrating its different aspects. By studying these details, we gain a comprehensive understanding of the feature and can ensure a faithful recreation, so let's take a closer look and identify some key elements.

(gif)

- The chat window consists of two main sections: the left side containing chat navigation and a "Create Chat" button, and the right side displaying the chat thread title, messages, and an input area. This will come into play when we structure our folders.
- Chat navigation buttons provide relevant information including the other user's image and username, and the last message's content, the time it was sent, and who sent it. Clicking on one of these buttons opens the relevant chat thread.
  - If the last message sent was an emoji sticker, rather than displaying the sticker, the chat nav button displays a picture emoji (🖼️).
- Messages are grouped by date. Messages sent more than a day ago display the abbreviated date, and messages sent today or yesterday are labeled accordingly.
- Each chat thread is headed by a spacious area containing the other user's information, including their image, username, karma count, and the number of days they have been on the site.
- When a user sends multiple messages in a row (with each message sent less than 60 seconds after the previous), they are grouped together, omitting redundant user information.
  - Hovering over a grouped message reveals the time it was sent.
- Each message has buttons that appear on hover, allowing reactions or actions like deleting or reporting a message.

### Testing

- Deleting a message doesn't actually delete it, but instead updates its content to "[message deleted]", and changes the font color to a light grey.
- Before a message can be deleted, the user is asked to confirm this decision via a message deletion confirmation overlay.
- Clicking the "Create Chat" button opens a "New Chat" overlay where users can search and select other users to start a chat.
- When a new thread is created, rather than showing the regular thread area, an overlay of sorts appears instead. This overlay (the "message invitation" overlay) invites the current user to send the first message, and disappears once a message is sent.
- When users without any existing chat threads open the chat feature, they see the "Welcome" overlay with a "Start new chat" button that leads to the aforementioned "New Chat" overlay when clicked.
- The input box expands to show four lines of text, and then allows scrolling.
