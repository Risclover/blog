import { useRef } from "react";
import useTableOfContents from "hooks/useTableOfContents";
import Layout from "@/components/layout";
import Head from "next/head";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import QuickFacts from "@/components/quick-facts";
import ImageModal from "@/components/imagemodal";
import ResponsiveTable from "@/components/responsive-table";
import Code from "@/components/code";
import FeatureMindmap from "public/images/mindmap-feature-by-feature.png";
import BackendFrontendMindmap from "public/images/mindmap-backend-vs-frontend.png";
import LoadingSkeletons from "public/images/loading-skeletons.gif";
import CreatePostTopImage from "public/images/create-post-top-img.png";
import CreatePostBottomImage from "public/images/create-post-bottom-img.png";
import RibbitHeroCropped from "public/ribbit-cropped.png";
import AuthFeature from "public/images/projects/ribbit/features/login-form.png";
import LightDarkFeature from "public/images/projects/ribbit/features/light-dark-toggle.gif";
import UserProfilesFeature from "public/images/projects/ribbit/features/user-profiles.png";
import CommunitiesFeature from "public/images/projects/ribbit/features/community-screenshot.png";
import SubscriptionsFeature from "public/images/projects/ribbit/features/subscriptions-screenshot.png";
import CommunityRulesFeature from "public/images/projects/ribbit/features/rules-screenshot.png";
import CommunityModerationFeature from "public/images/projects/ribbit/features/moderation-feature.gif";
import CommunityStyleFeature from "public/images/projects/ribbit/features/community-style-gif.gif";
import TextPost from "public/images/projects/ribbit/features/post1-screenshot.png";
import ImagePost from "public/images/projects/ribbit/features/post2-screenshot.png";
import LinkPost from "public/images/projects/ribbit/features/post3-screenshot.png";
import PostFeed from "public/images/projects/ribbit/features/post-feeds.gif";
import RecentlyViewedPosts from "public/images/projects/ribbit/features/revently-viewed-screenshot.png";
import CommentsFeature from "public/images/projects/ribbit/features/comments.png";
import CommentsSearch from "public/images/projects/ribbit/features/comment-search.png";
import LiveChat from "public/images/projects/ribbit/features/live-chat.png";
import Emojis from "public/images/projects/ribbit/features/emojis.png";
import Votes from "public/images/projects/ribbit/features/voting-system.png";
import SearchQuickResults from "public/images/projects/ribbit/features/search-quick-results.png";
import Followers from "public/images/projects/ribbit/features/followers.png";
import Favorites from "public/images/projects/ribbit/features/favorites.png";
import EmptyRibbit from "public/images/projects/ribbit/empty-ribbit.png";
import WorldBuildingSpreadsheet from "public/images/projects/ribbit/world-building-spreadsheet.png";
import UsersTable from "public/images/projects/ribbit/users-table.png";
import CommunitiesTable from "public/images/projects/ribbit/communities-table.png";
import PostsTable from "public/images/projects/ribbit/posts-table.png";
import ChoosingCommunityName from "public/images/projects/ribbit/choosing-community-name.gif";
import AuthorId from "public/images/projects/ribbit/author-id.gif";
import ChoosingPostType from "public/images/projects/ribbit/choosing-post-type.gif";
import OpeningPostType from "public/images/projects/ribbit/opening-post-type.gif";
import CommentsTable from "public/images/projects/ribbit/comments-table.png";
import CommentTrees from "public/images/projects/ribbit/comment-trees.png";
import CommentTree from "public/images/projects/ribbit/comment-tree.png";
import DontSkip from "public/images/projects/ribbit/dont-skip.gif";
import SkipToNavigation from "public/images/projects/ribbit/skip-to-navigation.gif";
import SkipToSidebar from "public/images/projects/ribbit/skip-to-sidebar.gif";

