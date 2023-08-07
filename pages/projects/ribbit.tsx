import ComparisonSlider from "@/components/comparisonslider";
import topImage from "../../public/images/comparison-ribbit-1.png";
import bottomImage from "../../public/images/comparison-reddit-1.png";
import ribbitComparison2 from "../../public/images/projects/ribbit/comparison-ribbit-2.png";
import redditComparison2 from "../../public/images/projects/ribbit/comparison-reddit-2.png";
import Layout from "@/components/layout";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer/videoplayer";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// ---

// title: Ribbit
// subtitle: A feature-rich fullstack pixel-perfect clone of Reddit/

// ---

// <Layout>
// # Ribbit

// Ribbit is a pixel-perfect clone of Reddit and is my biggest project to date. It includes an entire list of features including User Accounts, Communities, Subscriptions, Posts, Comments, and Votes, but that is only scratching the surface of all that Ribbit offers. Refer to the Quick Facts section below for the full list of features. I built Ribbit from scratch entirely on my own, including the frontend, the backend, and the design of the website. My goal was to build a recreation of Reddit that stayed as true to the original as possible, and although I personally think I still have a little bit of work to do to achieve its full potential, Ribbit is well on its way in that regard!

// ## Quick Facts

// - **Title**: Ribbit
// - **Tech stack**: React, Redux, Flask, SQLAlchemy, socket.io
// - **Features**:
//   - User accounts
//   - User profiles
//   - Communities
//   - Community rules
//   - Community subscriptions
//   - Posts
//   - Post votes
//   - Comments
//   - Comment votes
//   - Search
//   - Static messages
//   - Notifications
//   - Live chat
//   - Followers
//   - Favorite communities
//   - Favorite users
//   - Recently viewed posts
// - **Code Repo**: https://www.github.com/Risclover/ribbit
// - **Live Demo**: https://ribbit-app.herokuapp.com

// ## About Ribbit

// ### Ribbit vs. Reddit

// What follows is a small collection of screenshots from Ribbit overlayed with screenshots of equivalent pages or components from Reddit to compare the two sites with each other. You can drag the sliders over the images to show more of a photo (drag the slider towards the right to show more of the image on the left, and drag the slider towards the left to show more of the image on the right).

// <Ribbit />
// </Layout>

