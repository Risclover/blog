import { useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import ComparisonSlider from "@/components/comparisonslider";
import Layout from "@/components/layout";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import VideoPlayer from "@/components/videoplayer";
import ImageModal from "@/components/imagemodal";
import QuickFacts from "@/components/quick-facts";
import ArticleHeader from "@/components/article-header";
import ArticleParagraph from "@/components/article-paragraph";
import useTableOfContents from "hooks/useTableOfContents";
import topImage from "public/images/comparison-ribbit-1.png";
import bottomImage from "public/images/comparison-reddit-1.png";
import ribbitComparison2 from "public/images/projects/ribbit/comparison-ribbit-2.png";
import redditComparison2 from "public/images/projects/ribbit/comparison-reddit-2.png";
import ribbitComparison3 from "public/images/projects/ribbit/comparison-ribbit-3.png";
import redditComparison3 from "public/images/projects/ribbit/comparison-reddit-3.png";
import userProfile from "public/images/projects/ribbit/user-profile.png";
import "yet-another-react-lightbox/styles.css";
import {
  FlaskIcon,
  FlaskSocketIoIcon,
  ReactIcon,
  ReduxIcon,
  SQLAIcon,
  TypeScriptIcon,
} from "@/components/icons";
import { Badge } from "@/components/badge";

export default function Ribbit() {
  const headingsRef = useRef(null);

  const postData = {
    category: "Projects",
    categoryUrl: "/#projects",
    title: "Ribbit",
    subtitle:
      "A feature-rich pixel-perfect clone of the social media site Reddit.com",
  };

  const fileContent = useTableOfContents();

  const imageProps = {
    homepage: {
      ribbit: {
        src: topImage.src,
        alt: "Ribbit's version",
      },
      reddit: {
        src: bottomImage.src,
        alt: "Reddit's version",
      },
    },
    messages: {
      ribbit: {
        src: ribbitComparison2.src,
        alt: "Ribbit's version",
      },
      reddit: {
        src: redditComparison2.src,
        alt: "Reddit's version",
      },
    },
    communities: {
      ribbit: {
        src: ribbitComparison3.src,
        alt: "Ribbit's version",
      },
      reddit: {
        src: redditComparison3.src,
        alt: "Reddit's version",
      },
    },
  };

  const projectInfo = {
    title: "Ribbit",
    description: "A feature-rich pixel-perfect clone of Reddit.",
    techStack: (
      <div className="flex gap-2 flex-wrap my-2">
        <Badge
          svg={<ReactIcon />}
          color="text-[#1a92b3]"
          bgColor="bg-[#1a92b3]"
          darkColor="dark:text-[#61DAFB]"
          darkBgColor="dark:bg-[#61DAFB]"
          title="React"
        />
        <Badge
          svg={<TypeScriptIcon />}
          title="TypeScript"
          color="text-[#007acc]"
          bgColor="bg-[#007acc]"
          darkColor="dark:text-[#1291e6]"
          darkBgColor="dark:bg-[#1291e6]"
        />
        <Badge
          svg={<ReduxIcon />}
          title="Redux"
          bgColor="bg-[#764abc]"
          color="text-[#764abc]"
          darkColor="dark:text-[#b688ff]"
          darkBgColor="dark:bg-[#b688ff]"
        />
        <Badge
          svg={<FlaskIcon />}
          title="Flask"
          color="text-[#090909]"
          bgColor="bg-[#090909]"
          darkColor="dark:text-[#d4d4d4]"
          darkBgColor="dark:bg-[#d4d4d4]"
        />
        <Badge
          svg={<SQLAIcon />}
          title="SQLAlchemy"
          bgColor="bg-red-700"
          color="text-red-700"
          darkColor="dark:text-red-400"
          darkBgColor="dark:bg-red-400"
        />
        <Badge
          svg={<FlaskSocketIoIcon />}
          title="Flask-SocketIO"
          color="text-gray-500"
          bgColor="bg-gray-500"
          darkColor="dark:text-gray-300"
          darkBgColor="dark:bg-gray-300"
        />{" "}
      </div>
    ),
    features: [
      "Users",
      "Communities",
      "Subscriptions",
      "Posts",
      "Comments",
      "Post Votes",
      "Comment Votes",
      "Community Rules",
      "Search",
      "Recently Viewed Posts",
      "Community Appearance",
      "Followers",
      "Favorite Users",
      "Favorite Communities",
      "Messages",
      "Notifications",
      "Live Chat",
      "Image Uploads",
    ],
    repo: "https://github.com/Risclover/ribbit",
    demo: "https://ribbit-app.herokuapp.com",
  };

  return (
    <Layout postData={postData}>
      <Head>
        <title>Sara Dunlop | Ribbit</title>
      </Head>
      <MobileTableofContents headings={fileContent} />
      <div
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900 gap-14"
      >
        <TableofContents headings={fileContent} />
        <div className="font-wotfard text-lg w-full lg:pl-6 flex-1 min-w-0">
          <QuickFacts projectInfo={projectInfo} />
          <div className="project-details">
            <h2 id="introduction">Introduction</h2>
            <p>
              Ever wondered what it takes to build a fully-fledged social
              platform from the ground up? I know I did. Introducing{" "}
              <span className="text-pink-500">Ribbit</span>, a meticulously
              crafted, pixel-perfect clone of Reddit that mirrors both its
              functionality and appearance down to the finest detail.
            </p>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-homepage.png"
              imgAlt="Ribbit homepage"
              title="Ribbit Homepage"
              description={`The homepage of Ribbit, which shows the user's main feed.`}
            />
            <p>
              {" "}
              Developed using <span className="text-pink-500">React</span>,{" "}
              <span className="text-pink-500">Flask</span>,{" "}
              <span className="text-pink-500">SQLAlchemy</span>,{" "}
              <span className="text-pink-500">Redux</span>, and{" "}
              <span className="text-pink-500">Flask-SocketIO</span>, Ribbit
              isn't just a basic replica; it's a feature-rich application
              boasting live chat, real-time interactions, customizable community
              settings, and a host of interactive elements. This project stands
              as a testament to my full-stack development skills and unwavering
              dedication to delivering an authentic user experience that matches
              the original platform in every aspect.
            </p>
            <h2 id="project-overview">Project Overview</h2>
            <h3 id="purpose-and-inspiration">Purpose and Inspiration</h3>
            <p>
              Ribbit was created out of a genuine desire to learn the
              complexities of building a large-scale, interactive web
              application from scratch. I was specifically interested in
              developing a social media app, and Reddit -- being a cornerstone
              of online communities with its rich features and vast array of
              different communities -- seemed the perfect opportunity.
            </p>
            <p>
              By meticulously recreating Reddit's functionality and appearance
              with pixel-perfect precision, I aimed to push the boundaries of my
              full-stack development skills and gain hands-on experience with
              real-time communication technologies. The goal wasn't merely to
              replicate an existing platform, but to internalize the best
              practices that make such a large-scale application performant and
              user-friendly. Ribbit became a sandbox for experimentation and
              learning, allowing me to delve into the minutiae of fullstack
              integration, optimize user experience, and pay homage to the
              multitude of small details that elevate such a platform from good
              to exceptional.
            </p>
            <h3 id="primary-technologies-used">Primary Technologies Used</h3>
            <p>
              To bring Ribbit to life with the level of functionality and polish
              envisioned, I employed the following tech stack:
            </p>
            <h4 id="frontend">Frontend</h4>
            <ul>
              <li>
                <span className="text-pink-500">React</span> - Used for building
                reusable components and creating a dynamic, responsive user
                interface.
              </li>
              <li>
                <span className="text-pink-500">React-Router</span> -
                Facilitates smooth navigation between different views without
                the need for full page reloads.
              </li>
              <li>
                <span className="text-pink-500">Redux</span> - Manages the
                application’s state in a predictable way, simplifying data flow
                and state debugging.
              </li>
              <li>
                <span className="text-pink-500">CSS3</span> - Utilizes modern
                styling techniques to create a visually appealing and responsive
                design across all devices, including the use of CSS variables.
              </li>
            </ul>
            <h4 id="backend">Backend</h4>
            <ul>
              <li>
                <span className="text-pink-500">Flask</span> - Chosen for its
                lightweight and flexible nature, allowing rapid development and
                easy customization to meet Ribbit’s specific backend needs.
              </li>
              <li>
                <span className="text-pink-500">SQLAlchemy</span> - Provides a
                powerful ORM that simplifies database interactions and
                efficiently handles complex data relationships like users,
                posts, and comments.
              </li>
              <li>
                <span className="text-pink-500">
                  Flask-SocketIO / WebSockets
                </span>{" "}
                - Implemented to support real-time features such as live updates
                and instant notifications, enhancing user engagement on Ribbit.
              </li>
            </ul>
            <h4 id="testing">Testing</h4>
            <ul>
              <li>
                <span className="text-pink-500">Jest</span> - Used for its fast
                and reliable JavaScript testing capabilities, ensuring Ribbit’s
                frontend code remains robust and error-free.
              </li>
              <li>
                <span className="text-pink-500">React-Testing-Library</span> -
                Facilitates testing of React components from the user’s
                perspective, ensuring the interface behaves as expected.
              </li>
            </ul>
            <h3 id="database-schema">Database Schema</h3>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-database-schema-diagram.png"
              imgAlt="Ribbit's database schema"
              title="Ribbit's database schema"
              description=""
            />
            This is a diagram of Ribbit's database schema, which shows a visual
            of the app's database. Ribbit has become rather intricate, its
            database containing over 15 tables and over 25 relationships between
            them.
            <h2 id="key-features">Key Features</h2>
            <h3 id="user-management">User Management</h3>
            <p>
              Effective user management is the cornerstone of any thriving
              online community, and Ribbit excels in this domain by offering a
              comprehensive and intuitive system that mirrors the functionality
              of Reddit.
            </p>
            <h4 id="user-registration-and-authentication">User Accounts</h4>
            <p>
              Ribbit's authentication system provides a secure and seamless
              registration process, allowing users to create accounts
              effortlessly while ensuring that user data is handled securely.
            </p>
            <ul>
              <li>
                <span className="text-pink-500 mb-2">
                  Variety of sign-in options
                </span>{" "}
                - Users can sign into an account on Ribbit using one of three
                available options:
                <ul>
                  <li>
                    With their existing Google account (via Google's auth API)
                  </li>
                  <li>
                    Using the public demo account, provided specifically for
                    temporary access to tour Ribbit's features
                  </li>
                  <li>
                    By signing up for and signing in with a unique Ribbit
                    account
                  </li>
                </ul>
              </li>
              <li>
                <span className="text-pink-500">Secure authentication</span> -
                Ribbit ensures that user sessions are managed securely through
                the use of the packages like{" "}
                <span className="text-pink-500">Flask-Login</span> and{" "}
                <span className="text-pink-500">WTForms</span> (for form
                validation), password hashing, and CSRF protection, among
                others.
              </li>
              <li>
                <span className="text-pink-500">Password encryption</span> -
                User passwords are hashed and salted using robust algorithms,
                ensuring that sensitive information remains protected even in
                the event of a data breech.
              </li>
            </ul>
            <h4 id="profile-creation-and-customization">User Profiles</h4>
            <ImageModal
              imgSrc="/images/projects/ribbit/user-profile.png"
              imgAlt="User profile"
              title="Demo's user profile"
              description="An example of a user profile, which users can customize, as well as use to find a user's information and contact options"
            />
            <p>
              Each user with an account has their very own profile page, which
              other users can use to learn about the user and contact them.
            </p>
            <ul>
              <li>
                <span className="text-pink-500">Customizable settings</span> -
                Users can update essential information such as their display
                name, user bio, and profile picture, fostering a sense of
                ownership and community engagement. In addition, users can
                change their profile's banner, adding a touch of personalization
                to their page.
              </li>
              <li>
                <span className="text-pink-500">Unique user information</span> -
                Profiles contain the user's posts as well as account stats like
                karma, followers, and account creation date. In addition, when a
                user visits their own profile, they'll find a list of their
                owned communities for easier management.
              </li>
              <li>
                <span className="text-pink-500">Contact options</span> - Others
                can visit a user's profile page to find contact options such as
                private messaging and live chat, as well as the ability to
                follow the user.
              </li>
            </ul>
            <h4 id="following-and-favoriting-users">
              Following and Favoriting Users
            </h4>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-followers-window.png"
              title="A user's followers"
              imgAlt="A user's followers"
              description="Each user has the option to view a list of their own followers"
            />
            <p>
              All users have their own 'homepage feed', which contains a curated
              feed of posts. One of the ways to customize this feed is by
              following other users they find interesting, whose posts will then
              appear in the homepage feed. Followed users appear in their own
              'Followers' list in the left nav dropdown menu. A user is able to
              view the list of their followers (users following <em>them</em>)
              on their profile page, as well as their total followers count.
            </p>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-favorite-followers.png"
              imgAlt="The followers and favorites lists"
              title="The 'Followers' and 'Favorites' lists"
              description="Users can view their followed and favorited users in the left nav menu."
            />
            <p>
              Shown above, followed users are then able to be 'favorited' by
              toggling the star icon next to the user's name in the Followers
              section. When a user is favorited, they are put in the 'Favorites'
              section at the top of the left nav dropdown menu, making it easy
              to navigate to their profiles and keep track of the content
              creators that the user is into.
            </p>
            <h3 id="community-interaction">Community Interaction</h3>
            <h4 id="community-management-and-creation">
              Community Management and Creation
            </h4>
            <p>
              Ribbit empowers users to create and manage their own communities,
              mirroring the subreddit funcitonality of Reddit. This feature
              facilitates the formation of niche groups centered around specific
              interests, topics, or activities.
            </p>
            <ul>
              <li>
                <strong className="text-pink-500">Community creation</strong> -
                Users can create new communities by using the community creation
                form. After providing a unique community name that fits within
                the confines of community name restrictions, the community is
                created and the user can take control over their group.
              </li>
              <li>
                <strong className="text-pink-500">Community rules</strong> -
                Each community has its own set of rules, which the community's
                owner must write and submit themselves from within the
                community's settings.
              </li>
              <li>
                <strong className="text-pink-500">Moderation</strong> -
                Community owners are able to moderate their communities. They
                are able to edit and delete posts that break the commnity's
                rules, allowing them to manage their spaces effectively.
              </li>
            </ul>
            <h4 id="subscriptions-and-favoriting-communities">
              Subscriptions and Favoriting Communities
            </h4>
            <p>
              Users have the ability to customzie their content consumption by
              subscribing to specific communities, curating their homepage feed
              to include the posts from these communities. This allows Ribbit
              users to tailor their experience to their specific interests.
            </p>
            <p>
              Once a community has been subscribed to, the user can take it a
              step further by 'favoriting' the community, which is done by
              toggling the star icon next to the community's name in the left
              nav menu. A 'favorited' community appears in the 'Favorites' list
              at the top of the menu, alongside favorited followed users, making
              it easy for the user to navigate to their top communities as well
              as keep track of them from this list.
            </p>
            <h4 id="community appearance settings">
              Community Appearance Settings
            </h4>
            <p>
              Community owners have the complete freedom to style their
              communities from the community appearance settings. This includes
              the community's icon, banner, background, and theme colors, as
              well as other small details. A preview of the community offers a
              look at what the community will look like in real time before the
              user commits to the change.
            </p>
            <VideoPlayer
              src="/images/projects/ribbit/ribbit-community-appearance-settings.mp4"
              subtitle="Above is a video showing the community's appearance settings page. The community preview shows what the community will look like in real time as the user changes the community's colors. When the user clicks the 'Save' button and returns to the community's page, the changes are in effect."
            />
            <h3 id="content-creation">Content Creation</h3>
            <h4 id="posting-texts-images-or-links">
              Posting Text, Images, or Links
            </h4>
            <p>
              Users have access to multiple kinds of post feeds across Ribbit.
            </p>
            <ul>
              <li>
                <span className="text-pink-500">Homepage feed</span> - A user's
                homepage feed consists of posts from their followed users as
                well as their subscribed communities, allowing them to curate
                their feed to their own interests. Subscribing to the 'webdev'
                community, for example, ensures that posts from webdev appear in
                the homepage feed. Similarly, following the user 'Demo' makes it
                so that Demo's posts are on the homepage feed as well.
              </li>
              <li>
                <span className="text-pink-500">'All' feed</span> - The 'All'
                feed is a universal feed that contains all of the posts across
                Ribbit's many communities. As such, the 'All' feed is the same
                for all users, regardless of personal taste.
              </li>
              <li>
                <span className="text-pink-500">Community feed</span> - Each
                community has its own post feed, consisting of nothing more than
                the community's own posts. This feed is located on the
                community's page.
              </li>
              <li>
                <span className="text-pink-500">User feed</span> - User profiles
                contain the user's posts, so the feed on the user profile is the
                user feed.
              </li>
            </ul>
            <p>
              All of the above feeds are able to be sorted. When sorting by
              'Top', posts with the most upvotes are at the top of the list.
              Users can also sort by 'New', which is based on when the post was
              posted, with newer posts coming before older posts in the feed.
            </p>
            <p>
              In addition, there are 3 different kinds of formats that users can
              choose between: Card, Classic, and Compact.
            </p>
            <p>There are three types of posts users are able to create:</p>
            <ul>
              <li>
                <span className="text-pink-500">Text posts</span> - Within the
                text post form is a rich text editor, giving users the ability
                to stylize their posts with headers, bold text, italics, lists,
                and more, enhancing readability and presentation. The rich text
                edtior gives the user the ability to preview their post in real
                time, ensuring accuracy and satisfaction.
              </li>
              <li>
                <span className="text-pink-500">Image posts</span> - Integrated
                with AWS S3, the image post form enables the user to upload an
                image from their computer with ease.
              </li>
              <li>
                <span className="text-pink-500">Link posts</span> - When all it
                takes to convey a message or share information is a simple link,
                users are able to utilize the link post type, which allows them
                to post a URL with a title describing the link.
              </li>
            </ul>
            <h4 id="commenting-system">Commenting System</h4>
            <p>
              Engaging conversations and collaborative discussions are
              faciliated through Ribbit's robust commenting system, designed to
              promote meaningful interactiosn within communities. Users are able
              to edit their comments to refine their thoughts or correct
              mistakes, ensuring clarity and coherence in discussions. They may
              also delete their comments, allowing them to manage their
              contributions and maintain the integrity of their interactions.
            </p>
            <h4 id="voting-system">Voting System</h4>
            <p>
              A robust voting mechanism is integral to Ribbit, enabling users to
              express their opinions and influence the visibility of content
              within the platform.
            </p>
            <ul>
              <li>
                <span className="text-pink-500">Content ranking</span> - Posts
                and comments can be upvoted or downvoted, determining their
                prominence within communities and feeds based on user engagement
                and relevance.
              </li>
              <li>
                <span className="text-pink-500">Score display</span> - Each post
                and comment displays its current score, providing immediate
                feedback on its popularitry and community reaction.
              </li>
              <li>
                <span className="text-pink-500">Efficient state handling</span>-
                Utilizing Redux ensures that voting statres are managed
                consistently across the application, maintaining synchronization
                between the frontend and backend.
              </li>
              <li>
                <span className="text-pink-500">Optimistic UI updates</span> -
                Votes are reflected instantly in the user interface, enhancing
                responsiveness while backend confirmastions ensure data
                integrity.
              </li>
            </ul>
            <h3 id="user-to-user-communication">User-to-User Communication</h3>
            <h4 id="real-time-live-chat-functionality">
              Real-Time Live Chat Functionality
            </h4>
            <h4 id="messaging-between-users">Messaging Between Users</h4>
            <h4 id="real-time-notifications">Real-Time Notifications</h4>
            <div className="font-wotfard text-lg mt-7">
              The primary objectives for Ribbit were as follows:
            </div>
            <ol>
              <li>
                <strong>Functionality replication:</strong> The core focus was
                on replicating Reddit's essential features, including user
                management, community creation, content submission, voting,
                commenting, and user interactions.
              </li>
              <li>
                <strong>Database design:</strong> Designing an efficient and
                scalable database schema using SQLAlchemy to store user data,
                posts, comments, votes for posts and comments, and other
                information.
              </li>
              <ImageModal
                imgSrc="/images/ribbit-schema.png"
                imgAlt="Schema"
                title="Database schema design"
                description="The very first database schema design I created for Ribbit, back when I knew nothing and had yet to write any code."
              />
              <li>
                <strong>User interface (UI) design:</strong> Crafting an
                intuitive and visually appealing user interface with React and
                Redux to enhance the overall user experience and ensure ease of
                navigation.
              </li>
              <li>
                <strong>User authentication and authorization:</strong>{" "}
                Implementing a robust user authentication system with Flask and
                JWT to ensure secure access to the application's features.
              </li>
              <li>
                <strong>Real-time features:</strong> Integrating socket.io to
                provide real-time user interactions through the live chat
                feature.
              </li>
              <li>
                <strong>Image uploads (AWS S3):</strong> Integrating AWS S3 for
                seamless image uploads and storage for user profiles and
                community content.
              </li>
            </ol>
            <ArticleHeader heading="Tech Stack" id="tech-stack" />
            <div className="font-wotfard text-lg mt-7">
              To achieve the goals for Ribbit, a robust tech stack was chosen,
              combining the best tools and technologies:
            </div>
            <ul className="project-ul">
              <li>
                <strong>Frontend:</strong>{" "}
                <span className="text-pink-500">React.js</span>,{" "}
                <span className="text-pink-500">Redux</span> for state
                management, and <span className="text-pink-500">socket.io</span>{" "}
                for real-time features.
              </li>
              <li>
                <strong>Backend:</strong>{" "}
                <span className="text-pink-500">Flask</span>, a lightweight
                Python web framework for handling HTTP requests, authentication,
                and data processing.
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
              The application allows users to sign up for new accounts, log in
              to existing accounts, and manage their profiles. Users can update
              profile information including a profile picture and bio to
              personalize their presence on the platform.
            </div>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-userprofile.png"
              imgAlt="Ribbit - User Profile"
              title="Ribbit: User Profile"
              description="The current user's profile, which includes buttons for changing the user's image and banner, and redirecting to the Settings page, as well as the Followers section, which opens the Followers list when clicked."
            />
            <div className="font-wotfard text-lg mt-7">
              Users who wish to briefly visit Ribbit for the purposes of demoing
              the application can use the demo login feature, offered as a
              button at the top of the "Log In" window.
            </div>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-login.png"
              imgAlt="Ribbit Log In"
              title="Ribbit login window"
              description="Ribbit's login window, which includes a button that, when clicked, logs the user into the Demo account."
            />
            <h3 id="communities" className="text-2xl font-bold mb-8 mt-16">
              Communities
            </h3>
            <ArticleParagraph>
              aaaReferred to as 'subreddits' on Reddit, users have the ability
              to create new communities dedicated to specific topics or
              interests. Community creators can define rules and guidelines for
              their respective communities, ensuring a safe and respectful
              environment for all members. They can also customize community
              information (such as the community's image and 'About' section),
              and have the power to delete the community.
            </ArticleParagraph>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-community.png"
              imgAlt="Ribbit community"
              title="Ribbit: Community page"
              description="A community page."
            />
            <h3 id="subscriptions" className="text-2xl font-bold mb-8 mt-16">
              Subscriptions
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can subscribe to their favorite communities, which adds the
              community's posts to the user's front page feed, and makes it
              easily accessible by adding it to both the navigation dropdown and
              the 'Communities' list on the post creation page. Subscriptions
              also enable users to stay engaged with their areas of interest.
            </div>
            <h3 id="community-rules" className="text-2xl font-bold mb-8 mt-16">
              Community Rules
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Community creators can establish rules and guidelines for their
              respective communities. These rules help maintain a positive
              community environment by setting standards for content and
              behavior.
            </div>
            <h3 id="posts" className="text-2xl font-bold mb-8 mt-16">
              Posts
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can submit various types of content, such as links, images,
              and text-based posts, to existing communities. Posting allows
              users to share information, express opinions, and contribute to
              the community.
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
              The platform integrates with AWS S3 to enable users to upload
              images for their profiles and communities. Community owners can
              set rules for image uploads to ensure that content aligns with
              community guidelines.
            </div>
            <h3 id="followers" className="text-2xl font-bold mb-8 mt-16">
              Followers
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can follow other users to stay updated on their posts, which
              will appear on the user's main feed. This enables users to engage
              with content from users they find interesting or influential.
            </div>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-followers.png"
              imgAlt="Ribbit followers"
              title="Ribbit Followers"
              description="The current user's followed users."
            />
            <h3 id="search" className="text-2xl font-bold mb-8 mt-16">
              Search
            </h3>
            <div className="font-wotfard text-lg mt-7">
              A powerful search functionality allows users to find communities,
              posts, and users based on keywords and relevant criteria. The
              search feature enhances content discoverability and user
              satisfaction.
            </div>
            <h3 id="favorite-users" className="text-2xl font-bold mb-8 mt-16">
              Favorite Users
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users can mark followed users as favorites, making it easier to
              access their content. The favorite users feature streamlines the
              process of following specific users and viewing their
              contributions.
            </div>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-favorite.png"
              imgAlt="Ribbit favorites"
              title="Ribbit: Favorites"
              description="Ribbit's left nav dropdown menu, "
            />
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
            <h3
              id="recently-viewed-posts"
              className="text-2xl font-bold mb-8 mt-16"
            >
              Recently Viewed Posts
            </h3>
            <div className="font-wotfard text-lg mt-7">
              A section for recently viewed posts helps users keep track of the
              content they have interacted with recently. The feature aids in
              returning to interesting content that users might want to revisit
              or engage with further.
            </div>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-recentlyviewed.png"
              imgAlt="Ribbit: Recently Viewed Posts"
              title="Ribbit: Recently Viewed Posts"
              description="The recently viewed posts section on feed pages on Ribbit"
            />
            <h3 id="messaging" className="text-2xl font-bold mb-8 mt-16">
              Messaging
            </h3>
            <div className="font-wotfard text-lg mt-7">
              The comprehensive messaging system allows users to send private
              messages to other users within the platform.
            </div>
            <ImageModal
              imgSrc="/images/projects/ribbit/ribbit-messages.png"
              imgAlt="Ribbit messages"
              title="Ribbit: Messages"
              description="The 'Messages' inbox in Ribbit's messaging section"
            />
            <h3 id="notifications" className="text-2xl font-bold mb-8 mt-16">
              Notifications
            </h3>
            <div className="font-wotfard text-lg mt-7">
              Users receive notifications for new messages, post replies, and
              new followers.
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
                <strong>Image uploads and storage:</strong> Integrating AWS S3
                for image uploads and secure storage demanded proper
                configuration and secure handling of user-uploaded content.
              </li>
              <li>
                <strong>Scalability</strong>: Designing a scalable architecture
                to handle increased user activity, messaging, and live chat
                interactions was a critical consideration.
              </li>
              <li>
                <strong>Messaging system:</strong> Building a comprehensive
                messaging system with proper authentication, authorization, and
                secure communication required careful planning and
                implementation.
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
                <strong>Integration of real-time features:</strong>{" "}
                Understanding the concepts of websockets and event-driven
                architecture for implementing real-time features.
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
            <ComparisonSlider
              topImage={imageProps.homepage.ribbit}
              bottomImage={imageProps.homepage.reddit}
            />
            <h3 id="messages" className="text-2xl font-bold mt-16 mb-8">
              Messages
            </h3>
            <ComparisonSlider
              topImage={imageProps.messages.ribbit}
              bottomImage={imageProps.messages.reddit}
            />
            <h3
              id="comparison-communities"
              className="text-2xl font-bold mt-16 mb-8"
            >
              Communities
            </h3>
            <ComparisonSlider
              topImage={imageProps.communities.ribbit}
              bottomImage={imageProps.communities.reddit}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
