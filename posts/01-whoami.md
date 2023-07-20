---
title: whoami
date: 06/20/23
preview: Hello! I'm Sara, and this is a little introduction to me, the author of this here blog.
category: Personal
slug: 01-whoami
---

## Introduction

Welcome to my blog! I'm Sara, your hostess for the evening and the voice behind said blog. This space is all about my adventures as a software engineer. I'll be sharing my thoughts, experiences, and insights on everything related to the world of coding. From my day-to-day projects to my takes on the latest trends, I aim to cover it all.

I hail from sunny California. Over the years, I've developed a serious passion for software engineering, and I am over the moon about it; finally, after spending the better part of a decade searching for what I want to do for the rest of my life, I feel that I've found my true calling, and the idea that I can get paid for doing what I love is an absolute dream come true.

Once I knew I wanted to take my interest in this field seriously, my journey began with frontend engineering. After a year of self-study diving into various frontend languages and technologies, I took a leap and enrolled in App Academy for fullstack training. Graduating in February was a major milestone, and now I'm eagerly seeking job opportunities while both honing my existing skills and learning as much as I can.

In my spare time, you'll most likely find me glued to my computer, either studying and expanding my knowledge or working on some sort of project. These days, my focus revolves around Ribbit, a pixel-perfect Reddit clone that I am incredibly proud of, and delving into the realm of using TypeScript with React. Additionally, I make it a priority to deepen my understanding of Data Structures & Algorithms, both to ace potential technical interviews and to continuously grow as a developer.

I'm a friendly soul who's always up for a chat. Don't hesitate to reach out if you have any questions or simply want to share your thoughts; I promise I won't bite. In the meantime, I hope you enjoy!

### Some random code

```javascript
import React from "react";
import range from "lodash.range";

import styles from "./PrideFlag.module.css";

function PrideFlag({ numOfColumns = 10, staggeredDelay = 100 }) {
  return (
    <div className={styles.flag}>
      {range(numOfColumns).map((columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{
            animationDelay: columnIndex * staggeredDelay + "ms",
          }}
        />
      ))}
    </div>
  );
}

export default PrideFlag;
```
