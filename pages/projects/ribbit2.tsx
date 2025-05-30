import { useRef } from "react";
import useTableOfContents from "hooks/useTableOfContents";
import topImage from "public/images/comparison-ribbit-1.png";
import bottomImage from "public/images/comparison-reddit-1.png";
import ribbitComparison2 from "public/images/projects/ribbit/comparison-ribbit-2.png";
import redditComparison2 from "public/images/projects/ribbit/comparison-reddit-2.png";
import ribbitComparison3 from "public/images/projects/ribbit/comparison-ribbit-3.png";
import redditComparison3 from "public/images/projects/ribbit/comparison-reddit-3.png";
import Layout from "@/components/layout";
import Head from "next/head";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import QuickFacts from "@/components/quick-facts";
import ImageModal from "@/components/imagemodal";
import ResponsiveTable from "@/components/responsive-table";
import Code from "@/components/code";

export default function Ribbit2() {
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
      <div className="flex w-full">
        <img
          className="w-[50px] mr-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />
        <img
          className="w-[50px] mr-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
        />
        <img
          className="w-[50px] mr-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        />
        <img
          className="w-[50px] mr-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"
        />
        <img
          className="w-[50px]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-plain.svg"
        />
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
        id="about"
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900 gap-14"
      >
        <TableofContents headings={fileContent} />
        <div className="font-wotfard text-lg w-full lg:pl-6 flex-1 min-w-0">
          <ImageModal
            imgSrc="/images/projects/ribbit/ribbit-hero.png"
            imgAlt="Ribbit homepage"
            title="Ribbit Homepage"
            description={`The homepage of Ribbit, which shows the user's main feed.`}
          />
          <p>
            This is Ribbit, a fullstack, pixel-perfect clone of the popular
            social media website Reddit. With over 15 features, a well-designed
            UI, and an experience that feels complete for users, Ribbit looks
            and feels just like the original, down to the smallest of details.
            After months of development and hard work, Ribbit has transformed
            into one of the best Reddit clones on the Internet.
          </p>
          <QuickFacts projectInfo={projectInfo} />
          <div className="project-details">
            {/* --------- Introduction ---------- */}
            <h2 id="introduction">Introduction</h2>
            <h2 id="about-ribbit">About Ribbit</h2>
            <h3 id="background">Background</h3>
            <p>
              Ribbit has been in development for over a year. Initially the
              result of a graduation requirement of the intensive software
              engineering bootcamp I attended, it had just 6 core features when
              I presented it to my cohort: Users, Posts, Comments, Communities,
              Subscriptions, and Post Votes.
            </p>
            <p>
              After graduation, I found myself enjoying the process of building
              Ribbit so much that I proceeded to continue work on it. Over time,
              Ribbit has been through many stages, and has been a steady source
              of learning for me. It is easily the biggest project I've ever
              built singlehandedly, and has evolved into something more than
              "just another clone" that I couldn't be more proud to share with
              you today.
            </p>
            <h3 id="technology-stack">Technology Stack</h3>
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
                <span className="text-pink-500">Flask-SocketIO</span> -
                Implemented to support real-time features such as live updates
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
            <h3 id="goals-and-inspiration">Goals and Inspiration</h3>
            <p>
              The development of Ribbit was driven by a few core goals and
              inspirations, including:
            </p>
            <ol>
              <li>
                <span className="text-pink-500">A sandbox for learning</span> -
                I’ve used Reddit for years, and as a user, I’ve always enjoyed
                how seamlessly its UI handles everything. I wanted to replicate
                many of its features - not by copying code, but by truly
                understanding and implementing the logic. Ribbit gradually
                evolved into my personal sandbox, a place where I could break
                things, fix them, and come out the other side with a deeper
                knowledge of full-stack development.
              </li>
              <li>
                <span className="text-pink-500">
                  Providing a complete user experience
                </span>{" "}
                - Although Ribbit is a demo of an existing website, one of my
                primary goals was to provide enough functionality that it felt
                like a real, independent entity. While I could have just
                developed Reddit’s core features, I knew that expanding beyond
                that would make the site feel more complete, as well as provide
                the user with a better experience overall.
              </li>
              <li>
                <span className="text-pink-500">Showcasing my skills</span> - I
                don’t have years of professional experience or a formal degree,
                so I wanted a project that could demonstrate my capabilities.
                Ribbit wasn’t about building a minimal viable product; it was
                about pushing myself to implement real features that people
                actually use on a day-to-day basis. The more challenging a
                feature, the more intrigued I was to try and build it.
              </li>
              <li>
                <span className="text-pink-500">Polish and detail</span> - I
                wanted to go beyond the standard “MVP clone” approach and really
                nail the small stuff, including intuitive hover states,
                informative tooltips, and a perfect replication of Reddit’s
                interface.
              </li>
              <li>
                <span className="text-pink-500">Future-proofing my skills</span>{" "}
                - I knew this project could be a good chance to learn modern,
                in-demand technologies. Instead of sticking to what I already
                knew, I dove into frameworks, libraries, and APIs that were new
                to me, sometimes struggling, but always eventually coming out on
                top with more knowledge and experience than before. In doing so,
                Ribbit evolved from a side project into a comprehensive learning
                adventure, sharpening both my technical and problem-solving
                skills in a real-world context.
              </li>
            </ol>
            <p>
              Ribbit wasn't just another clone project. It has served as my way
              of experimenting, growing, and showcasing what I'm capable of as a
              developer. Each piece of Ribbit was driven by a desire to learn,
              to improve, and to create a platform that people genuinely enjoy
              using, and I am proud to be able to present it to you here on my
              website.
            </p>
            <h3 id="challenges">Challenges</h3>
            <p>
              Like all projects, Ribbit's development wasn't exactly a simple
              walk in the park; in fact, there were quite a few trials and
              tribulations that I had to face and figure out in order to produce
              the result you see today. While it would be impossible to list all
              of them, here are just some of the bigger ones.
            </p>
            <h4 id="preventing-fragmented-architecture">
              Preventing Fragmented Architecture
            </h4>
            <code className="language-css">{`p { color: red }`}</code>
            <p>
              In the beginning of Ribbit’s development, I made a mistake in how
              I was building my features. Rather than build each feature fully
              before moving onto the next, I was splitting up my code by
              frontend and backend. In other words, I would write the code for,
              say, Users, Posts, and Communities in the backend, and then move
              on to the frontend for all three. This inevitably led to a tangled
              codebase that was extremely difficult to debug. The code was so
              poorly structured and entangled that one week into the project, I
              was forced to make a decision: the best course of action would be
              to salvage only the stylesheets and start over, an unfortunate and
              significant setback given the two-week completion window.
            </p>
            <p>
              Realizing the issue, I pivoted to a feature-driven approach,
              developing each feature's backend and frontend simultaneously
              before moving onto the next. This change streamlined debugging,
              resulted in cleaner code, and drastically reduced bugs. The lesson
              learned? That a cohesive development strategy from the start is
              essential for building a robust, feature-packed application like
              Ribbit.
            </p>
            <h4 id="battling-high-load-times">Battling High Load Times</h4>
            <p>
              As Ribbit grew, I introduced a large amount of seed data to mimic
              a bustling community. This influx of data caused load times to
              soar, and at one point the site was taking several minutes to
              load, an obvious deal-breaker in regards to user experience.
            </p>
            <p>
              I began tackling this issue by removing the recently-introduced
              data. As it turned out, the root issue went beyond just having a
              big dataset; inefficient coding practices were triggering
              excessive re-renders and slowing everything down. I proceeded to
              perform a detailed code review to pinpoint performance
              bottlenecks, and after doing so, I eradicated the problem by
              optimizing database queries, implementing lazy loading, and
              cutting out unnecessary re-renders, all of which dramatically sped
              up the site. I also used performance profiling tools to keep an
              eye on the app’s responsiveness. Thanks to this ongoing
              optimization, Ribbit has thankfully stayed fast and fluid, even as
              the dataset continues to grow.
            </p>
            <h4 id="mastering-websockets">Mastering WebSockets</h4>
            <p>
              When it came time to add real-time features like live chat and
              instant notifications, I found myself in uncharted territory.
              WebSockets were new to me and introduced a steep learning curve.
              Ensuring reliable, secure, and truly real-time communication meant
              diving into asynchronous programming and event-driven architectur
              - a challenge that was both exciting and daunting.
            </p>
            <p>
              I invested significant time in learning the ins and outs of
              WebSockets, reading tutorials, poring over documentation, and
              taking extensive notes. Implementing Flask-SocketIO made it easier
              to integrate these real-time capabilities with my Flask backend.
              Through iterative testing and hands-on experimentation, I
              successfully introduced real-time chats and notifications that
              brought Ribbit to life. The process of implementing this feature
              reinforced the importance of continuous learning and adaptability,
              key ingredients for any modern web application.
            </p>
            <h4 id="overhauling-an-unwieldy-codebase">
              Overhauling a Cumbersome Codebase
            </h4>
            <p>
              Early on, I concentrated almost entirely on making Ribbit{" "}
              <em>work</em>, without much attention to code quality. As Ribbit
              evolved, the codebase ballooned into something unwieldy. Keeping
              track of everything, maintaining code quality, and adding new
              features turned into a major headache. The sheer volume of files
              and modules made even small tweaks risky and time-consuming.
            </p>
            <p>
              To tackle this, I made a conscious decision to up my game by
              introducing a set of best practices, including:
            </p>
            <ul>
              <li>
                <span className="text-pink-500">Modular Design:</span> I
                refactored the frontend into smaller, reusable components and
                modules, making it simpler to manage and maintain.
              </li>
              <li>
                <span className="text-pink-500">
                  Consistent Coding Standards:
                </span>{" "}
                A unified style made the code more readable and cut down on
                confusion across the board.
              </li>
              <li>
                <span className="text-pink-500">
                  Comprehensive Documentation:
                </span>{" "}
                Detailed notes ensured anyone, including myself, could quickly
                find their way around, smoothing potential collaboration and
                future attempts to continue work on Ribbit.
              </li>
              <li>
                <span className="text-pink-500">
                  Version Control Strategies:
                </span>{" "}
                Using clear Git branching methods and meaningful commit messages
                kept changes organized and made reviews more efficient.
              </li>
              <li>
                <span className="text-pink-500">Barrels and Aliases:</span> By
                consolidating imports and reducing those extra-long paths, I
                turned the codebase into a friendlier place to navigate.
              </li>
            </ul>
            <p>
              These steps transformed the chaotic sprawl into a well-structured,
              maintainable system, making it far easier to introduce new
              features and keep the project humming along.
            </p>
            <h3 id="things-i-would-do-differently-lessons-learned">
              Things I Would Do Differently (Lessons Learned)
            </h3>
            <h2 id="features">Features</h2>
            <p>
              Ribbit was in development for a bit longer than I originally
              anticipated, resulting in me producing a wide array of features to
              make the site feel complete.{" "}
            </p>
            <h3 id="multiple-ways-to-log-in">Multiple Ways to Log In</h3>
            <p>
              Site visitors (users not logged into an account) are able to
              browse Ribbit's posts, community pages, and user profiles, and
              that's about it. There are several features and pages that site
              visitors aren't able to access, and they must log into an account
              to fully experience Ribbit in its entirety.
            </p>
            <p>
              Luckily, there are a few different ways that users can log in.
            </p>
            <h4 id="sign-up-for-an-account">Sign Up for an Account</h4>
            <p>
              Users can sign up for their own account on Ribbit by providing a
              unique username, an email address not already associated with
              another account, and a valid password.
            </p>
            <p>
              The sign-up form includes a random username generator identical to
              the one Ribbit offers. This tool provides suggestions for
              usernames, assisting users that are struggling to pick a username
              they like by providing funny, unique, or profound options on the
              click of a button.
            </p>
            <h4 id="use-a-google-account">Use a Google Account</h4>
            <p>
              Ribbit offers users the option of signing in using their existing
              Google account.
            </p>
            <h4 id="utilize-the-provided-demo-account">
              Utilize the Provided Demo Account
            </h4>
            <p>
              A demo account is available for the purposes of touring Ribbit and
              checking out its features. It is publicly accessible by anyone who
              visits the site, so it is strongly recommended that it is used
              very briefly, and that users refrain from sharing any personal
              information while logged into that account.
            </p>
            <p>
              Accessing the demo account is as easy as clicking the "Log In as
              Demo" button, found on both the Log In and Sign Up forms.
            </p>
            <h3 id="light-dark-mode-toggle">Light/Dark Mode Toggle</h3>
            <p>
              I know firsthand how important it is for websites to offer a
              light/dark mode toggle, and made sure that Ribbit was no
              different. This toggle can be found in the righthand dropdown menu
              in the navbar. The user’s preference persists beyond refresh for a
              better experience.
            </p>
            <h3 id="user-accounts-&-profiles">User Accounts & Profiles</h3>
            <p>
              Each user has their own profile page, where their post history can
              be found as well as user info like their display name, bio, and
              stats such as their follower count, karma, and join date. Profiles
              also contain ways to interact with, and contact, the user,
              including sending them a message or beginning a chat with them.
            </p>
            <p>
              When a user visits their own profile, they have access to some
              additional information, like a list of the users following them,
              and their owned communities.
            </p>
            <h2 id="implementation-details">Implementation Details</h2>
            <h3 id="stack-overview">Stack Overview</h3>
            <div className="flex flex-col">
              <div className="-m-1.5">
                <div className="p-1.5 inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="divide-y divide-gray-200 dark:divide-neutral-700">
                      <thead className="bg-gray-50 dark:bg-slate-800">
                        <tr>
                          <th
                            scope="col"
                            className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                          >
                            Layer
                          </th>
                          <th
                            scope="col"
                            className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                          >
                            Technology
                          </th>
                          <th
                            scope="col"
                            className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                          >
                            Why It Matters
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            Backend
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            Flask, SQLAlchemy, Flask-SocketIO
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            Lightweight micro-framework, declarative ORM, shared
                            session between HTTP and WebSockets.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            Frontend
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            React, Redux
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            Modern hooks API, batteries-included state slice
                            pattern, lightning-fast dev server.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            Data
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            PostgreSQL
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            Reliable JSON + full-text search, easy Heroku/Render
                            deploy.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            Tooling
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            Docker Compose
                          </td>
                          <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                            <code className="text-xs">docker compose up</code>{" "}
                            spins the whole stack — no "works on my machine"
                            surprises.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h3 id="codebase-structure">Codebase Structure</h3>
            <Code
              language="bash"
              code={`ribbit/
├─ app/
│  ├─ api/              # Blueprints  (auth, posts, chat…)
│  ├─ models/           # SQLAlchemy ORM classes
│  ├─ forms/            # WTForms validators
│  ├─ seeds/
│  └─ socket.py         # Real-time event handlers
└─ frontend/
   └─ src/
      ├─ assets/
      ├─ components/
      ├─ context/
      ├─ features/      # Auth / Posts / Chat (self-contained)
	  │  └─ Auth/
	  │	    ├─ __tests__/
	  │	    ├─ components/
	  │	    ├─ data/
	  │	    ├─ hooks/
	  │	    ├─ styles/
	  │	    └─ utils/
      ├─ hooks/         # Reusable logic
      ├─ layouts/
      ├─ pages/
      ├─ routes/
      ├─ store/         # Redux slices
      └─ utils/`}
            />
            <h3 id="repository-layout">Backend Highlights</h3>
            <h4 id="backend-folder-structure">Backend Folder Structure</h4>
            <p>Let's talk about the backend's folder structure for a moment.</p>
            <Code
              code={`app/
├─ api/
├─ models/
├─ forms/
├─ seeds/
└─ socket.py`}
              language="bash"
            />
            <ul>
              <li>
                <code>api/</code> - All Flask Blueprints go here, each Blueprint
                exposing the endpoints for a specific feature area (users,
                posts, comments, etc.).
              </li>
              <li>
                <code>models/</code> - The entire data schema in one place:
                SQLAlchemy models, relationships, and mixins.
              </li>
              <li>
                <code>forms/</code> - Server-side validation via WTForms
                classes; keeps input sanitising logic out of the routes.
              </li>
              <li>
                <code>seeds/</code> - Seed scripts for populating the database.
              </li>
            </ul>
            <h4 id="blueprint-example-posts">Blueprint Example (Posts)</h4>
            <Code
              language="python"
              code={`post_routes = Blueprint("posts", __name__)

@posts_routes.route("/")
def list_posts():
    return {"posts": [p.to_dict() for p in Post.query.all()]}`}
            />
            <p>
              This snippet registers a Blueprint called{" "}
              <code>posts_routes</code>, giving every route inside its own URL
              namespace (e.g., <code>/posts</code>). The single route,{" "}
              <code>"/"</code>, handles <code>GET</code> requests by querying
              every <code>Post</code> record, converting each to a plain-Python
              dictionary with <code>to_dict()</code>, and wrapping the result in
              a JSON-serializable object:
            </p>
            <h4 id="model-example-posts">Form Validation Example (Posts)</h4>
            <Code
              code={`# FORM FOR CREATING A POST
class PostForm(FlaskForm):
    title = TextAreaField(
        "Title",
        validators=[
            DataRequired("Please give your post a title."),
            Length(
                min=1,
                max=300,
                message="Please give your post a title. Titles are limited to 300 characters."
            ),
        ],
    )
    content = TextAreaField(
        "Content",
        validators=[
            Length(
                max=40000,
                message="Please give your post some content. Posts are limited to 40,000 characters.",
            )
        ],
    )
    communityId = IntegerField("CommunityId")
    submit = SubmitField("Submit")`}
              language="python"
            />
            <p>
              <code>PostForm</code> is a Flask-WTF form that enforces basic
              sanity checks before a new post ever hits the database:
            </p>
            <ResponsiveTable>
              <table className="divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase "
                    >
                      Field
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase "
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase "
                    >
                      Key Validators
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase "
                    >
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <code>"Title"</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      <code>TextAreaField</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      <code>DataRequired</code>, <code>Length(1-300)</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      Guarantees every post has a non-empty title capepd at 300
                      characters.
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <code>"Content"</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      <code>TextAreaField</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      <code>Length(max=40000)</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      Optional body text, but limited so someone can't drop a
                      novel in.
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <code>"CommunityId"</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      <code>IntegerField</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      —
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      Stores the chosen community's id, set by the user in the
                      'choose a community' dropdown.
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <code>"Submit"</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      <code>SubmitField</code>
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      —
                    </td>
                    <td className="p-2 text-sm text-gray-800 dark:text-neutral-200">
                      Renders the <em>Submit</em> button.
                    </td>
                  </tr>
                </tbody>
              </table>
            </ResponsiveTable>
            <p>
              Using field-level validators keeps error messages specific and
              user-friendly while centralising all post-creation rules in one
              declarative class.
            </p>
            <h4 id="model-example-posts">Model Example (Viewed Posts)</h4>
            <Code
              language="python"
              code={`from app.extensions import db
from datetime import datetime, timezone

class ViewedPost(db.Model):
    # Name the table
    __tablename__ = "viewed_posts"

    # Table attributes
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))
    timestamp = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    # Relationships with 'users' and 'posts'
    user = db.relationship("User", back_populates="viewed_posts")
    post = db.relationship("Post", back_populates="post_viewers")

    # converts to dictionary for use in backend
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "postId": self.post_id,
            "timestamp": self.timestamp,
            "post": self.post.to_dict() if self.post is not None else None
        }

    # returns string form of table row, for debugging and logging purposes
    def __repr__(self):
        return f"<ViewedPost {self.id}: post id {self.post_id} by user id {self.user_id}>"
`}
            />
            <p>
              <code>ViewedPost</code> is a join table with extras; it logs every
              time a user opens a post, and it timestamps the event to display
              for the user.
            </p>
            <ul>
              <li>
                <span className="text-pink-500">Schema & relationships</span>:
                Standard <code>id</code> primary key, plus two foreign keys (
                <code>user_id</code> and <code>post_id</code>). Bidirectional
                relationships (<code>user.viewed_posts</code> and{" "}
                <code>post.post_viewers</code>) make it trivial to ask "which
                posts has Alice seen?" or "who has viewed Post 42?".
              </li>
              <li>
                <span className="text-pink-500">
                  <code>timestamp</code> default
                </span>
                : Uses <code>datetime.now(timezone.utc)</code> via a{" "}
                <code>lambda</code> so the timestamp is computed server-side{" "}
                <em>at insert time</em>, not at import.
              </li>
              <li>
                <span className="text-pink-500">Helper methods</span>:{" "}
                <code>to_dict()</code> returns an API-ready payload, optionally
                nesting the post's own dictionary, while <code>__repr__</code>{" "}
                makes debugging output readable (
                <code>&lt;ViewedPost 17: post 42 by user 3&gt;</code>).
              </li>
            </ul>
            <p>
              Since view events are isolated into their own model,{" "}
              <code>posts</code> and <code>users</code> aren't bloated with
              additional information.
            </p>
            <h4 id="model-example-posts">Seed Data Example (Posts)</h4>
            <p>
              This excerpt comes from <code>api/seeds/followers.py</code>.
              First, we fetch the relevant users (ids 2 through 50) in a single
              query. Next, we define <code>follow_map</code>, a concise
              dictionary that pairs each user with the set of accounts they
              should follow, keeping seed data readable without sprawling loops
              or hard-coded statements.
            </p>
            <Code
              code={`def seed_followers():
    # Preload users 2‑50 once
    users = {u.id: u for u in User.query.filter(User.id.in_(range(2, 51))).all()}

    follow_map = {
        2:  [3, 4, 7, 10, 14, 19, 23, 25, 30, 31, 38, 42, 44, 50],
        3:  [2, 8, 11, 16, 21, 27, 33, 40, 46],
    }

    for follower_id, followed_ids in follow_map.items():
        users[follower_id].followed.extend(users[uid] for uid in followed_ids)

    db.session.commit()`}
              language="python"
            />
            <p>
              Once <code>follow_map</code> is defined, we loop over its items.
              For each entry, the dictionary key represents the follower's user
              id, while the value is a list of followed user ids. We use{" "}
              <code>.extend()</code>
              to append those target users to the follower's followed
              relationship, then commit the session to persist everything in one
              transaction.
            </p>
            <ul>
              <li></li>
            </ul>
            <ul>
              <li>
                We set the table's name to <code>viewed_posts</code>, as this is
                the model for the "Recently Viewed Posts" feature.
              </li>
            </ul>
            <ul>
              <li>
                <span className="text-pink-500">Pixel-Perfect Interface</span>:
                Ribbit's UI is a near pixel-perfect replica of Reddit's desktop
                site that ensures a visually appealing and seamless user
                experience.
              </li>
              <li>
                <span className="text-pink-500">
                  Unwavering Commitment to Functionality
                </span>
                : Every feature is fully operational with no fake buttons or
                placeholder elements, guaranteeing genuine utility.
              </li>
              <li>
                <span className="text-pink-500">Unique Live Chat Features</span>
                : Incorporates custom frog emojis and reactions in the live
                chat, enhancing user interaction and engagement.
              </li>
              <li>
                <span className="text-pink-500">
                  Advanced Community Management
                </span>
                : Community owners have comprehensive tools to manage content
                and exercise advanced control over the appearance of their
                communities.
              </li>
              <li>
                <span className="text-pink-500">Meticulous Design Details</span>
                : Features intuitive hover popups, toggleable community themes,
                and other design elements that provide a next-level user
                experience.
              </li>
              <li>
                <span className="text-pink-500">Comprehensive Feature Set</span>
                : Ribbit has more functionality than other Reddit clones,
                ensuring a richer and more satisfying user experience.
              </li>
            </ul>
            <p>
              Ribbit consistently delivers more depth than any other Reddit
              clone I've seen, and it does so with serious attention to detail
              at every turn.
            </p>
            {/* --------- An Overview of Ribbit ---------- */}
            <h2 id="an-overview-of-ribbit">An Overview of Ribbit</h2>
            {/* --------- How It Began ---------- */}
            <h3 id="how-it-began">How It Began</h3>
            <p>
              Ribbit began as my capstone project at App Academy, an intensive
              software engineering bootcamp. My initial goal going into the
              project was to learn real-time communication via WebSockets, and I
              knew building a social media site would be the perfect way to
              practice. Reddit immediately came to mind; it offers a broad range
              of features that would challenge me and, if I felt ambitious,
              plenty more to add if I chose to continue the project after
              graduation.
            </p>
            <p>
              In the first two weeks, I replicated Reddit's core functionality
              (posts, comments, users, communities, subscriptions, votes, and
              search) and showcased it to my cohort, receiving lots of praise
              from my instructors and my peers. After graduating from the
              bootcamp, I couldn't resist taking Ribbit further. If I was
              already in this deep, why not push it to its full potential? I
              kept working on it, adding featuers to enrich the user experience
              like followers, favorite users/communities, messages, and live
              chat. What began as a straightforward assignment evolved into a
              fully-featured Reddit alternative, one that's taught me more about
              full-stack engineering than any textbook ever could.
            </p>
            {/* --------- Goals and Inspiration ---------- */}
            <h3 id="goals-and-inspiration">Goals and Inspiration</h3>
            <p>
              When I first started tinkering with the idea of Ribbit, a few core
              goals and inspirations took center stage:
            </p>
            <ol>
              <li>
                <span className="text-pink-500">A sandbox for learning</span> -
                I've used Reddit for years, and I've always been impressed by
                how seamlessly it handles everything from post feeds to
                sprawling comment trees. I wanted to replicate many of these
                features, and not by copying code, but by truly understanding
                and implementing the logic. Ribbit slowly evolved into my
                personal sandbox, a place where I could break things, fix them,
                and come out the other side with a deeper knowledge of
                full-stack development.
              </li>
              <li>
                <span className="text-pink-500">Real-time communication</span> -
                One of the primary reasons I had for picking Reddit as my
                project was the intention to learn how to build features with
                real-time communication (specifically, a live chat feature).
              </li>
              <li>
                <span className="text-pink-500">
                  Providing a complete user experience
                </span>{" "}
                - Despite being just a demo of an existing website, one of my
                primary goals was to provide enough functionality that Ribbit
                felt like a real, independent entity. While I could have just
                written up Reddit's core features, I knew that expanding beyond
                that would make the site feel more complete, as well as provide
                the user with plenty to do.
              </li>
              <li>
                <span className="text-pink-500">Showcasing my skills</span> - I
                don't have years of professional experience or a formal degree,
                so I wanted a project that would demonstrate my capabilities.
                Ribbit wasn't about building a minimal viable product; it was
                about pushing myself to implement real features that people
                actually use on a day-to-day basis. The more challenging a
                feature, the more intrigued I was to try and build it.
              </li>
              <li>
                <span className="text-pink-500">Polish and detail</span> - I
                wanted to go beyond the standard "MVP clone" approach and really
                nail the small stuff, like intuitive hover states, tooltips, and
                a perfect replication of Reddit's interface. The goal was to
                push Ribbit toward a user experience that feels familiar and
                complete, despite being "just a clone".
              </li>
              <li>
                <span className="text-pink-500">Future-proofing my skills</span>{" "}
                - Finally, I saw this as a chance to learn modern, in-demand
                technologies. Instead of sticking to what I already knew, I dove
                into frameworks, libraries, and APIs that were new to me -
                sometimes wrestling with real-time data, drag-and-drop features,
                or color pickers. In doing so, Ribbit evolved from a side
                project into a comprehensive learning adventure, sharpening both
                my technical and problem-solving skills in a real-world context.
              </li>
            </ol>
            <p>
              Ribbit wasn't just another clone project. It was (and still is) my
              way of experimenting, growing, and showcasing what I'm capable of
              as a developer. Each piece of Ribbit was driven by a desire to
              learn, to improve, and to create a platform that people genuinely
              enjoy using.
            </p>
            {/* --------- Primary Technologies Used ---------- */}
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
                <span className="text-pink-500">Flask-SocketIO</span> -
                Implemented to support real-time features such as live updates
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
            <h3 id="challenges">Challenges</h3>
            <h4 id="frontend-backend-integration">
              Preventing Fragmented Architecture
            </h4>
            <p>
              During Ribbit’s early development, I prioritized building multiple
              backend features before tackling the frontend, which led to a
              tangled codebase and challenging debugging. One week into the
              project, I had to salvage only the stylesheets and start over—a
              significant setback given the two-week completion window.
            </p>
            <p>
              Realizing the issue, I pivoted to a feature-driven approach,
              developing each feature's backend and frontend simultaneously.
              This change streamlined debugging, resulted in cleaner code, and
              drastically reduced bugs. The lesson learned? That a cohesive
              development strategy from the start is essential for building a
              robust, feature-packed application like Ribbit.
            </p>
            <h4 id="battling-high-load-times">Battling High Load Times</h4>
            <p>
              As Ribbit grew, I introduced a large amount of seed data to mimic
              a bustling community. This influx of data caused load times to
              soar, and at one point the site was taking several minutes to
              load, an obvious deal-breaker in regards to user experience.
            </p>
            <p>
              I began tackling this issue by removing the recently-introduced
              data. As it turned out, the root issue went beyond just having a
              big dataset; inefficient coding practices were triggering
              excessive re-renders and slowing everything down. I proceeded to
              perform a detailed code review to pinpoint performance
              bottlenecks, and after doing so, I eradicated the problem by
              optimizing database queries, implementing lazy loading, and
              cutting out unnecessary re-renders, all of which dramatically sped
              up the site. I also used performance profiling tools to keep an
              eye on the app’s responsiveness. Thanks to this ongoing
              optimization, Ribbit has thankfully stayed fast and fluid, even as
              the dataset continues to grow.
            </p>
            <h4 id="mastering-websockets">Mastering WebSockets</h4>
            <p>
              When it came time to add real-time features like live chat and
              instant notifications, I found myself in uncharted territory.
              WebSockets were new to me and introduced a steep learning curve.
              Ensuring reliable, secure, and truly real-time communication meant
              diving into asynchronous programming and event-driven
              architecture—a challenge that was both exciting and daunting.
            </p>
            <p>
              I invested significant time in learning the ins and outs of
              WebSockets, reading tutorials, poring over documentation, and
              taking extensive notes. Implementing Flask-SocketIO made it easier
              to integrate these real-time capabilities with my Flask backend.
              Through iterative testing and hands-on experimentation, I
              successfully introduced real-time chats and notifications that
              brought Ribbit to life. The process of implementing this feature
              reinforced the importance of continuous learning and adaptability,
              key ingredients for any modern web application.
            </p>
            <h4 id="overhauling-an-unwieldy-codebase">
              Overhauling a Cumbersome Codebase
            </h4>
            <p>
              Early on, I concentrated almost entirely on making Ribbit{" "}
              <em>work</em>, without much attention to code quality. As Ribbit
              evolved, the codebase ballooned into something unwieldy. Keeping
              track of everything, maintaining code quality, and adding new
              features turned into a major headache. The sheer volume of files
              and modules made even small tweaks risky and time-consuming.
            </p>
            <p>
              To tackle this, I made a conscious decision to up my game by
              introducing a set of best practices, including:
            </p>
            <ul>
              <li>
                <strong className="text-pink-500">Modular Design:</strong> I
                refactored the frontend into smaller, reusable components and
                modules, making it simpler to manage and maintain.
              </li>
              <li>
                <strong className="text-pink-500">
                  Consistent Coding Standards:
                </strong>{" "}
                A unified style made the code more readable and cut down on
                confusion across the board.
              </li>
              <li>
                <strong className="text-pink-500">
                  Comprehensive Documentation:
                </strong>{" "}
                Detailed notes ensured anyone, including myself, could quickly
                find their way around, smoothing potential collaboration and
                future attempts to continue work on Ribbit.
              </li>
              <li>
                <strong className="text-pink-500">
                  Version Control Strategies:
                </strong>{" "}
                Using clear Git branching methods and meaningful commit messages
                kept changes organized and made reviews more efficient.
              </li>
              <li>
                <strong className="text-pink-500">Barrels and Aliases:</strong>{" "}
                By consolidating imports and reducing those extra-long paths, I
                turned the codebase into a friendlier place to navigate.
              </li>
            </ul>
            <p>
              These steps transformed the chaotic sprawl into a well-structured,
              maintainable system, making it far easier to introduce new
              features and keep the project humming along.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