export default function Ribbit() {
  const [showPreview, setShowPreview] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [headingsList, setHeadingsList] = useState<any>([]);
  const fileContent: any = [];
  const headingsRef = useRef(null);
  const headings: { id: string; slug: string; title: string; level: number }[] =
    [
      { id: "1", slug: "hello", title: "Hello", level: 2 },
      { id: "2", slug: "bye", title: "Bye", level: 3 },
    ];

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
    console.log("headings:", headingsList);
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

  return (
    <Layout postData={postData}>
      <Head>
        <title>Project Details: Ribbit</title>
      </Head>

      <MobileTableofContents headings={fileContent} headingsRef={headingsRef} />

      <div
        ref={headingsRef}
        className="mx-auto w-full max-w-6xl px-6 lg:px-12 py-10 lg:py-20 dark:text-gray-50"
      >
        <div className="w-full text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-gray-50">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8">
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
          <div className="quickfacts-div w-full max-w-[700px] rounded-[8px] mt-12 overflow-hidden dark:bg-slate-700">
            <div className="bg-indigo-200 px-[30px] py-[11px] dark:bg-slate-900">
              <h3 className="text-2xl font-bold font-wotfard leading-0">
                Quick Facts
              </h3>
            </div>
            <div className="px-[30px] py-[10px]">
              <ul className="quickfacts break-normal">
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
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16">
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
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16">
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
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16">
            Features
          </h2>
          <div className="font-woftard text-lg mt-7">
            Ribbit offers a rich array of features designed to create an
            immersive and engaging social experience.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">Users</h3>
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
          <h3 className="text-2xl font-bold mb-8 mt-16">Communities</h3>
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
          <h3 className="text-2xl font-bold mb-8 mt-16">Subscriptions</h3>
          <div className="font-wotfard text-lg mt-7">
            Users can subscribe to their favorite communities, which adds the
            community's posts to the user's front page feed, and makes it easily
            accessible by adding it to both the navigation dropdown and the
            'Communities' list on the post creation page. Subscriptions also
            enable users to stay engaged with their areas of interest.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">Community Rules</h3>
          <div className="font-wotfard text-lg mt-7">
            Community creators can establish rules and guidelines for their
            respective communities. These rules help maintain a positive
            community environment by setting standards for content and behavior.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">Posts</h3>
          <div className="font-wotfard text-lg mt-7">
            Users can submit various types of content, such as links, images,
            and text-based posts, to existing communities. Posting allows users
            to share information, express opinions, and contribute to the
            community.
          </div>
          <VideoPlayer src="/images/projects/ribbit/ribbit-post.mp4" />
          <h3 className="text-2xl font-bold mb-8 mt-16">Comments</h3>
          <div className="font-wotfard text-lg mt-7">
            Users can engage in discussions by leaving comments on posts.
            Comments facilitate conversations and allow users to express their
            thoughts on various topics.
          </div>
          <VideoPlayer src="/images/projects/ribbit/ribbit-comment.mp4" />

          <h3 className="text-2xl font-bold mb-8 mt-16">Post Votes</h3>
          <div className="font-wotfard text-lg mt-7">
            The voting system allows users to upvote or downvote posts,
            influencing their visibility and popularity within the community.
            Voting promotes the best content and determines what gains
            visibility.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">Comment Votes</h3>
          <div className="font-wotfard text-lg mt-7">
            Similarly, users can vote on comments, promoting thoughtful and
            relevant discussions. Comment voting allows users to express
            agreement or disagreement with specific comments.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">
            Image Uploads (AWS S3)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The platform integrates with AWS S3 to enable users to upload images
            for their profiles and communities. Community owners can set rules
            for image uploads to ensure that content aligns with community
            guidelines.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">Followers</h3>
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
          <h3 className="text-2xl font-bold mb-8 mt-16">Search</h3>
          <div className="font-wotfard text-lg mt-7">
            A powerful search functionality allows users to find communities,
            posts, and users based on keywords and relevant criteria. The search
            feature enhances content discoverability and user satisfaction.
          </div>
          <div className="mb-40">
            <img
              src="/images/projects/ribbit/ribbit-favorite.png"
              className="schema-img max-w-[219px] mx-auto lg:mr-20 lg:ml-10 lg:float-left my-10 lg:my-0"
              alt="Ribbit favorites"
            />
            <h3 className="text-2xl font-bold mb-8 mt-16 lg:pt-14">
              Favorite Users
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can mark followed users as favorites, making it easier to
              access their content. The favorite users feature streamlines the
              process of following specific users and viewing their
              contributions.
            </div>
            <h3 className="text-2xl font-bold mb-8 mt-16">
              Favorite Communities
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can also mark subscribed communities as favorites for quick
              access to their preferred content. Favorite communities enhance
              the user experience by allowing quick navigation to frequently
              visited communities.
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">
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
          <h3 className="text-2xl font-bold mb-8 mt-16">Messaging</h3>
          <div className="font-wotfard text-lg mt-7">
            The comprehensive messaging system allows users to send private
            messages to other users within the platform.
          </div>
          <img
            src="/images/projects/ribbit/ribbit-messages.png"
            className="schema-img max-w-[700px] mx-auto my-10"
            alt="Ribbit messages"
          />
          <h3 className="text-2xl font-bold mb-8 mt-16">Notifications</h3>
          <div className="font-wotfard text-lg mt-7">
            Users receive notifications for new messages, post replies, and new
            followers.
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16">
            Live Chat (using socket.io)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The live chat feature enables real-time discussions between
            community members, enhancing user engagement.
          </div>
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8">
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
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8">
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
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8">
            Ribbit vs. Reddit: A Direct Comparison
          </h2>
          <div className="font-wotfard text-lg mt-7">
            To illustrate how close - or different - various aspects of Ribbit
            are to/from their Reddit equivalents, I have some image comparison
            sliders here. To show more of the Ribbit image, drag the slider to
            the right. Likewise, to show more of the Reddit image, drag the
            slider to the left.
          </div>
          <h3 className="text-2xl font-bold mt-16 mb-8">Homepage</h3>
          <ComparisonSlider topImage={topImage} bottomImage={bottomImage} />
          <h3 className="text-2xl font-bold mt-16 mb-8">Messages</h3>
          <ComparisonSlider
            topImage={ribbitComparison2}
            bottomImage={redditComparison2}
          />
        </div>
      </div>
    </Layout>
  );
}
