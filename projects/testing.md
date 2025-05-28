---
title: "Replicating Reddit: Live Chat Pt. 1"
subtitle: "Using React, Redux, Flask, SQLAlchemy, and WebSockets (flask-socketio) to create Reddit's live messaging feature."
---

## Introduction

Welcome to the project page for Ribbit, a pixel-perfect clone of Reddit. This project serves as a showase of my expertise in sofware engineering and full-stack web development, utilizing a tech stack comprising of Flask, SQLAlchemy, React, and Redux. Ribbit aims to provide users with a comprehensive social experience by incorporating a wide array of features, including live chat using socket.io, image uploads using AWS S3, and an extensive content submission system.

### What is Reddit?

Reddit is a prominent social news aggregator and online community often referred to as 'the front page of the Internet.' With millions of users, it serves as a primary source of news and pop culture content. On Reddit, users have the freedom to create posts on a wide range of topics chosen by the platform's numerous communities. They can also engage by leaving comments, initiating conversations, and simply exploring the vast array of content available. A distinctive feature of Reddit is its voting system, where users can upvote to express approval or downvote to signify disapproval. These votes contribute to a user's 'karma,' reflecting their overall contributions and impact within the community.

## Project Overview

### About Ribbit

Ribbit is a sophisticated web application developed to replicate the core functionalities of Reddit.com, specifically its desktop version. Although Ribbit originally began as my capstone project whilst attending App Academy, I have always treated it as a legitimate application. With over 15 features and counting, Ribbit has steadily grown to be the largest fullstack application I have ever built, and I continue to work on it to this day. Ribbit is a sophisticated web application that was developed to emulate the website Reddit.com, with a specific focus on replicating its desktop version. Initially conceived as my capstone project during my time at App Academy, Ribbit has since evolved into a full-fledged application. With a continually expanding list of over 15 features, Ribbit stands as the most extensive full-stack project in my portfolio.

 <div className="quickfacts-div w-full max-w-[700px] rounded-[8px] mt-12 font-rubik text-base font-medium text-slate-900 dark:text-gray-50 overflow-hidden dark:bg-slate-700 mx-auto">
      <div className="bg-indigo-200 px-[30px] py-[11px] dark:bg-slate-800">
        <h3 className="text-2xl font-bold font-rubik leading-0 mt-1">
          Quick Facts
        </h3>
      </div>
      </div>
      <div className="px-[30px] py-[10px]">
        <ul className="quickfacts break-normal mb-0">
          <li>
            <strong>Project title:</strong> Ribbit
          </li>
          <li>
            <strong>Description:</strong> A feature-rich pixel-perfect clone of
            Reddit.
          </li>
          <li>
            <strong>Tech stack:</strong> React, Redux, Flask, SQLAlchemy,
            socket.io, and various libraries and tools.
          </li>
          <li onClick={handleFeatures} className="cursor-pointer w-fit">
            <div className="flex items-center">
              <strong className="flex items-center">
                Features{" "}
                {showFeatures ? (
                  <HiChevronUp className="text-2xl" />
                ) : (
                  <HiChevronDown className="text-2xl" />
                )}
              </strong>{" "}
              <span className="text-sm">(click to show/hide)</span>
            </div>
            <div className="quickfacts-list flex flex-wrap">
              <ul className="flex flex-wrap flex-col h-[100%] sm:max-h-[350px] inner-ul">
                {features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <strong>Github Repo:</strong>{" "}
            <a
              href="https://www.github.com/Risclover/ribbit"
              target="_blank"
              className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
            >
              {repoLink}
            </a>
          </li>
          <li>
            <strong>Live demo:</strong>{" "}
            <a
              href="https://ribbit-app.herokuapp.com"
              target="_blank"
              className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
            >
              {demoLink}
            </a>
          </li>
        </ul>
      </div>
    </div>
