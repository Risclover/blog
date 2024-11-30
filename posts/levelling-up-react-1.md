---
title: "Levelling Up React #1: Unleashing the Power of a Great Folder Structure"
date: 11/20/2024
type: Blog
category: Tutorial
subtitle: Taming the chaos of React file organization
description: Struggling with an unorganized React codebase? This guide will teach you how to create a clean and scalable folder structure that keeps your files easy to find and your features easy to manage.
slug: levelling-up-react-1
categoryUrl: "/categories/tutorial"
---

## Introduction

New developers are often guilty of treating their project's folder structure as an afterthought. They throw components, styles, and utilities into a single folder, slap vague names on them, and call it a day. After all, why spend time organizing files when you could be writing code? But as their projects grow, so does the chaos. A small feature update could easily send them on a wild goose chase through an unstructured codebase, and every new developer onboarded to the project will have the same question: _Where do I find this?_

Sound familiar? A messy folder structure might not stop your app from working, but it can slow you down, introduce bugs, and make collaboration a nightmare. A great folder structure, on the other hand, does the heavy lifting for you. It organizes your project into clear, logical segments, making your codebase easy to navigate through, maintain, and scale.

In this first post of the Levelling Up React series, we’ll explore how to design a folder structure that works for you. Whether you’re working solo or collaborating on a team, the principles we’ll cover will help you create a foundation for long-term success, allowing you to come away with the tools to clean up your existing projects and start future ones out on the right foot.

## Why Bother?

If you're one of the aforementioned guilty developers who haven't yet discovered the magic of a great folder structure, you may be wondering, _"Why bother?"_ Although you're entirely within your rights to keep all of your files within a single folder (commonly one named `components/`), the bigger your project gets, the more frustrating this lack of structure will be. Let's have a quick demonstration of why you should care.

The following files are real, taken directly from my full-stack Reddit clone Ribbit. More specifically, they're files that make up the `Auth` feature for Ribbit, as well as the page components. They're in alphabetical order and are listed exactly as they would normally be if they were all contained in a single folder.

```bash
src/
├── adjectivesList.js
├── AllPostsFeed.js
├── AuthFormInput.js
├── CommunityPage.js
├── DemoAccountWarning.js
├── ErrorsDisplay.js
├── FormHeader.js
├── generateUsername.js
├── HomepageFeed.js
├── IconComponent.js
├── LoginForm.js
├── loginFormValidation.js
├── NotificationsPage.js
├── nounsList.js
├── SearchResults.js
├── SignInSwitch.js
├── SignUpForm.js
├── SignUpFormSecondPage.js
├── signupFormValidation.js
├── SinglePostPage.js
├── useAuthFormInput.js
├── useDemoAccountWarning.js
├── useLoginForm.js
├── UsernameAvailability.js
├── useSignUpForm.js
├── useSignUpFormSecondPage.js
└── useUsernameTaken.js
```

Let's say we're trying to find a specific file and we don't know its name, but we do know that it is a component from the `Auth` feature. It would be virtually impossible to try and find anything in under 10 seconds. We can't tell which files are pages and which belong to the `Auth` feature, and it isn't clear which files are components, hooks, utility functions, data, and so forth. Some file names gives us clues; hooks, for example, usually start with `use`, and components are typically in `PascalCase`. Regardless, the point is that it isn't immediately obvious, and navigating this codebase would take way more time than necessary.

Now, let's check out the very same list of files, this time using the feature-based folder structure that I use for Ribbit.

```bash
src/
├── features/
│   └── Auth/
│       ├── components/
│       │   ├── AuthFormInput.js
│       │   ├── DemoAccountWarning.js
│       │   ├── ErrorsDisplay.js
│       │   ├── FormHeader.js
│       │   ├── IconComponent.js
│       │   ├── LoginForm.js
│       │   ├── SignInSwitch.js
│       │   ├── SignUpForm.js
│       │   ├── SignUpFormSecondPage.js
│       │   └── UsernameAvailability.js
│       ├── data/
│       │   ├── adjectivesList.js
│       │   └── nounsList.js
│       ├── hooks/
│       │   ├── useAuthFormInput.js
│       │   ├── useDemoAccountWarning.js
│       │   ├── useLoginForm.js
│       │   ├── useSignUpForm.js
│       │   ├── useSignUpFormSecondPage.js
│       │   └── useUsernameTaken.js
│       └── utils/
│           ├── generateUsername.js
│           ├── loginFormValidation.js
│           └── signupFormValidation.js
└── pages/
    ├── AllPostsFeed.js
    ├── CommunityPage.js
    ├── HomepageFeed.js
    ├── NotificationsPage.js
    ├── SearchResults.js
    └── SinglePostPage.js
```

The difference is staggering; this codebase is so much better for a plethora of reasons. It's immediately clear which files are part of the `Auth` feature and which are the app's pages. We can tell what each file in `Auth` contains thanks to the subfolders like `hooks/` and `data/`. Navigation is super easy, and we can find anything we need very quickly, saving precious time that could be used doing more important things. More importantly, we aren't subjecting other developers to our madness.

How do we go about implementing a folder structure for a specific project? Although I'm of the opinion that each project should have its own unique structure, a great place to start is by looking at the most popular folder structures amongst the React community.

## Popular Folder Structure Approaches

When it comes to organizing a React project, there's no one-size-fits-all solution. The best folder structure depends on your project's size, complexity, and team preferences. However, several popular approaches have emerged that can serve as great starting points. It's important that you don't simply copy an existing folder structure and leave it at that. Each project has its own unique needs, so don't be afraid to experiment and change it up if you find that what you're doing isn't working.

The following structures are great places to start.

### 1. File Type Structure

This classic approach groups files based on their type or purpose, such as components, hooks, styles, or utilities. It's straightforward and easy to set up.

To structure by file type, create a folder for each type of file in your project, like so:

### 2. Feature-Based Structure

### 3. Atomic Design Structure

## Steps to Building Your Folder Structure

### 1. Start with the basics

### 2. Group by features or modules

### 3. Decide between flat or nested

### 4. Separate shared and feature-specific

### 5. Include global files in separate folders

### 6. Use meaningful folder and file names

### 7. Refactor as your project grows

## Adapting Your Folder Structure Over Time

## Identifying a Bad Structure

## ...and Transforming It into a Good One