import {
  FlaskIcon,
  FlaskSocketIoIcon,
  ReactIcon,
  ReduxIcon,
  SQLAIcon,
  TypeScriptIcon,
} from "@/components/icons";
import { Badge } from "@/components/badge";
import Link from "next/link";
import { ExternalLinkWiggle } from "@/components/external-link-wiggle";
import HeroImageCarousel from "@/components/hero-image-carousel";
import DbDiagramDark from "public/images/projects/ribbit/db_diagram_dark2.png";

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
    topImg: {
      src: CreatePostTopImage.src,
      alt: "Create Post's original design",
    },
    bottomImg: {
      src: CreatePostBottomImage.src,
      alt: "Create Post's new design",
    },
  };

  // const imageProps = {
  //   homepage: {
  //     ribbit: {
  //       src: topImage.src,
  //       alt: "Ribbit's version",
  //     },
  //     reddit: {
  //       src: bottomImage.src,
  //       alt: "Reddit's version",
  //     },
  //   },
  //   messages: {
  //     ribbit: {
  //       src: ribbitComparison2.src,
  //       alt: "Ribbit's version",
  //     },
  //     reddit: {
  //       src: redditComparison2.src,
  //       alt: "Reddit's version",
  //     },
  //   },
  //   communities: {
  //     ribbit: {
  //       src: ribbitComparison3.src,
  //       alt: "Ribbit's version",
  //     },
  //     reddit: {
  //       src: redditComparison3.src,
  //       alt: "Reddit's version",
  //     },
  //   },
  // };

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
      <HeroImageCarousel />
      <div
        id="about"
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900 gap-14"
      >
        <TableofContents headings={fileContent} />
        <div className="project-content font-wotfard text-lg w-full lg:pl-6 flex-1 min-w-0">
          <QuickFacts projectInfo={projectInfo} />

          <div className="project-details">
            {/* --------- Introduction ---------- */}
            <h2 id="introduction">Introduction</h2>

            <p>
              This is Ribbit, a fullstack, pixel-perfect clone of the popular
              social media website Reddit. With over 15 features, a
              well-designed UI, and an experience that feels complete for users,
              Ribbit looks and feels just like the original, down to the
              smallest of details. After months of development and hard work,
              Ribbit has transformed into one of the best Reddit clones on the
              Internet.
            </p>
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
                application's state in a predictable way, simplifying data flow
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
                easy customization to meet Ribbit's specific backend needs.
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
                and reliable JavaScript testing capabilities, guaranteeing a
                robust and error-free frontend.
              </li>
              <li>
                <span className="text-pink-500">React-Testing-Library</span> -
                Facilitates testing of React components from the user's
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
                I've used Reddit for years, and as a user, I've always enjoyed
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
                developed Reddit's core features, I knew that expanding beyond
                that would make the site feel more complete, as well as provide
                the user with a better experience overall.
              </li>
              <li>
                <span className="text-pink-500">Showcasing my skills</span> - I
                don't have years of professional experience or a formal degree,
                so I wanted a project that could demonstrate my capabilities.
                Ribbit wasn't about building a minimal viable product; it was
                about pushing myself to implement real features that people
                actually use on a day-to-day basis. The more challenging a
                feature, the more intrigued I was to try and build it.
              </li>
              <li>
                <span className="text-pink-500">Polish and detail</span> - I
                wanted to go beyond the standard "MVP clone" approach and really
                nail the small stuff, including intuitive hover states,
                informative tooltips, and a perfect replication of Reddit's
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
              Ribbit isn't just another clone project. It has served as my way
              of experimenting, growing, and showcasing what I'm capable of as a
              developer, with each piece of Ribbit driven by a desire to learn,
              to improve, and to create a platform that people genuinely enjoy
              using.
            </p>
            <h3 id="challenges">Challenges</h3>
            <p>
              Like all projects, Ribbit's development wasn't necessarily a
              simple walk in the park; in fact, there were quite a few trials
              and tribulations that I had to face and traverse in order to
              produce the result you see today. It would be impossible to list
              all of them, but here are a few of the many challenges I faced and
              conquered.
            </p>
            <h4 id="when-backend-first-backfires">
              When "Backend First" Backfires
            </h4>
            <p>
              During the first week of the project, I developed my features by
              separating the backend from the frontend. In other words, I would
              completely write the backend for multiple features before laying a
              single finger on the frontend. That approach quickly fell apart -
              Ribbit didn't want to behave, and debugging it turned out to be a
              nightmare as a result of code so entangled that fixing one thing
              meant breaking a few others.
            </p>
            <ImageModal
              imgSrc={BackendFrontendMindmap.src}
              imgAlt="Backend vs. Frontend mindmap"
              title="Backend vs. Frontend mindmap"
              description=""
            />
            <p>
              Progress quickly stalled. This was something I couldn't afford - I
              had a deadline, and time was running out. Thus, one week in, I
              made the difficult decision to scrap everything I'd already built,
              saving only the CSS and otherwise starting from scratch. I figured
              that this would be faster than trying to fix the mess I'd created
              the week prior. For this second attempt, I switched to developing
              one full feature at a time, front to back. This change was vital,
              and resulted in Ribbit not only being exponentially less buggy,
              but, more importantly, possible to debug in the first place.
            </p>
            <ImageModal
              imgSrc={FeatureMindmap.src}
              imgAlt="Feature by Feature mindmap"
              title="Feature by Feature mindmap"
              description=""
            />

            <h4 id="cleaning-up-the-codebase">Cleaning Up the Codebase</h4>
            <p>
              As Ribbit grew, so, too, did the chaos within its codebase. At
              some point, I realized I was writing my code simply to make it{" "}
              <em>work</em>, completely ignoring its quality. Upon this
              realization, I hit pause and launched a major refactor effort:
              modularized components, the usage of CSS variables, meaningful Git
              commits, and adherence to best practices across the board.
            </p>
            <p>
              Now, instead of dreading 500-line files writhe with duplications,
              multiple responsibilties, and not a custom hook in sight, I can be
              - and am - proud of the structure, readability, and
              maintainability of my codebase.
            </p>
            <p>
              This is best illustrated with a real example. Let's take a look at
              one of Ribbit's components, <code>SinglePost</code>, as it was
              before the Great Ribbit Refactor of 2024:
            </p>
            <Code
              language="javascript"
              code={`import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import moment from "moment";
import DeleteConfirmation from "../../Modals/DeleteConfirmation";
import "./SinglePost.css";
import UpdatePost from "../PostForms/UpdatePost";
import { NavLink } from "react-router-dom";
import { getComments } from "../../../store/comments";
import { getCommunities } from "../../../store/communities";
import { getCommunityPosts, getPosts } from "../../../store/posts";
import Bounce from "../../../images/curved-arrow.png";
import { getSinglePost } from "../../../store/one_post";
import { addPostVote, removePostVote } from "../../../store/posts";

export default function SinglePost({ id, isPage }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts[id]);
  const user = useSelector((state) => state.session.user);
  const community = useSelector(
    (state) => state.communities[post?.communityId]
  );
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [voteAllowed, setVoteAllowed] = useState(false);

  useEffect(() => {
    dispatch(getComments(id));
    dispatch(getCommunities());
    dispatch(getPosts());
    dispatch(getSinglePost(id));
    if (showLinkCopied) {
      setTimeout(() => {
        setShowLinkCopied(false);
      }, 3000);
    }
  }, [dispatch, id, showLinkCopied]);

  const displayLikes = (likes) => {
    const keys = Object.keys(likes);
    if (keys.length > 1 && user.id in likes) {
    }
  };

  const handleAddVote = async () => {
    await dispatch(addPostVote(post.id));
  };

  const handleRemoveVote = async () => {
    await dispatch(removePostVote(post.id));
  };

  useEffect(() => {
    if (post && post.postVoters) {
      let postVoters = Object.values(post.postVoters);
      if (postVoters.length === 0) {
        setVoteAllowed(true);
      } else {
        for (let voter of postVoters) {
          if (voter?.username === user?.username) {
            setVoteAllowed(false);
            break;
          } else {
            setVoteAllowed(true);
          }
        }
      }
    }
  }, [voteAllowed, post?.postVoters]);

  if (!post || !post.postVoters || !Object.values(post.postVoters)) return null;
  return (
    <>
      {post && (
        <div className="single-post-container">
          <div className="single-post-karmabar">
            <button
              className={
                user?.id in post?.postVoters ? "vote-btn-red" : "vote-btn-grey"
              }
              onClick={
                user?.id in post?.postVoters ? handleRemoveVote : handleAddVote
              }
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <span className="karmabar-votes">{post.votes}</span>
          </div>
          <div className="single-post-main">
            <div className="single-post-author-bar">
              {isPage !== "community" && (
                <div className="single-post-community-info">
                  <div className="single-post-community-img">
                    <img src={community?.communityImg} />
                  </div>
                  <div className="single-post-community-name">
                    <NavLink to={\`/c/\${community?.id}\`}>
                      c/{community?.name}
                    </NavLink>
                  </div>
                  <span className="single-post-dot-spacer">•</span>
                </div>
              )}

              <div className="single-post-author-info">
                Posted by{" "}
                <NavLink to={\`/users/\${post.postAuthor.id}\`}>
                  u/{post.postAuthor.username}
                </NavLink>{" "}
                {moment(new Date(post.createdAt)).fromNow()}
              </div>
            </div>
            <div className="single-post-title-bar">{post.title}</div>
            {post.imgUrl ? (
              <div className="single-post-content-image">
                <img className="image-post-img" src={post.imgUrl} />
              </div>
            ) : (
              <>
                {isPage === "all" && (
                  <div className="single-post-content">{post.content}</div>
                )}
                {isPage === "singlepage" && (
                  <div className="single-page-content">{post.content}</div>
                )}
                {isPage === "community" && (
                  <div className="single-post-content">{post.content}</div>
                )}
                {isPage !== "singlepage" &&
                  isPage !== "all" &&
                  isPage !== "community" && (
                    <div className="single-post-content">{post.content}</div>
                  )}
              </>
            )}

            <div className="single-post-button-bar">
              <div className="single-post-button">
                <button className="single-post-comments-btn">
                  <i className="fa-regular fa-message"></i>{" "}
                  <span className="single-post-comments-num">
                    {Object.values(post.postComments).length || 0}{" "}
                    {Object.values(post.postComments).length === 1
                      ? "Comment"
                      : "Comments"}
                  </span>
                </button>
              </div>
              <div className="share-btn-stuff">
                {isPage === undefined && (
                  <NavLink to="/">
                    <div className="single-post-button">
                      <button
                        className="single-post-share-btn"
                        onClick={() => {
                          setShowLinkCopied(true);
                          navigator.clipboard.writeText(
                            \`https://ribbit-app.herokuapp.com/posts/\${post.id}\`
                          );
                        }}
                      >
                        <img src={Bounce} className="single-post-share-icon" />
                        Share
                      </button>
                    </div>
                  </NavLink>
                )}
                {isPage === "all" && (
                  <NavLink to="/c/all">
                    <div className="single-post-button">
                      <button
                        className="single-post-share-btn"
                        onClick={() => {
                          setShowLinkCopied(true);
                          navigator.clipboard.writeText(
                            \`https://ribbit-app.herokuapp.com/posts/\${post.id}\`
                          );
                        }}
                      >
                        <img src={Bounce} className="single-post-share-icon" />
                        Share
                      </button>
                    </div>
                  </NavLink>
                )}
                {isPage === "community" && (
                  <NavLink to={\`/c/\${post.communityId}\`}>
                    <div className="single-post-button">
                      <button
                        className="single-post-share-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowLinkCopied(true);
                          navigator.clipboard.writeText(
                            \`https://ribbit-app.herokuapp.com/posts/\${post.id}\`
                          );
                        }}
                      >
                        <img src={Bounce} className="single-post-share-icon" />
                        Share
                      </button>
                    </div>
                  </NavLink>
                )}

                {isPage === "singlepage" && (
                  <div className="single-post-button">
                    <button
                      className="single-post-share-btn"
                      onClick={() => {
                        setShowLinkCopied(true);
                        navigator.clipboard.writeText(
                          \`https://ribbit-app.herokuapp.com/posts/\${post.id}\`
                        );
                      }}
                    >
                      <img src={Bounce} className="single-post-share-icon" />
                      Share
                    </button>
                  </div>
                )}
                {showLinkCopied && (
                  <div
                    className={
                      showLinkCopied
                        ? "animate-mount tooltiptext"
                        : "animate-unmount tooltiptext"
                    }
                  >
                    Link Copied to Clipboard
                  </div>
                )}
              </div>
              {isPage === "singlepage" &&
              user &&
              user.id === post.postAuthor.id ? (
                <div className="logged-in-btns">
                  <div className="single-post-button">
                    <button
                      className="single-post-edit-btn"
                      onClick={() => history.push(\`/posts/\${post.id}/edit\`)}
                    >
                      <i className="fa-solid fa-pencil"></i>
                      Edit
                    </button>
                    {showEditModal && (
                      <Modal
                        onClose={() => setShowEditModal(false)}
                        title="Edit post"
                      >
                        <UpdatePost
                          setShowEditModal={setShowEditModal}
                          showEditModal={showEditModal}
                        />
                      </Modal>
                    )}
                  </div>
                  <div className="single-post-button">
                    <button
                      className="single-post-delete-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDeleteModal(true);
                      }}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                      Delete
                    </button>
                    {showDeleteModal && (
                      <Modal
                        onClose={() => setShowDeleteModal(false)}
                        title="Delete post?"
                      >
                        <DeleteConfirmation
                          showDeleteModal={showDeleteModal}
                          setShowDeleteModal={setShowDeleteModal}
                          postId={post.id}
                          communityId={community.id}
                          item="post"
                          post={post}
                        />
                      </Modal>
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}`}
            />
            <p>
              There are so many things I don't like about this block of code.
            </p>
            <ul>
              <li>
                <span className="text-pink-500">
                  One file, many jobs (~280 LOC)
                </span>
                : UI rendering, data-fetching, voting rules, modals, share-link
                logic, navigation, and styling concerns, all entangled together.
              </li>
              <li>
                <span className="text-pink-500">
                  Heavy re-renders and wasted calls
                </span>
                : <code>useEffect</code> fired <code>getPosts()</code>,{" "}
                <code>getCommunities()</code>, and <code>getComments()</code> on
                every mount, even when those resources wree already in Redux,
                resulting in poor performance and long load times.
              </li>
              <li>
                <span className="text-pink-500">Out of control state</span>: Six
                separate <code>useState</code> flags (
                <code>showDeleteModal</code>, <code>voteAllowed</code>, etc.)
                made flow hard to follow and increased bug surface.
              </li>
              <li>
                <span className="text-pink-500">Copy-pasted branches</span>:
                Duplication in the form of four near-identical{" "}
                <code>&lt;NavLink /&gt;</code>/share-button blocks for each{" "}
                <code>isPage</code> variant.
              </li>
              <li>
                <span className="text-pink-500">
                  SRP and testability violated
                </span>
                : Any changes to votes, modals, or routing forced edits in the
                same file. Mocking it in tests required a full Redux store and
                router context.
              </li>
              <li>
                <span className="text-pink-500">Side-effect coupling</span>:
                Vote throtttling, clipboard writes, and timeout timers all lived
                inside the render component, blocking unit tests and
                complicating debugging.
              </li>
              <li>
                <span className="text-pink-500">Mixed styling and markup</span>:
                Inline class juggling, plus a dedicated <code>.css</code> file,
                made the visual layer harder to discern.
              </li>
              <li>
                <span className="text-pink-500">Unruly imports</span>: Import
                statements are hard to read and maintain, largely due to a lack
                of organization but also because I had not yet implemented
                barrels and aliases to help control the paths of my imports,
                which also meant only a couple of imports per line, max. I mean,
                the imports for <code>useHistory</code> and <code>NavLink</code>{" "}
                are several lines apart, despite both being from{" "}
                <code>react-router-dom</code>. Come on now.
              </li>
            </ul>
            <p className="mt-8">Tsk, tsk. Terrible.</p>
            <p>
              That's okay, because this is what <code>SinglePost</code> looks
              like today:
            </p>
            <Code
              code={`import { FC, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PostFormatContext } from "@/context";
import { RootState } from "@/store";

import CardPostFormat from "./CardPostFormat";
import ClassicPostFormat from "./ClassicPostFormat";
import CompactPostFormat from "./CompactPostFormat";

/* ───────────────────────── Types ───────────────────────── */

type Post = RootState["posts"][string];
type PageKind = "profile" | "singlepage" | string;

export interface SinglePostProps {
  link?: string;
  id: number | string;
  isPage?: PageKind;
  post: Post;
  handleCommentsBtnClick?: () => void;
}

/* ───────────────────────── Component ───────────────────── */

export const SinglePost: FC<SinglePostProps> = ({
  link,
  id,
  isPage,
  post,
  handleCommentsBtnClick,
}) => {
  const history = useHistory();
  const { format, setFormat } = useContext(PostFormatContext);

  /* initialise format once on mount */
  useEffect(() => {
    if (isPage === "singlepage") {
      setFormat("Card");
      return;
    }

    const stored = localStorage.getItem("selectedPostFormat") as
      | "Card"
      | "Classic"
      | "Compact"
      | null;

    setFormat(stored ?? "Card");
  }, [isPage, setFormat]);

  return (
    <article className="single-post">
      <span
        onClick={() => history.push(\`/posts/\${post.id}\`)}
        /* Keep Card posts keyboard-focusable, others not */
        tabIndex={format !== "Card" ? -1 : undefined}
      >
        {(isPage === "profile" || format === "Card") && (
          <CardPostFormat
            post={post}
            handleCommentsBtnClick={handleCommentsBtnClick}
            link={link}
            isPage={isPage}
          />
        )}

        {isPage !== "profile" && format === "Classic" && (
          <ClassicPostFormat post={post} id={id} isPage={isPage} />
        )}

        {isPage !== "profile" && format === "Compact" && (
          <CompactPostFormat post={post} id={id} isPage={isPage} />
        )}
      </span>
    </article>
  );
};
`}
              language="javascript"
            />
            <ul>
              {" "}
              <li>
                <span className="text-pink-500">Single responsibility</span>:
                Now acts only as a format-aware presenter that chooses whether
                the format is "Card", "Classic", or "Compact", and wraps them in
                a navigable link.
              </li>
              <li>
                <span className="text-pink-500">
                  Slimmed down (&lt;100 LOC)
                </span>
                : All data fetching, voting logic, and modal state were moved to
                dedicated hooks and components.
              </li>
              <li>
                <span className="text-pink-500">TypeScript utilized</span>: Uses
                TypeScript generics (<code>RootState["posts"][string]</code>,{" "}
                <code>SinglePostProps</code>) so prop-shape errors surface at
                compile time.
              </li>
              <li>
                <span className="text-pink-500">Minimal side-effects</span>: One
                tiny <code>useEffect</code> handles format initialization with
                graceful <code>localStorage</code> fallback. Everything else is
                pure render.
              </li>
              <li>
                <span className="text-pink-500">Better accessibility</span>:
                Keeps keyboard focus on clickable cards only (
                <code>tabIndex</code> logic) and swaps imperative{" "}
                <code>history.push</code> for a declarative wrapper.
              </li>
              <li>
                <span className="text-pink-500">Easier to test</span>: With no
                Redux or network calls inside, component tests can mount it with
                plain props and assert which sub-component renders.
              </li>
              <li>
                <span className="text-pink-500">Clean imports and styling</span>
                : Import statements look concise and clean, and are much more
                readable and maintainable than before. All inline styling has
                been eliminated, leaving it to the stylesheets to handle
                instead.
              </li>
            </ul>

            <h4 id="load-times-from-hell">Load Times from Hell</h4>
            <p>
              To make Ribbit feel alive, I bulk-seeded data such as users,
              posts, communities, and comments, all in one go. After introducing
              all of this data to the database, the app slowed to a painful
              crawl, and I was stuck with multi-minute load times.
            </p>
            <p>
              I knew it couldn't really be the seeded data at fault; after all,
              in the grand scheme of things, Ribbit's database contains just a
              fraction of the data that other sites contain. I eventually
              discovered that I was correct, and that the root of this issue was{" "}
              <em>not</em> because of the seeded data, but because of
              poorly-written code.
            </p>
            <p>
              The fix required performance profiling, lazy loading, optimized
              queries, and drastically reducing unnecessary re-renders. Ribbit
              is now fast, even with a full dataset.
            </p>
            <p>
              This challenge also brought to my attention the lack of
              loading-based features, and led to the implementation of loading
              skeletons to help the user remain at ease during load times.
            </p>
            <ImageModal
              imgSrc={LoadingSkeletons.src}
              imgAlt="Loading skeletons demonstration"
              title="Loading Skeletons Demonstration"
              description=""
            />
            <h4 id="learning-websockets">Learning WebSockets</h4>
            <p>
              Real-time chat was a non-negotiable feature for me, but I'd never
              worked with WebSockets before. Learning Flask-SocketIO meant
              diving into unfamiliar territory, experimenting, failing, and
              adjusting repeatedly. After a lot of trial and error, I got live
              chat and real-time notifications working reliably, and picked up a
              deep appreciation for async event handling along the way.
            </p>
            <h4 id="perfecting-ribbits-ui">Perfecting Ribbit's UI</h4>
            <p>
              Since Ribbit is a Reddit clone, accuracy mattered. I went above
              and beyond to replicate Reddit's UI, paying attention to small
              details like hover states, tooltips, dropdowns, and keyboard
              accessibility. Although this process was a little time-consuming,
              the result was well worth it, being a frontend that doesn't just{" "}
              <em>look</em> like Reddit, but <em>feels</em> like it, too.
            </p>
            <h4 id="traversing-an-outdated-design">
              Traversing an Outdated Design
            </h4>
            <p>
              Over halfway through Ribbit's development, Reddit rolled out a
              site-wide redesign to modernize its look. Unfortunately, this
              meant that the UI I had spent months replicating was suddenly
              gone. I no longer had access to the design I was nearly finished
              implementing.
            </p>
            <p>
              An example: Here's the Create Post page. The first image shows
              this page in Reddit's previous design (aka the one I was trying to
              implement), and the one after is in Reddit's new design (aka the
              one I'm forced to look at these days). Take a look at just how
              different these two designs are.
            </p>
            <ImageModal
              title="Create Post's previous design"
              description=""
              imgSrc={CreatePostTopImage.src}
              imgAlt="Create Post's previous design"
            />
            <ImageModal
              title="Create Post's new design"
              description=""
              imgSrc={CreatePostBottomImage.src}
              imgAlt="Create Post's new design"
            />
            <p>
              To get over this hurdle, I turned to Google Images and dug up as
              many screenshots as I could from 2023 and earlier - sometimes in
              light mode, sometimes in dark, but rarely both. Despite the extra
              challenge, I managed to recreate nearly all of the original
              layout, with just a few minor details reflecting Reddit's new
              design. The biggest reflection of Reddit's new design shows when
              viewing Ribbit on a small screen ("mobile mode"), as The final
              result still captures the spirit and structure of the version I
              set out to build, and is still, by and large, a pixel-perfect
              replication.
            </p>
            <>
              <h3 id="things-i-would-do-differently-important-lessons-learned">
                Things I Would Do Differently: Important Lessons Learned
              </h3>
              <ol>
                <li>
                  <span className="text-pink-500">
                    Adopt TypeScript on Day 0
                  </span>
                  : Adding static types at the very beginning pays dividends
                  throughout the life of a codebase. When every component, hook,
                  API call, and Redux slice is typed from the start,
                  autocomplete becomes smarter, refactors are safer, and bugs
                  are caught <em>before</em> they hit the browser. When I
                  decided to add TypeScript to my codebase, I had to retrofit
                  hundreds of <code>.ts</code> annotations after the fact, an
                  effort that ballooned into days of "find-the-any" detective
                  work.
                </li>
                <li>
                  <span className="text-pink-500">
                    Start testing with the very first component
                  </span>
                  : Tests written <em>after</em> MVP feel like pushing a boulder
                  uphill: you're chasing down side effects, mocking
                  half-finished APIs, and inevitably rewriting production code
                  to make it testable. By contrast, adding a simple
                  render-assertion for component #1 creates a safety net that
                  naturally grows with the project. It also forces you to write
                  code that's decoupled, deterministic, and accessible.
                </li>
                <li>
                  <span className="text-pink-500">
                    Bake in established best practices from the beginning
                  </span>
                  : "We'll clean it up later" usually translates to "we'll never
                  clean it up." Principles like SRP, DRY, and clear folder
                  boundaries aren't overhead, but guardrails that keep velocity
                  high as complexity increases. Early shortcuts turned into
                  tangled dependencies that slowed every new feature, and I
                  ended up undergoing a massive effort to refactor the entire
                  codebase in an effort to produce professional code, time that
                  could have been spent much more productively.
                </li>
                <li>
                  <span className="text-pink-500">
                    Ship when it's <em>clear</em>, not when it's{" "}
                    <em>perfect</em>
                  </span>
                  : Pixel-perfect UIs are great showpieces, but brittle CSS
                  hacks and over-engineered components cost more in the long run
                  than a minor visual quirk. I now aim for "readable,
                  maintainable, scalable" as the definition of done. If the 90%
                  solution is clean and the last 10% requires inscrutable magic
                  numbers or duplicate logic, I'll ship the 90% and log a
                  design-polish card for later.
                </li>
                <li>
                  <span className="text-pink-500">Stick with the plan</span>:
                  Don't deviate from the "MVP features" plan; the rest can be
                  tackled later if there's time. This sort of discipline keeps
                  deadlines realistic and prevents a mid-sprint existential
                  crisis.
                </li>
                <li>
                  <span className="text-pink-500">
                    Schedule periodic dependency upgrades
                  </span>
                  : Upgrading from React 18.0.0 to 18.3.0 is easy; leaping from
                  16.x to 18.x mid-project is a mini-migration. Preventing a
                  mid-development crisis is always preferrable.
                </li>
                <li>
                  <span className="text-pink-500">
                    Capture metrics throughout
                  </span>
                  : ...so they can be used later on for project data. Page-load
                  times, API latency, Lighthouse scores, even simple Google
                  Analytics events, tell a compelling story on a résumé or
                  project showcase. Retrofitting telemetry after launch means
                  you miss the "before" numbers that highlight your
                  optimizations.
                </li>
                <li>
                  <span className="text-pink-500">Utililze CSS variables</span>:
                  Variables for color, spacing, and typography keep stylesheets
                  DRY and enable effortless theming (dark mode, branding, A/B
                  tests). Waiting until the CSS is sprawling makes extraction
                  error-prone.
                </li>
                <li>
                  <span className="text-pink-500">
                    Commit to mobile-first designs from the beginning
                  </span>
                  : Designing desktop-first and "shrinking down" often yields
                  unbalanced layouts and last-minute media-query spaghetti. A
                  mobile-first approach forces you to prioritize content
                  hierarchy and progressive enhancement.
                </li>
              </ol>
            </>
            <>
              <h2 id="implementation-details">Implementation Details</h2>
              <p>
                This section takes a more in-depth look at the details behind
                Ribbit's codebase, including specific code snippets, folder
                structures, the reasons behind certain decisions, etc.{" "}
              </p>

              <h3 id="stack-overview">Stack Overview</h3>
              <div className="flex flex-col">
                <div className="-m-1.5">
                  <div className="p-1.5 inline-block align-middle">
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
                            Technologies
                          </th>
                          <th
                            scope="col"
                            className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                          >
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                            Backend
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            Flask, SQLAlchemy, Flask-SocketIO
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            Lightweight micro-framework, declarative ORM, shared
                            session between HTTP and WebSockets.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                            Frontend
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            React, Redux
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            Modern hooks API, batteries-included state slice
                            pattern, lightning-fast dev server.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                            Data
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            PostgreSQL
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            Reliable JSON + full-text search, easy Heroku/Render
                            deploy.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                            Tooling
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
                            Docker Compose
                          </td>
                          <td className="p-2 text-sm  dark:text-neutral-200">
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
              <h4 id="database-schema-diagram">Database Schema Diagram</h4>
              <ImageModal
                title="Database Schema Diagram"
                description=""
                imgSrc={DbDiagramDark.src}
                imgAlt="Database schema diagram (dark)"
              />
              <p>
                This is the diagram of Ribbit's database schema. For an in-depth
                look, you can visit{" "}
                <ExternalLinkWiggle
                  url="https://dbdocs.io/sara.dunlop.dev/Ribbit"
                  text="the schema wiki"
                />
                , where you can see all of the dirty details up close. There are
                23 tables and too many relationships between them to count,
                showing just how advanced Ribbit is in comparison to your basic
                clone.
              </p>
              <h4 id="backend-folder-structure">Backend Folder Structure</h4>
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
                  <code>api/</code> - All Flask Blueprints go here, each
                  Blueprint exposing the endpoints for a specific feature area
                  (users, posts, comments, etc.).
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
                  <code>seeds/</code> - Seed scripts for populating the
                  database.
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
                every <code>Post</code> record, converting each to a
                plain-Python dictionary with <code>to_dict()</code>, and
                wrapping the result in a JSON-serializable object:
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
                      <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                        <code>"Title"</code>
                      </td>
                      <td className="p-2 text-sm dark:text-neutral-200">
                        <code>TextAreaField</code>
                      </td>
                      <td className="p-2 text-sm dark:text-neutral-200">
                        <code>DataRequired</code>, <code>Length(1-300)</code>
                      </td>
                      <td className="p-2 text-sm dark:text-neutral-200">
                        Guarantees every post has a non-empty title capped at
                        300 characters.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                        <code>"Content"</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
                        <code>TextAreaField</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
                        <code>Length(max=40000)</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
                        Optional body text, but limited so someone can't drop a
                        novel in.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                        <code>"CommunityId"</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
                        <code>IntegerField</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">—</td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
                        Stores the chosen community's id, set by the user in the
                        'choose a community' dropdown.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                        <code>"Submit"</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
                        <code>SubmitField</code>
                      </td>
                      <td className="p-2 text-sm  dark:text-neutral-200">—</td>
                      <td className="p-2 text-sm  dark:text-neutral-200">
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
                <code>ViewedPost</code> is a join table with extras; it logs
                every time a user opens a post, and it timestamps the event to
                display for the user.
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
                  <code>to_dict()</code> returns an API-ready payload,
                  optionally nesting the post's own dictionary, while{" "}
                  <code>__repr__</code> makes debugging output readable (
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
                This excerpt comes from <code>api/seeds/followers.py</code> and
                is part of the function that populates each user's "followers"
                list with the ids of users to follow. In doing it this way, I am
                able to directly map out who is following who. Of course, if I
                didn't want so much control, randomizing a user's follows list
                could be an option, too.
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
              <ol>
                <li>
                  First, we fetch the relevant users (ids 2 through 50) in a
                  single query.
                </li>
                <li>
                  {" "}
                  Next, we define <code>follow_map</code>, a concise dictionary
                  that pairs each user with the set of accounts they should
                  follow, keeping seed data readable without sprawling loops or
                  hard-coded statements. In this excerpt, we are giving users 2
                  and 3 a small sample size of followed users. You'll notice
                  that they're following each other, too.
                </li>

                <li>
                  Once <code>follow_map</code> is defined, we loop over its
                  items. For each entry, the dictionary key represents the
                  follower's user id, while the value is a list of followed user
                  ids.
                </li>
                <li>
                  {" "}
                  We use <code>.extend()</code>
                  to append those target users to the follower's followed
                  relationship.
                </li>
                <li>
                  Finally, we commit the session to persist everything in one
                  transaction.
                </li>
              </ol>
              <h4 id="websocket-gatekeeper">Checking out socket.py</h4>
              <p>
                In the backend, all WebSockets traffic funnels through a single
                module, <code>app/socket.py</code>. Every socket is
                authenticated on connect, parked in its personal room and routed
                by a handful of event handlers that power live chat, live chat
                reactions, and notifications. Consolidating that logic into one
                file makes auditing and debugging simple.
              </p>
              <p>
                Take, for example, this helper function,{" "}
                <code>emit_notificaiton_to_user()</code>:
              </p>
              <Code
                language="python"
                code={`def emit_notification_to_user(notification):
    """
    Broadcast a newly-created Notification to its owner in real time.
    """
    room = f"user_{notification.user_id}"
    socketio.emit("new_notification", notification.to_dict(), to=room)`}
              />
              <p>
                This simple two-liner, despite being small, is the linchpin that
                makes the notifications system feel instant.
              </p>
              <ul>
                <li>
                  <code>room</code>: Derives the room name from the id of the
                  user the notification is for. Note that a "room" is simply a
                  label.
                </li>
                <li>
                  SocketIO then fires a <code>new_notification</code> event. The
                  notification in question is sent to the frontend, using the{" "}
                  <code>room</code> to identify where the notification should go
                  (or rather,{" "}
                  <span className="text-pink-500">
                    <em>whom</em>
                  </span>{" "}
                  it should go to).
                </li>
              </ul>
              <h3 id="frontend-patterns">A Tour of the Frontend</h3>
              <h4 id="best-practices">Best Practices</h4>
              <p>
                Ribbit's frontend components and files follow a general list of
                best practices.
              </p>
              <ol>
                <li>
                  <span className="text-pink-500">LOC Limit</span>: If a file
                  reaches 200 lines of code (LOC), that means that it's time to
                  check on the file to see if it could use some shortening,
                  typically via one or more of the following:
                  <ul>
                    <li>
                      <span className="text-pink-500">
                        Don't Repeat Yourself (DRY)
                      </span>
                      : Keep components DRY. Use reusable components and custom
                      hooks to eliminate unnecessary duplicated code.
                    </li>
                    <li>
                      <span className="text-pink-500">
                        Single Responsibility Principle (SRP)
                      </span>
                      : The goal is for each component "to do one thing, and do
                      that one thing well". If a component starts taking on too
                      many roles, cut it down into multiple smaller components.
                    </li>
                    <li>
                      <span className="text-pink-500">
                        Separation of Concerns (SoP)
                      </span>
                      : Separate the UI from its logic by extracting said logic
                      into a custom hook. These custom hooks are named after the
                      component for which it holds the logic (e.g.{" "}
                      <code>SinglePost</code> and <code>useSinglePost</code>).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-pink-500">Avoid prop drilling</span>:
                  Utilize the Context API to eliminate prop drilling.
                </li>
                <li>
                  <span className="text-pink-500">
                    One prop object is better than several props
                  </span>
                  : Avoid passing a lot of props, and instead pass one prop by
                  turning the props into an object. More specifically, related
                  props should go into their own object.
                  <Code
                    language="javascript"
                    code={`<FormInput
	name="username"
	value={username}
	onChange={(e) => setUsername(e.target.value)}
	placeholder="Choose your username"
	maxValue={255}
	labelText="Username"
/>`}
                  />
                  <Code
                    language="javascript"
                    code={`const formInputProps = {
	name: "username",
	value: username,
	onChange: (e) => setUsername(e.target.value),
	placeholder: "Choose your username",
	maxValue: 255,
	labelText: "Username"
}

<FormInput inputProps={formInputProps} />`}
                  />
                </li>
                <li>
                  <span className="text-pink-500">No inline code</span>: Remove
                  inline JavaScript and inline styles (CSS) to improve
                  readability.
                </li>
                <li>
                  <span className="text-pink-500">Clean up</span>: Remove{" "}
                  <code>console.log</code>s, unnecessary comments, and unused
                  variables, props, and imports.
                </li>
                <li>
                  <span className="text-pink-500">
                    Keep import statements readable
                  </span>
                  : Utilize barrels and aliases to shorten import paths and keep
                  them concise.
                </li>
                <li>
                  <span className="text-pink-500">Organize code</span>: Organize
                  import statements and component logic; <code>useState</code>{" "}
                  hooks should be with <code>useState</code> hooks, event
                  handlers with event handlers, etc.
                </li>
                <li>
                  <span className="text-pink-500">Use Effects correctly</span>:
                  Follow React's{" "}
                  <ExternalLinkWiggle
                    url="https://react.dev/learn/you-might-not-need-an-effect"
                    text="You Might Not Need an Effect"
                  />{" "}
                  guide (which, in my opinion, should be required reading for
                  all React developers) to use Effects correctly. This generally
                  means that Effects are used much less often, improving code
                  quality and performance.
                </li>
                <li>
                  <span className="text-pink-500">
                    Avoid "magic" numbers and strings
                  </span>
                  : A magic number/string is a number/string that "magically"
                  appears with no prior context or inferred meaning, and hurts
                  both readability and maintainability. An example:
                  <Code
                    code={`const totalTemp = todaysTemp + 180;`}
                    language="javascript"
                  />
                  What is 180? Where did it come from? Removing this magic
                  number would look something like this:
                  <Code
                    code={`const yesterdaysTemp = 180;
const totalTemp = todaysTemp + yesterdaysTemp;`}
                    language="javascript"
                  />
                  Now we know where the 180 comes from, we can use{" "}
                  <code>yesterdaysTemp</code> in multiple places, and we can
                  easily use the variable initialization to change the value
                  needbe.
                </li>
              </ol>
              <h4 id="frontend-folder-structure">Frontend Folder Structure</h4>
              <p>
                While the backend has a small folder structure, the frontend, by
                contrast, has a rather large structure with a tad more
                complexity.
              </p>
              <Code
                language="bash"
                code={`frontend/src/
├─ assets/
├─ components/
├─ context/
├─ features/
│  └─ Auth/
│	  ├─ __tests__/
│	  ├─ components/
│	  ├─ data/
│	  ├─ hooks/
│	  ├─ styles/
│	  └─ utils/
├─ hooks/
├─ layouts/
├─ pages/
├─ routes/
├─ store/
└─ utils/`}
              />
              <p>
                As shown above, Ribbit's frontend adopts a feature-based folder
                structure, meaning that although general/reusable components and
                functions are in shared folders like <code>components/</code>{" "}
                and <code>hooks/</code>, all of a feature's files can be found
                colocated together inside of <code>features/FeatureName/</code>,
                where a smaller version of the frontend's folder structure keeps
                that feature's files similarly organized.
              </p>
              <ul>
                <li>
                  <code>assets/</code>: Contains images, icons, and global
                  stylesheets.
                </li>
                <li>
                  <code>components/</code>: All of the general or reusable
                  components, meaning ones that don't belong to a specific
                  feature, but to the site as a whole.
                </li>
                <li>
                  <code>context/</code>: The Context API files, for the main
                  purposes of reducing prop drilling and eliminating duplicated
                  code in the frontend.
                </li>
                <li>
                  <code>features/</code>: Features and their respective files.
                </li>
                <li>
                  <code>hooks/</code>: General or reusable custom hooks, again
                  not belonging to a specific feature, but to Ribbit itself.
                </li>
                <li>
                  <code>layouts/</code>: Houses layout-related components.
                </li>
                <li>
                  <code>pages/</code>: This folder contains one file per page on
                  Ribbit. Each file serves as a place to glue together the
                  components that make up that page, and doesn't contain
                  anything more.
                </li>
                <li>
                  <code>routes/</code>: After <code>App.js</code> became long
                  and unruly, I opted to move the routes to their own folder for
                  the sake of cleaner, more maintainable code.
                </li>
                <li>
                  <code>store/</code>: All Redux-related files. Each feature has
                  its own slice (i.e., <code>posts.js</code>), and this file is
                  where the actions, the thunks, and a reducer for that feature
                  live.
                </li>
              </ul>
              <div className="mt-[2rem] mb-[1rem]">
                <strong>Feature-Specific Folders</strong>
              </div>
              <p>
                Let's look at the Authentication feature as an example, located
                at <code>features/Auth/</code>. This feature is primarily
                responsible for the Log In and Sign Up forms and all of their
                unique nuances.
              </p>
              <ul>
                <li>
                  <code>Auth/components/</code>: Within this folder we would
                  find the frontend components for the auth forms, as well as
                  any additional components that are used to create them.
                </li>
                <li>
                  <code>Auth/data/</code>: This folder is more rarely found; for
                  the Auth feature, it exists for the sole purpose of housing
                  data for a "Random Username Generator" tool that the Sign Up
                  form offers; specifically, a 'nouns' list and an 'adjectives'
                  list.
                </li>
                <li>
                  <code>Auth/hooks/</code>: Over in this folder are all of the
                  custom hooks meant for this feature alone.
                </li>
                <li>
                  <code>Auth/utils/</code>: Similarly, in here are the utility
                  functions that are strictly meant for the Auth feature.
                </li>
                <li>
                  <code>Auth/styles/</code>: Although there are a couple of
                  global stylesheets, most features have their own stylesheets
                  for easier editing and debugging, and would be located here.
                </li>
                <li>
                  <code>Auth/__tests__/</code>: Finally, we have the folder that
                  houses the tests for this feature. Although there are other
                  options (like putting test files directly alongside the files
                  they test), I wanted to keep this sort of folder pattern
                  consistent throughout the frontend.
                </li>
              </ul>

              <div className="mt-[2rem] mb-[1rem]">
                <strong>Barrels and Aliases</strong>
              </div>
              <p>
                One of the potential downsides to breaking your components up
                into smaller components and housing them in nested folders is
                the potential for import statements to grow long and out of
                control.
              </p>
              <p>
                To help manage this, I implemented the use of barrels and
                aliases. A <span className="text-pink-500">barrel</span> refers
                to an <code>index.ts</code> file in every directory that does
                nothing but re-export the other files in that directory, and an{" "}
                <span className="text-pink-500">alias</span> enables you to turn
                "dot ladders" like this: <code>../../../</code> into a short
                alias, like this: <code>@/</code>.
              </p>
              <p>
                The results? Turning long and unruly import statements like
                this:
              </p>
              <Code
                language="javascript"
                code={`import PostFeed from "../../../features/Posts/components/PostFeed/PostFeed";
import PostFeedBtn from "../../../features/Posts/components/PostFeed/PostFeedBtn";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import useScrollToTop from "../../../hooks/useScrollToTop";`}
              />
              <p>
                ...into a much more concise and friendly version, like this:
              </p>
              <Code
                language="javascript"
                code={`import { PostFeed, PostFeedBtn } from "@/features";
import { ScrollToTop } from "@/components";
import { useScrollToTop } from "@/hooks";`}
              />
              <p>
                <span className="text-pink-500">Side note</span>: If you're
                interested in learning more about utilizing barrels and aliases
                to manage your import statements, I have a blog post from my
                'Levelling Up React' series that teaches you how to do so, and
                you can find it{" "}
                <Link href="/posts/levelling-up-react-2">here</Link>.
              </p>
              <h4 id="redux-state-management">Redux State Management</h4>
              <p>
                State management is handled by Redux. Each major feature has its
                own file in the <code>store/</code> directory, named after the
                feature itself (i.e. the Posts feature's Redux file is{" "}
                <code>posts.ts</code>). Let's look at an example using Posts -
                and specifically, retrieving all posts - as said example.
              </p>
              <p>First we have our action:</p>
              <Code
                language="javascript"
                code={`const LOAD_POSTS = "posts/LOAD";

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts,
  };
};
`}
              />
              <p>Next, our thunk:</p>
              <Code
                language="javascript"
                code={`export const getPosts = () => async dispatch => {
	const response = await fetch("/api/posts");
	if(response.ok) {
		const data = await response.json();
		dispatch(loadPosts(data));
		return data;
	}
}
`}
              />
              <p>And finally, the reducer:</p>
              <Code
                language="javascript"
                code={`const initialState = {};

export default function postsReducer(state = initialState, action) {
    case LOAD_POSTS:
      if (action.posts && action.posts.Posts) {
        return action.posts.Posts.reduce((posts, post) => {
          posts[post.id] = post;
          return posts;
        }, {});
      } else {
        return state;
      }
      default:
        return state;
}
`}
              />
              <h3 id="accessibility-considerations">
                Accessibility Considerations
              </h3>
              <p>
                Often missed but always important, a website's accessibility
                takes on various forms. For Ribbit, I employed the following:
              </p>
              <ul>
                <li>
                  <span className="text-pink-500">
                    "Skip to (Location)" Links
                  </span>
                  : If the user tabs past the top navbar, the very next thing
                  that accepts focus are hidden "Skip to <em>Location</em>"
                  links - specifically, Skip to Sidebar and Skip to Navigation.
                  <ImageModal
                    imgSrc={DontSkip.src}
                    imgAlt="Don't skip"
                    title="Don't skip"
                    description=""
                  />
                  Shown above, the regular tab order puts the user right inside
                  of the main content after leaving the top navbar. This is
                  fine, but it also means it may be a lot of tabbing before they
                  reach other parts of the page.
                  <ImageModal
                    imgSrc={SkipToNavigation.src}
                    imgAlt="Skip to Navigation"
                    title="Skip to Navigation"
                    description=""
                  />
                  "Skip to Navigation" allows the user to skip straight to the
                  left navbar. Note that this is only available when the left
                  navbar is set to "open".
                  <ImageModal
                    imgSrc={SkipToSidebar.src}
                    imgAlt="Skip to Sidebar"
                    title="Skip to Sidebar"
                    description=""
                  />
                  "Skip to Sidebar" allows the user to skip straight to the
                  right column of the page. Most pages on Ribbit have this right
                  column, so this particular link is almost always available.
                </li>
                <li>
                  <span className="text-pink-500">Focus Traps</span>: Modals and
                  menus use a custom hook called <code>useFocusTrap</code>,
                  which "traps" the user's focus inside of that modal/menu. As
                  the user reaches the bottom of the modal/menu, when they
                  continue to tab, the focus resets to the top rather than
                  moving to the page behind the modal/menu.
                </li>
                <li>
                  <span className="text-pink-500">Scroll Locks</span>: Modals
                  use a custom hook called <code>useScrollLock</code>. This
                  prevents the user from accidentally scrolling in the main page
                  behind the modal by removing the scrollbar entirely until the
                  modal is closed.
                </li>
                <li>
                  <span className="text-pink-500">Aria-* Compliance</span>:
                  Ribbit is compliant to Aria-* rules.
                </li>
              </ul>
            </>
            <>
              <h2 id="features">Features</h2>
              <p>
                Ribbit was in development for a bit longer than I originally
                anticipated, resulting in me producing a wide array of features
                to make the site feel complete. This is quite a long list as a
                result, so buckle in!
              </p>
              <h3 id="multiple-ways-to-log-in">Multiple Ways to Log In</h3>
              <ImageModal
                imgSrc={AuthFeature.src}
                title="Log In form"
                imgAlt="Log In form"
                description="The sign up and log in forms both contain all of the ways to log in: with Google, via the Demo account, or with a Ribbit account."
              />
              <p>
                Site visitors (users not logged into an account) are able to
                browse Ribbit's posts, community pages, and user profiles, and
                are able to use the Search feature, but that's about it. There
                are several features and pages that site visitors aren't able to
                access, and they must log into an account to fully experience
                Ribbit in its entirety. There are three available options:
              </p>
              <ol>
                <li>Create a Ribbit account</li>
                <li>Use an existing Google account</li>
                <li>
                  Log in as the Demo user, provided specifically for touring
                  Ribbit's features and publically accessible by all.
                </li>
              </ol>
              <h3 id="light-dark-mode-toggle">Light/Dark Mode Toggle</h3>
              <ImageModal
                imgSrc={LightDarkFeature.src}
                imgAlt="Light/dark mode toggle"
                title="Light/dark mode toggle"
                description=""
              />
              <p>
                I know firsthand how important it is for websites to offer a
                light/dark mode toggle, and made sure that Ribbit was no
                different. This toggle can be found in the righthand dropdown
                menu in the navbar. The user's preference persists beyond
                refresh for a better user experience.
              </p>
              <h3 id="responsive-design">Responsive Design</h3>
              <p>
                Ribbit comes equipped with a fully responsive design, allowing
                users of most devices and screen sizes to use Ribbit with ease.
                This includes a custom design for mobile screen sizes to prevent
                a terrible UI from affecting the user's experience.
              </p>
              <h3 id="user-accounts-&-profiles">User Accounts & Profiles</h3>
              <ImageModal
                imgSrc={UserProfilesFeature.src}
                imgAlt="User profile"
                title="User profile"
                description=""
              />
              <p>
                Each user has their own profile page, where their post history
                can be found as well as user info like their follower count,
                karma, and join date. Profiles also contain ways to interact
                with and contact the user, including sending them a message and
                initiating a live chat.
              </p>
              <p>
                When a user visits their own profile, they have access to
                additional information, such as the users that follow them and a
                list of their owned communities.
              </p>
              <h3 id="communities">Communities</h3>
              <ImageModal
                imgSrc={CommunitiesFeature.src}
                title="Community page"
                description=""
                imgAlt="Community page"
              />
              <p>
                Ribbit's communities are the equivalent of Reddit's subreddits.
                Users are free to create communities of their own. Each
                community has its own page where users can find the community's
                posts, rules, and other information.
              </p>
              <h3 id="subscriptions">Subscriptions</h3>
              <p>
                Users are able to subscribe to communities of interest. By doing
                so, the community's posts are automatically included in the
                user's homepage feed. The community is also added to the user's
                list of subscriptions for easy navigation and quick post
                creation:
              </p>
              <ImageModal
                imgSrc={SubscriptionsFeature.src}
                imgAlt="Subscriptions"
                title="Subscriptions"
                description=""
              />
              <h3 id="community-rules">Community Rules</h3>
              <ImageModal
                imgSrc={CommunityRulesFeature.src}
                imgAlt="Community rules"
                title="Community rules"
                description="Located on the general settings page"
              />
              <p>
                Community owners have the power to set the rules for their
                community. Community rules are typically there to help guide
                users on what is - and isn't - allowed when participating in
                discussions and creating posts.
              </p>
              <h3 id="community-moderation">Community Moderation</h3>
              <ImageModal
                imgSrc={CommunityModerationFeature.src}
                imgAlt="Community moderation"
                title="Community moderation example"
                description="The owner deletes a post in their community"
              />
              <p>
                Ribbit allows community owners to manage their community's
                content by giving them the power to delete posts and comments
                that break their community's rules.
              </p>
              <h3 id="community-style-settings">Community Style Settings</h3>
              <ImageModal
                imgSrc={CommunityStyleFeature.src}
                imgAlt="Community style settings"
                title="Community style settings"
                description="A demonstration of some of the community style settings that owners can play with."
              />
              <p>
                Community owners have the ability to customize the appearance of
                their community, which helps in giving the community its own
                identity. Among other settings, owners are able to change their
                community's theme colors, banner, and background.
              </p>
              <h3 id="posts">Posts</h3>
              <p>There are 3 kinds of posts that users can create:</p>
              <h4 id="text-posts">1. Text Posts</h4>
              <ImageModal
                imgSrc={TextPost.src}
                imgAlt="Text post"
                title="Text post"
                description=""
              />
              <p>Comes with a WYSIWYG editor for easy formatting.</p>
              <h4 id="image-posts">2. Image Posts</h4>
              <ImageModal
                imgSrc={ImagePost.src}
                imgAlt="Image post"
                title="Image post"
                description=""
              />
              <p>
                Upload an image from your device to share with others in the
                community.
              </p>
              <h4 id="url-link-posts">3. URL/Link Posts</h4>
              <ImageModal
                imgSrc={LinkPost.src}
                imgAlt="Link post"
                title="Link post"
                description=""
              />
              <p>
                The best way to share links relevant to a community's topic.
              </p>
              <h3 id="post-feeds">Post Feeds</h3>
              <p>There are a few different types of post feeds on Ribbit:</p>
              <ol>
                <li>
                  <span className="text-pink-500">Homepage feed</span>: Contains
                  posts from subscribed communities and followed users.
                </li>
                <li>
                  <span className="text-pink-500">'All' feed</span>: Browse all
                  posts from all communities across Ribbit.
                </li>
                <li>
                  <span className="text-pink-500">User feed</span>: Found on a
                  user's profile page, and contains all of that user's posts.
                </li>
                <li>
                  <span className="text-pink-500">Community feed</span>: Found
                  on a community's page, and contains all of that community's
                  posts.
                </li>
              </ol>
              <ImageModal
                imgSrc={PostFeed.src}
                imgAlt="Post feed"
                title="Post feed"
                description=""
              />
              <p>
                Every post feed offers sorting options ('New' and 'Top') as well
                as formatting options, ranging from 'Card' (the default) to
                'Compact'.
              </p>
              <h3 id="recently-viewed-posts">Recently Viewed Posts</h3>
              <ImageModal
                imgSrc={RecentlyViewedPosts.src}
                imgAlt="Recently viewed posts"
                title="Recently viewed posts"
                description=""
              />
              <p>
                Users can find a list of up to 5 of their most recently viewed
                posts on the homepage feed and the 'All' feed, serving as a
                brief look at their browsing history.
              </p>
              <h3 id="comments">Comments</h3>
              <ImageModal
                imgSrc={CommentsFeature.src}
                imgAlt="Comments"
                title="Comments"
                description=""
              />
              <p>
                Comment sections are located on the post's page, beneath the
                post itself. Each comments section has the following features:
              </p>
              <ul>
                <li>Comments are able to be collapsed</li>
                <li>
                  Comments with -5 points or less are automatically collapsed
                </li>
                <li>Deleted comments are automatically collapsed</li>
                <li>
                  When a comment is deleted, rather than disappearing from the
                  comment thread, it is replaced with a 'Deleted' placeholder to
                  protect the integrity of the parent and children comments.
                </li>
                <li>
                  Users can sort comment sections in a handful of ways,
                  including by New, Top, Best, and Controversial.
                </li>
                <li>
                  Community owners are clearly labelled with a 'MOD' label, and
                  the post's author is labelled with 'OP'.
                </li>
              </ul>
              <h3 id="comment-search">Comment Search</h3>
              <ImageModal
                imgSrc={CommentsSearch.src}
                imgAlt="Comment Search"
                title="Comment search"
                description=""
              />
              <p>
                Comment sections include a mini search feature, allowing users
                to search for specific queries within those comments.
              </p>
              <h3 id="live-chat">Live Chat</h3>
              <ImageModal
                imgSrc={LiveChat.src}
                imgAlt="Live Chat"
                title="Live chat"
                description=""
              />
              <p>
                Real-time communication is available via the live chat feature,
                which allows users to chat directly with other users,
                one-on-one.
              </p>
              <h4 id="chat-notifications">Chat Notifications</h4>
              <p>
                The live chat feature helpfully notifies users when they have
                unread chat threads by providing the number of unread threads in
                real time.
              </p>
              <h4 id="gifs-&-emojis">GIFs & Emojis</h4>
              <ImageModal
                imgSrc={Emojis.src}
                imgAlt="Emojis"
                title="Emojis"
                description=""
              />
              <p>
                The chat feature comes equipped with an entire library of GIFs
                and frog-themed emojis, allowing users to express themselves
                with playful visual cues.
              </p>
              <h4 id="reactions">Reactions</h4>
              <p>
                Users also have access to frog-themed reactions, which are
                little animated images that help users share a "reaction" to a
                message.
              </p>
              <h3 id="notifications">Notifications</h3>
              <p>
                Users receive notifications (in real time) for various events,
                such as receiving a new follower or getting a reply on a
                comment. Notifications remain 'unread' until clicked, and once
                marked read, can be marked unread again for a delayed reminder.
              </p>
              <h3 id="voting-system-posts-&-comments">
                Voting System (Posts & Comments)
              </h3>
              <ImageModal
                imgSrc={Votes.src}
                imgAlt="Votes"
                title="Voting system"
                description=""
              />
              <p>
                Users can express their opinions by voting on posts and comments
                with either an upvote, which generally implies a positive
                reaction or agreement, or a downvote, which generally implies a
                negative reaction or disagreement. The more points a post or
                comment has, the more likely it is to be seen by users, and the
                better received it tends to be.{" "}
              </p>
              <h4 id="karma">Karma</h4>
              <p>
                A user's total post and comment score (upvotes minus downvotes
                across all posts and comments) appears as the user's "karma".
                When a user has a higher karma score, they tend to give off a
                perception that they have been around Ribbit for a while, and
                contribute likeable content of decent quality.
              </p>
              <h3 id="search">Search</h3>
              <ImageModal
                imgSrc={SearchQuickResults.src}
                imgAlt="Search quick results"
                title="Search: Quick results"
                description="Appears as you type in your query."
              />
              <p>
                Located in the navbar at the top of every page is Ribbit's
                searchbar, which enables users to find specific or relevant
                posts, comments, communities, and users.
              </p>
              <p>
                Typing a search query into the searchbar brings up the quick
                results menu. Full search results can be viewed either by
                pressing the <kbd>Enter</kbd> key or by clicking the{" "}
                <code>
                  Search for "<em>query</em>"
                </code>{" "}
                button at the bottom of the quick results menu.
              </p>
              <h3 id="messages">Messages</h3>
              <p>
                In addition to the live chat feature, users may send each other
                static messages via the Messages feature. All users have access
                to their messages inbox where they can view past and unread
                messages.
              </p>
              <p>
                Users can use this feature to directly contact the owner of a
                community without having to know their username. This is
                achieved by typing <code>c/communityName</code> into the
                'Recipient' box, replacing <code>communityName</code> with the
                community's real name.
              </p>
              <h3 id="followers">Followers</h3>
              <p>
                Users may follow other users that they enjoy or find
                interesting. In doing so, the followed user's posts will appear
                in the following user's homepage feed. In addition, the followed
                user is added to the following user's "Followers" list for easy
                navigation.
              </p>
              <ImageModal
                imgSrc={Followers.src}
                imgAlt="Followers"
                title="Followers"
                description=""
              />
              <p>
                Users can view a list of their followers by going to their own
                profile page and clicking on the 'Followers' statistic.
              </p>
              <h3 id="favorites">Favorites</h3>
              <ImageModal
                imgSrc={Favorites.src}
                imgAlt="Favorites"
                title="Favorites"
                description=""
              />
              <p>
                Subscribed communities and followed users can be marked as a
                "favorite" by interacting with the star next to their name. This
                adds the community/user to a special "Favorites" list, located
                at the top of the left nav menu, for easy navigation.
              </p>
            </>
            <>
              <h2 id="world-building">World Building</h2>
              <p>
                Because Ribbit was created as a clone with no real users, it was
                important that I figure out a way to demonstrate its many
                features. After all, imagine if Ribbit was completely empty - no
                users, communities, posts, or comments.
              </p>
              <ImageModal
                imgSrc={EmptyRibbit.src}
                imgAlt="Empty Ribbit"
                title="Empty Ribbit"
                description="Ribbit as it would look with no data."
              />
              <p>
                Not only would this ghost town aesthetic not look great, but it
                would also do the website a massive disservice, as being in that
                kind of state can't show what it's capable of doing.
              </p>
              <p>
                My solution was to populate Ribbit's database with enough fake
                data to adequately simulate a thriving userbase. This is what I
                like to call "world building", because that's exactly what I'm
                doing - building a world within Ribbit. This includes users
                interacting with and following one another, simulated
                discussions in the comments sections, unique vote counts for
                posts and comments, communities having their own identities via
                rules and styling, and more.
              </p>
              <p>
                All in all, Ribbit's database is prepopulated with the
                following:
              </p>
              <table className="divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                    >
                      Table
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-start text-xs font-medium text-gray-500 dark:text-[#FFF] uppercase"
                    >
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                      Users
                    </td>
                    <td className="p-2 text-sm  dark:text-neutral-200">51</td>
                    <td className="p-2 text-sm  dark:text-neutral-200"></td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                      Communities
                    </td>
                    <td className="p-2 text-sm  dark:text-neutral-200">22</td>
                    <td className="p-2 text-sm  dark:text-neutral-200"></td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                      Posts
                    </td>
                    <td className="p-2 text-sm  dark:text-neutral-200">66</td>
                    <td className="p-2 text-sm  dark:text-neutral-200">
                      3 posts per community
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2 whitespace-nowrap text-sm font-medium  dark:text-neutral-200">
                      Comments
                    </td>
                    <td className="p-2 text-sm  dark:text-neutral-200">445</td>
                    <td className="p-2 text-sm  dark:text-neutral-200">
                      0 to several comments per post
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>In addition to the above counts:</p>
              <ul>
                <li>
                  Each user has their own list of subscriptions, giving each
                  community unique member counts.
                </li>
                <li>
                  Each user has their own list of followed users, giving them
                  unique follower counts.
                </li>
                <li>
                  Users can have a custom display name, description, banner
                  image, or any combination of the three, including none at all.
                </li>
                <li>
                  Each post and comment has its own vote score, with each vote
                  belonging to a user. Although vote scores only show as a
                  positive or negative number, I even went so far as to include
                  both positive and negative votes for most posts and comments.
                  This allows users to have unique karma scores.
                </li>
                <li>Each community has its own set of rules.</li>
                <li>Each community also has its own special style settings.</li>
              </ul>
              <h3 id="the-details-behind-building-a-world">
                The Details Behind Building a World
              </h3>
              <p>
                Creating a realistic world required a bit of methodical
                planning. I utilized Google Sheets to keep track of all of my
                curated data. In doing this, I could pull up any piece of data
                quickly, all on the same spreadsheet.
              </p>
              <ImageModal
                imgSrc={WorldBuildingSpreadsheet.src}
                imgAlt="World-Building Spreadsheet"
                title="World Building in a Spreadsheet"
                description="A Google Sheets spreadsheet containing four tables - Users, Communities, Posts, and Comments."
              />
              <p>
                Want to take a closer look? Click{" "}
                <ExternalLinkWiggle
                  url="https://docs.google.com/spreadsheets/d/1oGscrJsn1_VhV0GG0HEJ7KICK51lbbqqVq-H2A31VuU/edit?usp=sharing"
                  text="here"
                />{" "}
                to check out a copy of this spreadsheet on Google Sheets.
              </p>
              <h4 id="users-table">Users Table</h4>
              <ImageModal
                imgSrc={UsersTable.src}
                imgAlt="Users table"
                title="Users table"
                description=""
              />
              <p>
                The Users table is simple - just 51 user IDs and their
                usernames. A majority of usernames were taken directly from
                existing usernames on Reddit for the sake of realism (though it
                should be noted that these users are in no way associated with
                Ribbit or myself).
              </p>
              <h4 id="communities-table">Communities Table</h4>
              <p>
                The Communities table was also easy, containing each community's
                ID and name, as well as the ID and username of the community's
                owner. I gave each community a unique color for easy
                identification.
              </p>
              <ImageModal
                imgSrc={CommunitiesTable.src}
                imgAlt="Communities table"
                title="Communities table"
                description=""
              />
              <p>
                Communities were taken directly from Reddit as well. This
                includes community names, rules, and general style settings.
              </p>
              <h4 id="posts-table">Posts Table</h4>
              <ImageModal
                imgSrc={PostsTable.src}
                imgAlt="Posts table"
                title="Posts table"
                description=""
              />
              <p>
                Here's where things start to get a little more complex. This is
                the table for Posts. Each post is of the same color as its
                community, for quick visual identification. This table contains
                the following information for each post:
              </p>
              <ul>
                <li>
                  <span className="text-pink-500">ID</span>: The post's ID.
                </li>
                <li>
                  <span className="text-pink-500">
                    Community information (Community ID, Community Name)
                  </span>
                  : The Community Name column comes with a dropdown box that
                  contains a selectable list of all of the communities in the
                  Communities table.
                  <ImageModal
                    imgSrc={ChoosingCommunityName.src}
                    imgAlt="Choosing community name"
                    title="Choosing community name"
                    description=""
                  />
                  After selecting a community, the community's ID is
                  automatically filled in, as well as the row's background
                  color.
                </li>
                <li>
                  <span className="text-pink-500">
                    Author information (Author ID, Author Username)
                  </span>
                  : Users are assigned to each post in almost chronological
                  order (by their user ID), which not only allows for fast data
                  entry, but also gives the illusion that users are posting in a
                  variety of communities about different topics of interest.
                  <ImageModal
                    imgSrc={AuthorId.src}
                    imgAlt="Author ID"
                    title="Author information"
                    description=""
                  />
                  After the Author ID column is filled out, the Author Username
                  is automatically filled in using the data from the Users
                  table.
                </li>
                <li>
                  <span className="text-pink-500">Post Title</span>: The post's
                  title. Titles can get really long, so I tend to keep this
                  column too short to show all of the text, but rest assured,
                  it's all there.
                </li>
                <li>
                  <span className="text-pink-500">
                    Post type (Text Post, Image Post, Link Post)
                  </span>
                  : These columns contain checkmarks. Each post is of one type
                  only, so only one column gets checked off. The other columns
                  are automatically greyed out.
                  <ImageModal
                    imgSrc={ChoosingPostType.src}
                    imgAlt="Choosing post type"
                    title="Choosing post type"
                    description=""
                  />
                </li>
                <li>
                  <span className="text-pink-500">Post Content</span>: Above
                  each post type column, you'll notice boxes with a '+' sign.
                  These are grouped columns, and clicking on this box opens up
                  the groups. For this particular table, each group consists of
                  just two columns: the post type and the post's content. I did
                  this so that this table wouldn't be annoyingly huge, and now I
                  simply have to open up a group to view a post's content
                  instead of having to potentially scroll through all of them.
                  <ImageModal
                    imgSrc={OpeningPostType.src}
                    imgAlt="Opening post type"
                    title="Opening post type"
                    description=""
                  />
                </li>
                <li>
                  <span className="text-pink-500">Votes</span>: The total vote
                  score for that post.
                </li>
              </ul>
              <p>
                All of the posts on Ribbit were taken from Reddit for the sake
                of realism. Author usernames and vote counts have been changed.
              </p>
              <h4 id="comments-table">Comments Table</h4>
              <ImageModal
                imgSrc={CommentsTable.src}
                imgAlt="Comments table"
                title="Comments table"
                description=""
              />
              <p>
                The Comments table is quite a doozy, and is the most complex of
                them all.
              </p>
              <ul>
                <li>
                  <span className="text-pink-500">ID</span>: The comment's ID.
                </li>
                <li>
                  <span className="text-pink-500">
                    Post information (Post ID, Post Author ID, Post Author
                    Username, Post Title)
                  </span>
                  : The information of the post that the comment belongs to,
                  including the post's ID and title, as well as the post's
                  author's ID and username. Filling in the Post ID column
                  automatically fills in the other Post columns based on the
                  data from the Posts table.
                </li>
                <li>
                  <span className="text-pink-500">
                    Author information (Author ID, Author Username)
                  </span>
                  : After entering the author's ID, their username is
                  automatically pulled from the Users table.
                </li>
                <li>
                  <span className="text-pink-500">Parent ID</span>: The "parent"
                  refers to the comment's parent comment - as in, the comment
                  that this comment is replying to, if any. If Comment 2 has a
                  parent ID of 1, that means that Comment 2 is a reply to
                  Comment 1.
                </li>
                <li>
                  <span className="text-pink-500">Comment Content</span>: The
                  comment's content.
                </li>
                <li>
                  <span className="text-pink-500">Votes</span>: The comment's
                  total vote score.
                </li>
                <li>
                  <span className="text-pink-500">Highlighted row</span>: When a
                  row is highlighted in yellow, that means that this comment's
                  author is the same as the author of the post - or, in other
                  words, the post's OP ("Original Poster").
                </li>
                <li>
                  <span className="text-pink-500">Comment trees</span>: For the
                  purposes of this explanation, a "comment tree" refers to a
                  comment and all of the reply comments. Comment trees are
                  indicated by the box-like lines at the far right end of the
                  table. Each box represents a full comment tree. If there is no
                  box, there are no replies to that comment.
                  <ImageModal
                    imgSrc={CommentTrees.src}
                    imgAlt="Comment trees"
                    title="Comment trees"
                    description=""
                  />
                  In the above screenshot, a red arrow represents one comment
                  tree. The first comment tree contains 3 comments, and looks
                  like this on the actual website:
                  <ImageModal
                    imgSrc={CommentTree.src}
                    imgAlt="Comment tree"
                    title="Comment tree"
                    description=""
                  />
                </li>
              </ul>
              <h3 id="a-tale-of-timestamps">
                Customizing Timestamps to Legitimize Data
              </h3>
              <p>
                For a good portion of Ribbit's development, I failed to notice a
                glaring problem that plagued the majority of the website's data:
                all of the timestamps were identical.
              </p>
              <p>
                Say there's a user with the username of Marnie. Marnie's profile
                says that her account was created on 07/11/25. Upon checking out
                her posts, you notice that all of her posts were also created on
                07/11/25. You exit to check out the main feed. What's this? All
                of the posts were created on 07/11/25. In fact, every community,
                post, comment, and user claims to have been created at the exact
                same time.
              </p>
              <p>
                This is a problem. Not only does it hurt the image I am trying
                to portray that Ribbit is a living, breathing website, but it
                also makes it so that it's impossible to sort anything by
                time-based criteria (e.g. "New").
              </p>
              <p>
                Thus, I needed to ensure that all of the seeded data had unique
                timestamps - not by hardcoding custom timestamps, but by writing
                functions for each table's unique needs. Take, for example, the
                function written for the Posts table:
              </p>
              <Code
                language="Python"
                code={`def generate_relative_timestamp(author_timestamp, community_timestamp, max_days_ago=7):
    """
    Generate a random datetime within the past \`max_days_ago\` days,
    ensuring it is never before the author's creation date or the
    community's creation date.
    """
    now = datetime.now()

    # Earliest must be the latest of:
    #   - the author's creation time
    #   - the community's creation time
    #   - (now - max_days_ago)
    earliest_date = max(
        author_timestamp,
        community_timestamp,
        now - timedelta(days=max_days_ago)
    )

    delta_seconds = int((now - earliest_date).total_seconds())
    if delta_seconds < 0:
        # If earliest_date is in the future (or no valid range), default to now
        return now

    # Choose a random offset between 0 and delta_seconds
    random_offset = random.randint(0, delta_seconds)
    return now - timedelta(seconds=random_offset)`}
              />
            </>
          </div>
        </div>
      </div>
    </Layout>
  );
}
