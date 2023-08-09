import ComparisonSlider from "@/components/comparisonslider";
import topImage from "../../public/images/comparison-ribbit-1.png";
import bottomImage from "../../public/images/comparison-reddit-1.png";
import ribbitComparison2 from "../../public/images/projects/ribbit/comparison-ribbit-2.png";
import redditComparison2 from "../../public/images/projects/ribbit/comparison-reddit-2.png";
import ribbitComparison3 from "../../public/images/projects/ribbit/comparison-ribbit-3.png";
import redditComparison3 from "../../public/images/projects/ribbit/comparison-reddit-3.png";
import Layout from "@/components/layout";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer/videoplayer";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function Ribbit() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [headingsList, setHeadingsList] = useState<any>([]);
  const headingsRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3, h4");
    Array.from(headings).map((heading: any) =>
      setHeadingsList([
        ...headingsList,
        {
          slug: heading.textContent.toLowerCase().split("").join("-"),
          level: heading.nodeName.slice(1),
        },
      ])
    );
  }, []);

  const handleFeatures = () => {
    setShowFeatures(!showFeatures);

    const featuresList = document.querySelector(".quickfacts-list");

    if (featuresList?.classList.contains("open")) {
      featuresList?.classList.remove("open");
    } else {
      featuresList?.classList.add("open");
    }
  };

  const postData = {
    category: "Projects",
    categoryUrl: "/#projects",
    subcategory: "Project Details",
    title: "Ribbit",
    subtitle:
      "A feature-rich pixel-perfect clone of the social media site Reddit.com",
  };

  const fileContent = [
    { id: 1, slug: "introduction", title: "Introduction", level: 2 },
    { id: 2, slug: "project-goals", title: "Project Goals", level: 2 },
    { id: 3, slug: "tech-stack", title: "Tech Stack", level: 2 },
    { id: 4, slug: "features", title: "Features", level: 2 },
    { id: 5, slug: "users", title: "Users", level: 3 },
    { id: 6, slug: "communities", title: "Communities", level: 3 },
    { id: 7, slug: "subscriptions", title: "Subscriptions", level: 3 },
    { id: 8, slug: "community-rules", title: "Community Rules", level: 3 },
    { id: 9, slug: "posts", title: "Posts", level: 3 },
    { id: 10, slug: "comments", title: "Comments", level: 3 },
    { id: 11, slug: "post-votes", title: "Post Votes", level: 3 },
    { id: 12, slug: "comment-votes", title: "Comment Votes", level: 3 },
    {
      id: 13,
      slug: "image-uploads",
      title: "Image Uploads (AWS S3)",
      level: 3,
    },
    { id: 14, slug: "followers", title: "Followers", level: 3 },
    { id: 15, slug: "search", title: "Search", level: 3 },
    { id: 16, slug: "favorite-users", title: "Favorite Users", level: 3 },
    {
      id: 17,
      slug: "favorite-communities",
      title: "Favorite Communities",
      level: 3,
    },
    {
      id: 18,
      slug: "recently-viewed-posts",
      title: "Recently Viewed Posts",
      level: 3,
    },
    { id: 19, slug: "messaging", title: "Messaging", level: 3 },
    { id: 20, slug: "notifications", title: "Notifications", level: 3 },
    {
      id: 21,
      slug: "live-chat",
      title: "Live Chat (Using Socket.io)",
      level: 3,
    },
    { id: 22, slug: "challenges-faced", title: "Challenges Faced", level: 2 },
    { id: 23, slug: "lessons-learned", title: "Lessons Learned", level: 2 },
    {
      id: 24,
      slug: "ribbit-vs-reddit",
      title: "Ribbit vs. Reddit: A Direct Comparison",
      level: 2,
    },
    {
      id: 25,
      slug: "homepage",
      title: "Homepage",
      level: 3,
    },
    {
      id: 26,
      slug: "messages",
      title: "Messages",
      level: 3,
    },
    {
      id: 27,
      slug: "comparison-communities",
      title: "Communities",
      level: 3,
    },
  ];

  return (
    <Layout postData={postData}>
      <Head>
        <title>Project Details: Ribbit</title>
      </Head>
      <MobileTableofContents headings={fileContent} headingsRef={headingsRef} />
      <div
        id="about"
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-12 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900"
      >
        <TableofContents headings={fileContent} headingsRef={headingsRef} />
        <div className="max-w-6xl font-wotfard text-lg w-full mx-auto">
          <h2
            id="introduction"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8"
          >
            Introduction
          </h2>
          <div className="font-wotfard text-lg">
            Ribbit is a sophisticated web application developed to replicate and
            enhance the core functionalities of Reddit, a popular social news
            aggregation and discussion platform. This project serves as a
            showcase of my expertise in software engineering and full-stack web
            development, utilizing a powerful tech stack comprising Flask,
            SQLAlchemy, React, and Redux. Ribbit aims to provide users with a
            comprehensive social experience by incorporating a wide array of
            features, including live chat using Socket.io, image uploads using
            AWS S3, and an extensive messaging system.
          </div>
          <div className="quickfacts-div w-full max-w-[700px] rounded-[8px] mt-12 font-rubik text-[16px] font-medium text-slate-900 dark:text-gray-50 overflow-hidden dark:bg-slate-700 mx-auto">
            <div className="bg-indigo-200 px-[30px] py-[11px] dark:bg-slate-800">
              <h3 className="text-2xl font-bold font-rubik leading-0 mt-1">
                Quick Facts
              </h3>
            </div>
            <div className="px-[30px] py-[10px]">
              <ul className="quickfacts break-normal mb-0">
                <li>
                  <strong>Project title:</strong> Ribbit
                </li>
                <li>
                  <strong>Description:</strong> A feature-rich pixel-perfect
                  clone of Reddit.
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
                      <li>Users</li>
                      <li>Communities</li>
                      <li>Subscriptions</li>
                      <li>Posts</li>
                      <li>Comments</li>
                      <li>Community rules</li>
                      <li>Post votes</li>
                      <li>Comment votes</li>
                      <li>Search</li>
                      <li>Recently viewed posts</li>
                      <li>Followers</li>
                      <li>Favorite users</li>
                      <li>Favorite communities</li>
                      <li>Messages</li>
                      <li>Notifications</li>
                      <li>Live chat</li>
                      <li>Image uploads</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <strong>Github Repo:</strong>{" "}
                  <a
                    href="https://www.github.com/Risclover/ribbit"
                    target="_blank"
                    className="text-indigo-600 dark:text-indigo-300 hover:underline hidden sm:inline"
                  >
                    https://www.github.com/Risclover/ribbit
                  </a>
                  <a
                    href="https://www.github.com/Risclover/ribbit"
                    target="_blank"
                    className="text-indigo-600 dark:text-indigo-300 hover:underline inline sm:hidden"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <strong>Live demo:</strong>{" "}
                  <a
                    href="https://ribbit-app.herokuapp.com"
                    target="_blank"
                    className="text-indigo-600 dark:text-indigo-300 hover:underline hidden sm:inline"
                  >
                    https://www.ribbit-app.herokuapp.com
                  </a>
                  <a
                    href="https://ribbit-app.herokuapp.com"
                    target="_blank"
                    className="text-indigo-600 dark:text-indigo-300 hover:underline inline sm:hidden"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h2
            id="project-goals"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Project Goals
          </h2>
          <div className="font-wotfard text-lg mt-7">
            The primary objectives for Ribbit were as follows:
          </div>
          <ol>
            <li>
              <strong>Functionality replication:</strong> The core focus was on
              replicating Reddit's essential features, including user
              management, community creation, content submission, voting,
              commenting, and user interactions.
            </li>
            <li>
              <strong>Database design:</strong> Designing an efficient and
              scalable database schema using SQLAlchemy to store user data,
              posts, comments, communtiy rules, and other information.
            </li>
            <img
              className="schema-img my-20 mx-auto"
              src="/images/ribbit-schema.png"
              alt="schema"
            />
            <li>
              <strong>User interface (UI) design:</strong> Crafting an intuitive
              and visually appealing user interfae with React and Redux to
              enhance the overall user experience and ensure ease of navigation.
            </li>
            <li>
              <strong>User authentication and authorization:</strong>{" "}
              Implementing a robust user authentication system with Flask and
              JWT to ensure access to the application's features.
            </li>
            <li>
              <strong>Real-time features:</strong> Integrating socket.io to
              provide real-time interactions for features like live chat and
              notifications.
            </li>
            <li>
              <strong>Image uploads (AWS S3):</strong> Integrating AWS S3 for
              seamless image uploads and storage for user profiles and community
              content.
            </li>
          </ol>
          <h2
            id="tech-stack"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Tech Stack
          </h2>
          <div className="font-wotfard text-lg mt-7">
            To achieve the goals for Ribbit, a robust tech stack was chosen,
            combining the best tools and technologies:
          </div>
          <ul className="project-ul">
            <li>
              <strong>Frontend:</strong>{" "}
              <span className="text-pink-500">React.js</span>,{" "}
              <span className="text-pink-500">Redux</span> for state management,
              and socket.io for real-time features.
            </li>
            <li>
              <strong>Backend:</strong>{" "}
              <span className="text-pink-500">Flask</span>, a lightweight Python
              web framework for handling HTTP requests, authentication, and data
              processing.
            </li>
            <li>
              <strong>Database:</strong>{" "}
              <span className="text-pink-500">SQLAlchemy</span>, a Python SQL
              toolkit, for efficient database interactions and data storage.
            </li>
            <li>
              <strong>User authentication:</strong>{" "}
              <span className="text-pink-500">JSON Web Tokens (JWT)</span> for
              secure user authentication and authorization.
            </li>
            <li>
              <strong>Real-time features (live chat):</strong>{" "}
              <span className="text-pink-500">Socket.io</span> for real-time
              communication between users and live chat functionality.
            </li>
            <li>
              <strong>Image uploads (AWS S3):</strong> Integration with{" "}
              <span className="text-pink-500">AWS S3</span> for image uploads
              and secure storage.
            </li>
            <li>
              <strong>Version control:</strong>{" "}
              <span className="text-pink-500">Git</span> and{" "}
              <span className="text-pink-500">Github</span> for efficient
              version control and code management.
            </li>
          </ul>
          <h2
            id="features"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Features
          </h2>
          <div className="font-woftard text-lg mt-7">
            Ribbit offers a rich array of features designed to create an
            immersive and engaging social experience.
          </div>
          <h3 id="users" className="text-2xl font-bold mb-8 mt-16">
            Users
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The application allows users to sign up for new accounts, log in to
            existing accounts, and manage their profiles. Users can update
            profile information including a profile picture and bio to
            personalize their presence on the platform.
          </div>
          <Image
            src="/images/projects/ribbit/ribbit-userprofile.png"
            alt="Ribbit user profile"
            width={1000}
            height={1000}
            className="schema-img max-w-[900px] mx-auto my-10"
          />
          <div className="font-wotfard text-lg mt-7">
            Users who wish to simply visit Ribbit briefly can use the demo login
            feature, offered as a button at the top of the "Log in" window.
          </div>
          <Image
            src="/images/projects/ribbit/ribbit-login.png"
            alt="Ribbit login"
            width={1000}
            height={1000}
            className="schema-img max-w-[400px] mx-auto my-10"
          />
          <h3 id="communities" className="text-2xl font-bold mb-8 mt-16">
            Communities
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Referred to as 'subreddits' on Reddit, users have the ability to
            create new communities dedicated to specific topics or interests.
            Community creators can define rules and guidelines for their
            respective communities, ensuring a safe and respectful environment
            for all members. They can also customize community information (such
            as the community image and 'About' section), and have the power to
            delete the community.
          </div>
          <Image
            src="/images/projects/ribbit/ribbit-community.png"
            alt="Ribbit user profile"
            width={1000}
            height={1000}
            className="schema-img max-w-[900px] mx-auto my-10"
          />
          <h3 id="subscriptions" className="text-2xl font-bold mb-8 mt-16">
            Subscriptions
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can subscribe to their favorite communities, which adds the
            community's posts to the user's front page feed, and makes it easily
            accessible by adding it to both the navigation dropdown and the
            'Communities' list on the post creation page. Subscriptions also
            enable users to stay engaged with their areas of interest.
          </div>
          <h3 id="community-rules" className="text-2xl font-bold mb-8 mt-16">
            Community Rules
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Community creators can establish rules and guidelines for their
            respective communities. These rules help maintain a positive
            community environment by setting standards for content and behavior.
          </div>
          <h3 id="posts" className="text-2xl font-bold mb-8 mt-16">
            Posts
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can submit various types of content, such as links, images,
            and text-based posts, to existing communities. Posting allows users
            to share information, express opinions, and contribute to the
            community.
          </div>
          <VideoPlayer src="/images/projects/ribbit/ribbit-post.mp4" />
          <h3 id="comments" className="text-2xl font-bold mb-8 mt-16">
            Comments
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can engage in discussions by leaving comments on posts.
            Comments facilitate conversations and allow users to express their
            thoughts on various topics.
          </div>
          <VideoPlayer src="/images/projects/ribbit/ribbit-comment.mp4" />

          <h3 id="post-votes" className="text-2xl font-bold mb-8 mt-16">
            Post Votes
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The voting system allows users to upvote or downvote posts,
            influencing their visibility and popularity within the community.
            Voting promotes the best content and determines what gains
            visibility.
          </div>
          <h3 id="comment-votes" className="text-2xl font-bold mb-8 mt-16">
            Comment Votes
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Similarly, users can vote on comments, promoting thoughtful and
            relevant discussions. Comment voting allows users to express
            agreement or disagreement with specific comments.
          </div>
          <h3 id="image-uploads" className="text-2xl font-bold mb-8 mt-16">
            Image Uploads (AWS S3)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The platform integrates with AWS S3 to enable users to upload images
            for their profiles and communities. Community owners can set rules
            for image uploads to ensure that content aligns with community
            guidelines.
          </div>
          <h3 id="followers" className="text-2xl font-bold mb-8 mt-16">
            Followers
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can follow other users to stay updated on their posts, which
            will appear on the user's main feed. This enables users to engage
            with content from users they find interesting or influential.
          </div>
          <img
            src="/images/projects/ribbit/ribbit-followers.png"
            className="schema-img max-w-[390px] mx-auto my-10"
            alt="Ribbit followers"
          />
          <h3 id="search" className="text-2xl font-bold mb-8 mt-16">
            Search
          </h3>
          <div className="font-wotfard text-lg mt-7">
            A powerful search functionality allows users to find communities,
            posts, and users based on keywords and relevant criteria. The search
            feature enhances content discoverability and user satisfaction.
          </div>
          <div className="mb-20">
            <img
              src="/images/projects/ribbit/ribbit-favorite.png"
              className="schema-img max-w-[219px] mx-auto lg:mr-20 lg:ml-10 lg:float-left my-10 lg:my-0"
              alt="Ribbit favorites"
            />
            <h3 id="favorite-users" className="text-2xl font-bold mb-8 mt-16">
              Favorite Users
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can mark followed users as favorites, making it easier to
              access their content. The favorite users feature streamlines the
              process of following specific users and viewing their
              contributions.
            </div>
            <h3
              id="favorite-communities"
              className="text-2xl font-bold mb-8 mt-16"
            >
              Favorite Communities
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can also mark subscribed communities as favorites for quick
              access to their preferred content. Favorite communities enhance
              the user experience by allowing quick navigation to frequently
              visited communities.
            </div>
          </div>
          <h3
            id="recently-viewed-posts"
            className="text-2xl font-bold mb-8 mt-16"
          >
            Recently Viewed Posts
          </h3>
          <div className="font-wotfard text-lg mt-7">
            A section for recently viewed posts helps users keep track of the
            content they have interacted with recently. The feature aids in
            returning to interesting content that users might want to revisit or
            engage with further.
          </div>
          <img
            src="/images/projects/ribbit/ribbit-recentlyviewed.png"
            className="schema-img max-w-[330px] mx-auto my-10"
            alt="Ribbit: Recently viewed posts"
          />
          <h3 id="messaging" className="text-2xl font-bold mb-8 mt-16">
            Messaging
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The comprehensive messaging system allows users to send private
            messages to other users within the platform.
          </div>
          <img
            src="/images/projects/ribbit/ribbit-messages.png"
            className="schema-img max-w-[700px] mx-auto my-10"
            alt="Ribbit messages"
          />
          <h3 id="notifications" className="text-2xl font-bold mb-8 mt-16">
            Notifications
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users receive notifications for new messages, post replies, and new
            followers.
          </div>
          <h3 id="live-chat" className="text-2xl font-bold mb-8 mt-16">
            Live Chat (using socket.io)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The live chat feature enables real-time discussions between
            community members, enhancing user engagement.
          </div>
          <h2
            id="challenges-faced"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8"
          >
            Challenges Faced
          </h2>
          <div className="">
            Developing Ribbit presented several challenges that demanded
            innovative solutions.
          </div>
          <ol>
            <li>
              <strong>Real-time features:</strong> Implementing real-time
              features such as live chat and notifications required
              understanding websockets and designing efficient event-driven
              systems.
            </li>
            <li>
              <strong>Image uploads and storage:</strong> Integrating AWS S3 for
              image uploads and secure storage demanded proper configuration and
              secure handling of user-uploaded content.
            </li>
            <li>
              <strong>Scalability</strong>: Designing a scalable architecture to
              handle increased user activity, messaging, and live chat
              interactions was a critical consideration.
            </li>
            <li>
              <strong>Messaging system:</strong> Building a comprehensive
              messaging system with proper authentication, authorization, and
              secure communication required careful planning and implementation.
            </li>
          </ol>
          <h2
            id="lessons-learned"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8"
          >
            Lessons Learned
          </h2>
          <div>
            Ribbit provided invaluable insights into building complex and
            dynamic web applications. Some key takeaways include:
          </div>
          <ol>
            <li>
              <strong>Integration of real-time features:</strong> Understanding
              the concepts of websockets and event-driven architecture for
              implementing real-time features.
            </li>
            <li>
              <strong>AWS S3 integration:</strong> Learning to use AWS S3 for
              secure image uploads and storage, ensuring a seamless user
              experience.
            </li>
            <li>
              <strong>Scalability and optimization:</strong> Designing a
              scalable architecture and optimizing database interactions for
              increased user activity.
            </li>
            <li>
              <strong>Comprehensive messaging system:</strong> Building a
              messaging system with proper authentication, authorization, and
              secure communication required meticulous planning and
              implementation. Understanding the intricacies of real-time
              communication and secure messaging was essential.
            </li>
            <li>
              <strong>
                Folder structure and organiziation for large projects:
              </strong>{" "}
              Deviating from the default folder structure by organizing the
              project folder structure in a way that makes sense for the
              project's size and specifications.
            </li>
          </ol>
          <h2
            id="ribbit-vs-reddit"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8"
          >
            Ribbit vs. Reddit: A Direct Comparison
          </h2>
          <div className="font-wotfard text-lg mt-7">
            To illustrate how close - or different - various aspects of Ribbit
            are to/from their Reddit equivalents, I have some image comparison
            sliders here. To show more of the Ribbit image, drag the slider to
            the right. Likewise, to show more of the Reddit image, drag the
            slider to the left.
          </div>
          <h3 id="homepage" className="text-2xl font-bold mt-16 mb-8">
            Homepage
          </h3>
          <ComparisonSlider topImage={topImage} bottomImage={bottomImage} />
          <h3 id="messages" className="text-2xl font-bold mt-16 mb-8">
            Messages
          </h3>
          <ComparisonSlider
            topImage={ribbitComparison2}
            bottomImage={redditComparison2}
          />
          <h3
            id="comparison-communities"
            className="text-2xl font-bold mt-16 mb-8"
          >
            Communities
          </h3>
          <ComparisonSlider
            topImage={ribbitComparison3}
            bottomImage={redditComparison3}
          />
        </div>
      </div>
    </Layout>
  );
}
