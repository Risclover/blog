import VideoPlayer from "@/components/VideoPlayer/videoplayer";
import ComparisonSlider from "@/components/comparisonslider";
import ImageModal from "@/components/imagemodal";
import Layout from "@/components/layout";
import MobileTableofContents from "@/components/mobiletoc";
import QuickFacts from "@/components/quick-facts";
import TableofContents from "@/components/tableofcontents";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import topImage from "../../public/images/comparison-ribbit-1.png";
import bottomImage from "../../public/images/comparison-reddit-1.png";
import ribbitComparison2 from "../../public/images/projects/ribbit/comparison-ribbit-2.png";
import redditComparison2 from "../../public/images/projects/ribbit/comparison-reddit-2.png";
import ribbitComparison3 from "../../public/images/projects/ribbit/comparison-ribbit-3.png";
import redditComparison3 from "../../public/images/projects/ribbit/comparison-reddit-3.png";
import Prism from "prismjs";
import Codes from "@/components/codes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const code1 = `Ribbit/
├─ app/
│  ├─ api/
│  ├─ forms/
│  ├─ models/
│  ├─ seeds/
├─ react-app/
│  ├─ public/
│  │  ├─ index.html
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ context/
│  │  ├─ data/
│  │  ├─ features/
│  │  ├─ hooks/
│  │  ├─ layouts/
│  │  ├─ pages/
│  │  ├─ utils/`;
type Props = {};

const postData = {
  category: "Projects",
  categoryUrl: "/#projects",
  subcategory: "Project Details",
  title: "Ribbit",
  subtitle:
    "A feature-rich pixel-perfect clone of the social media site Reddit.com",
};

const features = [
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
  "Followers",
  "Favorite Users",
  "Favorite Communities",
  "Messages",
  "Notifications",
  "Live Chat",
  "Image Uploads",
];

const fileContent = [
  { id: 1, slug: "introduction", title: "Introduction", level: 2 },
  { id: 1.5, slug: "what-is-reddit", title: "What is Reddit?", level: 3 },
  { id: 2, slug: "project-overview", title: "Project Overview", level: 2 },
  { id: 3, slug: "about-ribbit", title: "About Ribbit", level: 3 },
  { id: 3.5, slug: "quick-facts", title: "Quick Facts", level: 3 },
  { id: 4, slug: "primary-objectives", title: "Primary Objectives", level: 3 },
  { id: 5, slug: "additional-goals", title: "Additional Goals", level: 3 },
  { id: 6, slug: "technologies-used", title: "Technologies Used", level: 3 },
  { id: 6.5, slug: "technologies-used-frontend", title: "Frontend", level: 4 },
  { id: 6.6, slug: "technologies-used-backend", title: "Backend", level: 4 },
  {
    id: 6.7,
    slug: "tools-and-packages",
    title: "Tools and Packages",
    level: 4,
  },
  {
    id: 6.8,
    slug: "icon-sources",
    title: "Icon Sources",
    level: 4,
  },

  {
    id: 7,
    slug: "code-logic-architecture",
    title: "Code Logic & Architecture",
    level: 2,
  },
  { id: 8, slug: "folder-structure", title: "Folder Structure", level: 3 },
  { id: 9, slug: "backend", title: "Backend", level: 4 },
  { id: 10, slug: "frontend", title: "Frontend", level: 4 },
  { id: 11, slug: "logic-flow", title: "Logic Flow", level: 3 },
  { id: 12, slug: "features", title: "Features", level: 2 },
  {
    id: 13,
    slug: "ribbits-interface-a-tour",
    title: "Ribbit's Interface - A Tour",
    level: 2,
  },
  { id: 14, slug: "challenges", title: "Challenges", level: 2 },
  { id: 15, slug: "lessons-learned", title: "Lessons Learned", level: 2 },
  {
    id: 16,
    slug: "spotlight",
    title: "Component and Feature Spotlights",
    level: 2,
  },
  {
    id: 17,
    slug: "ribbit-vs-reddit",
    title: "Ribbit vs. Reddit: A Direct Comparison",
    level: 2,
  },
  { id: 18, slug: "conclusion", title: "Conclusion", level: 2 },

  // { id: 4, slug: "features", title: "Features", level: 2 },
  // { id: 5, slug: "users", title: "Users", level: 3 },
  // { id: 6, slug: "communities", title: "Communities", level: 3 },
  // { id: 7, slug: "subscriptions", title: "Subscriptions", level: 3 },
  // { id: 8, slug: "community-rules", title: "Community Rules", level: 3 },
  // { id: 9, slug: "posts", title: "Posts", level: 3 },
  // { id: 10, slug: "comments", title: "Comments", level: 3 },
  // { id: 11, slug: "post-votes", title: "Post Votes", level: 3 },
  // { id: 12, slug: "comment-votes", title: "Comment Votes", level: 3 },
  // {
  //   id: 13,
  //   slug: "image-uploads",
  //   title: "Image Uploads (AWS S3)",
  //   level: 3,
  // },
  // { id: 14, slug: "followers", title: "Followers", level: 3 },
  // { id: 15, slug: "search", title: "Search", level: 3 },
  // { id: 16, slug: "favorite-users", title: "Favorite Users", level: 3 },
  // {
  //   id: 17,
  //   slug: "favorite-communities",
  //   title: "Favorite Communities",
  //   level: 3,
  // },
  // {
  //   id: 18,
  //   slug: "recently-viewed-posts",
  //   title: "Recently Viewed Posts",
  //   level: 3,
  // },
  // { id: 19, slug: "messaging", title: "Messaging", level: 3 },
  // { id: 20, slug: "notifications", title: "Notifications", level: 3 },
  // {
  //   id: 21,
  //   slug: "live-chat",
  //   title: "Live Chat (Using Socket.io)",
  //   level: 3,
  // },
  // { id: 22, slug: "challenges-faced", title: "Challenges Faced", level: 2 },
  // { id: 23, slug: "lessons-learned", title: "Lessons Learned", level: 2 },
  // {
  //   id: 24,
  //   slug: "ribbit-vs-reddit",
  //   title: "Ribbit vs. Reddit: A Direct Comparison",
  //   level: 2,
  // },
  // {
  //   id: 25,
  //   slug: "homepage",
  //   title: "Homepage",
  //   level: 3,
  // },
  // {
  //   id: 26,
  //   slug: "messages",
  //   title: "Messages",
  //   level: 3,
  // },
  // {
  //   id: 27,
  //   slug: "comparison-communities",
  //   title: "Communities",
  //   level: 3,
  // },
];

export default function RibbitNew({}: Props) {
  const headingsRef = useRef(null);
  const [repoLink, setRepoLink] = useState("");
  const [demoLink, setDemoLink] = useState("");

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, [postData]);

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
        <div className="max-w-6xl font-wotfard text-lg w-full mx-auto mt-[-40px]">
          <ImageModal
            imgSrc="/images/projects/ribbit/ribbit-main-shorter.png"
            imgAlt="Ribbit homepage"
            title="Ribbit Homepage"
            description={`The homepage of Ribbit, which shows the user's main feed.`}
          />
          <h2
            id="introduction"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8"
          >
            Introduction
          </h2>
          <div className="font-wotfard text-lg">
            Welcome to the project page for Ribbit, a pixel-perfect clone of
            Reddit! This project serves as a showcase of my expertise in
            software engineering and full-stack web development, utilizing a
            tech stack comprising of Flask, SQLAlchemy, React, and Redux. Ribbit
            aims to provide users with a comprehensive social experience by
            incorporating a wide array of features, including live chat using
            socket.io, image uploads using AWS S3, and an extensive content
            submission system.
          </div>
          <div className="font-wotfard text-lg">
            <h4 id="what-is-reddit" className="text-xl font-bold mt-16 mb-8">
              What is Reddit?
            </h4>
            Reddit is a prominent social news aggregator and online community
            often referred to as 'the front page of the Internet.' With millions
            of users, it serves as a primary source of news and pop culture
            content. On Reddit, users have the freedom to create posts on a wide
            range of topics chosen by the platform's numerous communities. They
            can also engage by leaving comments, initiating conversations, and
            simply exploring the vast array of content available. A distinctive
            feature of Reddit is its voting system, where users can upvote to
            express approval or downvote to signify disapproval. These votes
            contribute to a user's 'karma,' reflecting their overall
            contributions and impact within the community.
          </div>
          <h2
            id="project-overview"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Project Overview
          </h2>
          <h3 id="about-ribbit" className="text-2xl font-bold mt-16 mb-8">
            About Ribbit
          </h3>
          Ribbit is a sophisticated web application developed to replicate the
          core functionalities of Reddit.com, specifically its desktop version.
          Although Ribbit originally began as my capstone project whilst
          attending App Academy, I have always treated it as a legitimate
          application. With over 15 features and counting, Ribbit has steadily
          grown to be the largest fullstack application I have ever built, and I
          continue to work on it to this day. Ribbit is a sophisticated web
          application that was developed to emulate the website Reddit.com, with
          a specific focus on replicating its desktop version. Initially
          conceived as my capstone project during my time at App Academy, Ribbit
          has since evolved into a full-fledged application. With a continually
          expanding list of over 15 features, Ribbit stands as the most
          extensive full-stack project in my portfolio.
          <div id="quick-facts">
            <QuickFacts
              demoLink={demoLink}
              repoLink={repoLink}
              features={features}
            />
          </div>
          <h3 id="primary-objectives" className="text-2xl font-bold mt-16 mb-8">
            Primary Objectives
          </h3>
          Although it began as an assignment, I have always treated Ribbit as a
          real application. My main goal was to, of course, build a clone of
          Reddit, both in appearance and functionality. Other than that, my
          other main concern was providing the user a stellar user experience.
          <h3 id="additional-goals" className="text-2xl font-bold mt-16 mb-8">
            Additional Goals
          </h3>
          <div className="font-wotfard text-lg mt-7">
            The primary objectives for Ribbit were as follows:
          </div>
          <ol>
            <li>
              <strong>Backend comfortability:</strong> Getting comfortable with
              working with the backend whilst building a fullstack application.
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
              <strong>User interface (UI) design:</strong> Crafting an intuitive
              and visually appealing user interface with React and Redux to
              enhance the overall user experience and ensure ease of navigation.
            </li>
            <li>
              <strong>User authentication and authorization:</strong>{" "}
              Implementing a robust user authentication system with Flask and
              JWT to ensure secure access to the application's features.
            </li>
            <li>
              <strong>Real-time features:</strong> Integrating socket.io to
              provide real-time user interactions through the live chat feature.
            </li>
            <li>
              <strong>Image uploads (AWS S3):</strong> Integrating AWS S3 for
              seamless image uploads and storage for user profiles and community
              content.
            </li>
            <li>
              <strong>SOLID:</strong> Follow SOLID principles to provide a
              codebase that is understandable, maintainable, flexible, readable,
              and testable.
            </li>
          </ol>
          <h3 id="technologies-used" className="text-2xl font-bold mt-16 mb-8">
            Technologies Used
          </h3>
          <div className="font-wotfard text-lg mt-7">
            To achieve the goals for Ribbit, a robust tech stack was chosen,
            combining the best tools and technologies available.
          </div>
          <h4
            id="technologies-used-frontend"
            className="text-xl font-bold mt-16 mb-8"
          >
            Frontend
          </h4>
          <ul className="project-ul">
            <li>
              <strong>React</strong>: Used to build the app's frontend,
              primarily for its ability to create reusable components and
              interactive and dynamic UI elements.
            </li>
            <li>
              <strong>Redux</strong>: State management on the frontend.
            </li>
            <li>
              <strong>React-Router</strong>: Utilized for client-side routing to
              ensure smooth navigation within the app without full page reloads.
            </li>
          </ul>
          <h4
            id="technologies-used-backend"
            className="text-xl font-bold mt-16 mb-8"
          >
            Backend
          </h4>
          <ul className="project-ul">
            <li>
              <strong>Flask</strong>: Used to power the app's backend. Chosen
              for its simplicity and ease of use in building RESTful APIs.
            </li>
            <li>
              <strong>SQlAlchemy</strong>: Database management.
            </li>
            <li>
              <strong>Flask-CORS</strong>: Employed for handling Cross-Origin
              Resource Sharing (CORS) to allow secure communication between the
              frontend and the backend, especially during API requests from
              different origins.
            </li>
            <li>
              <strong>Flask-Migrate</strong>: Used for database migrations,
              making it easier to manage database schema changes over time.
            </li>
            <li>
              <strong>Flask-WTF</strong>: For handling forms on the backend,
              simplifying form validation and data processing.
            </li>
            <li>
              <strong>Flask-Login</strong>: User session management and
              authentication.
            </li>
            <li>
              <strong>Flask-SocketIO</strong>: For real-time communication
              between users.
            </li>
            <li>
              <strong>Alembic</strong>: Used as the database migration tool,
              providing version control for database schema changes.
            </li>
          </ul>
          <h4 id="tools-and-packages" className="text-xl font-bold mt-16 mb-8">
            Tools and Packages
          </h4>
          <ul className="project-ul">
            <li>
              <strong>Moment.js</strong>: used for parsing and formatting dates
              and times.
            </li>
            <li>
              <strong>React-quill</strong>: Utilized for creating the rich text
              editor, which is available for formatting posts.
            </li>
            <li>
              <strong>react-lazyload</strong>
            </li>
            <li>
              <strong>html-react-parser</strong>
            </li>
            <li>
              <strong>validator</strong>
            </li>
            <li>
              <strong>giphy/js-fetch-api (Giphy API)</strong>
            </li>
          </ul>
          <h4 id="icon-sources" className="text-xl font-bold mt-16 mb-8">
            Icon Sources
          </h4>
          <ul className="project-ul">
            <li>
              <a
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
                className="text-pink-500"
              >
                react-icons
              </a>
              : The primary resource for icons, as it is a collection of
              multiple icon packages in one convenient location. It should be
              noted that icons from Font Awesome are included in this package,
              which is why it isn't listed separately.
            </li>
            <li>
              <a href="https://www.thenounproject.com" target="_blank">
                The Noun Project
              </a>
              : Although icons from this source have to be imported as images,
              there are a lot of options, and if I can't find what I'm looking
              for on react-icons, TNP is likely to have something similar
              enough.
            </li>
            <li>
              <strong>Additional resources:</strong> The following aren't used
              as often as my above choices, but are listed here because I have
              used an icon or two from each, and exist as an option should I
              need it:
              <ul>
                <li>
                  <a href="https://icons.getbootstrap.com/" target="_blank">
                    Bootstrap Icons
                  </a>
                </li>
                <li>
                  <a href="https://fonts.google.com/icons" target="_blank">
                    Google Icons
                  </a>
                </li>
                <li>
                  <a
                    href="https://primer.style/design/foundations/icons"
                    target="_blank"
                  >
                    Octicons
                  </a>
                </li>
                <li>
                  <a
                    href="https://zavoloklom.github.io/material-design-iconic-font/icons.html"
                    target="_blank"
                  >
                    Material UI
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <h2
            id="code-logic-architecture"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Code Logic & Architecture
          </h2>
          <h3 id="folder-structure" className="text-2xl font-bold mb-8 mt-16">
            Folder Structure
          </h3>
          <div className="font-wotfard text-lg mb-4">
            This is Ribbit’s folder structure. While we discuss the architecture
            of this application, we’re also going to look at the Community
            feature (specifically retrieving all communities from the database,
            and creating a new community) as an example, so that you can see how
            a feature fits in with each folder.
          </div>
          <SyntaxHighlighter language="python" style={nightOwl}>
            {code1}
          </SyntaxHighlighter>
          <h4 id="backend" className="text-xl font-bold mt-16 mb-8">
            Backend
          </h4>
          <div className="font-woftard text-lg mt-7">
            <ul className="project-ul">
              <li>
                <code>/app</code> - contains all of the backend for Ribbit.
                <ul>
                  <li>
                    <code>/app/api</code> - Ribbit's endpoints, which are
                    written in Python using the{" "}
                    <span className="text-pink-500">Flask</span> framework.
                    <ul>
                      <li>
                        <strong>Ex:</strong> The endpoints for the{" "}
                        <code>communities</code> feature can be found in{" "}
                        <code>/app/api/community_routes.py</code>. Here are the
                        endpoints for retrieving all communities and creating a
                        new community:
                        <SyntaxHighlighter language="python" style={nightOwl}>
                          {`from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Community, User
from .auth_routes import validation_errors_to_error_messages
from app.forms import CommunityForm

community_routes = Blueprint("communities", __name__)

# GET ALL COMMUNITIES
@community_routes.route("")
def get_communities():
    """
    Query to get all communities
    """
    communities = Community.query.all()
    return {"Communities": [community.to_dict() for community in communities]}

# CREATE A COMMUNITY
@community_routes.route("", methods=["POST"])
@login_required
def create_community():
    """
    Query for creating a community
    """
    form = CommunityForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = form.data

        new_community = Community(
            name=data["name"],
            description=data["description"],
            display_name=data["name"],
            user_id = current_user.get_id(),
        )

        user = User.query.get(current_user.get_id())
        user.user_subscriptions.append(new_community)

				db.session.add(new_community)
        db.session.commit()

        return new_community.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 400`}
                        </SyntaxHighlighter>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <code>/app/forms</code> - Form classes created using{" "}
                    <span className="text-pink-500">WTForms</span> for handling
                    validation rules.
                    <ul>
                      <li>
                        <strong>Ex:</strong> Community forms are located in{" "}
                        <code>/app/forms/community_forms.py</code>. Shown here
                        is the class for the form for creating a new community:
                        <SyntaxHighlighter language="python" style={nightOwl}>
                          {`from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length, ValidationError
from app.models import Community

def community_exists(field):
    # Checking if community name is already in use
    name = field.data
    community = Community.query.filter(Community.name == name).first()
    if community:
        raise ValidationError('That name is already taken.')

class CommunityForm(FlaskForm):
    name = StringField(
        "Name",
        validators=[
            DataRequired(),
            community_exists
        ]
    )
    description = TextAreaField(
        "Description",
        validators=[
            Length(
                max=300,
                message="Keep descriptions under 300 characters please."
            )
        ]
    )
    display_name = StringField(
        "DisplayName"
    )
    submit=SubmitField("Submit")`}
                        </SyntaxHighlighter>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
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
          <ImageModal
            imgSrc="/images/projects/ribbit/ribbit-userprofile.png"
            imgAlt="Ribbit - User Profile"
            title="Ribbit: User Profile"
            description="The current user's profile, which includes buttons for changing the user's image and banner, and redirecting to the Settings page, as well as the Followers section, which opens the Followers list when clicked."
          />
          <div className="font-wotfard text-lg mt-7">
            Users who wish to briefly visit Ribbit for the purposes of demoing
            the application can use the demo login feature, offered as a button
            at the top of the "Log In" window.
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
          <div className="font-wotfard text-lg mt-7">
            Referred to as 'subreddits' on Reddit, users have the ability to
            create new communities dedicated to specific topics or interests.
            Community creators can define rules and guidelines for their
            respective communities, ensuring a safe and respectful environment
            for all members. They can also customize community information (such
            as the community's image and 'About' section), and have the power to
            delete the community.
          </div>
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
            posts, and users based on keywords and relevant criteria. The search
            feature enhances content discoverability and user satisfaction.
          </div>
          <h3 id="favorite-users" className="text-2xl font-bold mb-8 mt-16">
            Favorite Users
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can mark followed users as favorites, making it easier to
            access their content. The favorite users feature streamlines the
            process of following specific users and viewing their contributions.
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
            access to their preferred content. Favorite communities enhance the
            user experience by allowing quick navigation to frequently visited
            communities.
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
