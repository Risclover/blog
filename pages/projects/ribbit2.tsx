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
    techStack:
      "React, Redux, Flask, SQLAlchemy, Flask-SocketIO, and various libraries and tools.",
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
          <QuickFacts projectInfo={projectInfo} />

          <div className="project-details">
            {/* --------- Introduction ---------- */}
            <h2 id="introduction">Introduction</h2>
            <p>
              Meet Ribbit, the Internet's best Reddit clone. Ribbit is a
              fully-funcitoning app that I built from the ground up with the
              intention to learn, experiment, and push my full-stack development
              skills to the limit. If you've spent any time on Reddit, you'll
              feel right at home: Ribbit has posts, comments, votes, live chat,
              search, and much, much more. It also offers features that most
              Reddit clones don't, like the sign up form's random username
              generator, advanced community style settings, and a slick comment
              search function, making the experience both refreshingly familiar
              and exciting.
            </p>

            <h3 id="the-internet's-best-reddit-clone">
              "The Internet's Best Reddit Clone"
            </h3>
            <p>
              Despite appearing like a boastful claim, hear me out. I have yet
              to see another Reddit clone that does each of the following:
            </p>
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
