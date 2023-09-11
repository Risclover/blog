---
title: "Replicating Reddit: Live Chat Pt. 2"
subtitle: Using React, Redux, Flask, SQLAlchemy, and WebSockets (flask-socketio) to create Reddit's live messaging feature.
date: 06/21/23
description: Join me as we take a deep dive into the code that powers Ribbit's live chat feature and discuss the project in its entirety, from the initial planning stages all the way to its completion.
category: Tutorial
tags:
  - Replicating Reddit
  - Testing
---

## Introduction

This is part 2 of "Replicating Reddit: Live Chat". In this part, we discuss the frontend components that make up this feature, including the folder and file structure, the styling, and the logic, all of which come together to create a working replication.

If you haven't done part 1 yet, I recommend going back and doing it first, as it covers important steps including planning/research, backend code, and Redux code.

## Frontend Setup

We'll begin by setting up the frontend files and folders, as well as giving our feature some initial styling so that we have a physical component to work with.

### Folder and File Structure

First, create the following folders and files in the same structure laid out here. As you create each file, it would be helpful to give it the initial component set up code, as shown below.

```plaintext
ChatWindow/
├─ ChatWindowLeft/
│  ├─ ChatNav.js
│  ├─ ChatNavBtn.js
│  └─ ChatWindowLeft.js
├─ ChatWindowOverlays/
│  ├─ MessageInvitationOverlay.js
│  ├─ NewChatOverlay.js
|  ├─ MessageDeleteConfirmationOverlay.js
│  └─ WelcomeOverlay.js
├─ ChatWindowRight/
│  ├─ ChatWindowInput/
│  │  ├─ ChatWindowInput.js
│  │  ├─ Emojis.js
│  │  └─ Gifs.js
│  ├─ ChatWindowMessages/
│  │  ├─ MessageReactions/
│  │  │  └─ MessageReactions.js
│  │  ├─ ChatWindowMessage.js
│  │  ├─ ChatWindowMessages.js
|  |  ├─ DateSeparator.js
|  |  └─ formatDate.js
│  ├─ ChatWindowTitleBar/
│  │  └─ ChatWindowTitleBar.js
│  └─ ChatWindowRight.js
├─ ChatWindow.css
└─ ChatWindow.js
```

We are going to structure our folders similarly to how the physical live chat feature is set up. On the left side is the `ChatNav`, and on the right side are the `TitleBar`, `Messages`, and `Input` area.
