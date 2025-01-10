import React, { useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ImageModal from "@/components/imagemodal";
import Layout from "@/components/layout";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import useTableOfContents from "hooks/useTableOfContents";
import QuickFacts from "@/components/quick-facts";

type Props = {};

const projectInfo = {
  title: "Reduncrate",
  description:
    "A replication of the ecommerce site Uncrate.com created as a collaboration from a small team of engineers.",
  techStack: "React, Redux, Flask, SQLAlchemy",
  features: [
    "Users",
    "Products",
    'Favorites (User\'s "Stash")',
    "Search",
    "Cart",
    "Order History'",
  ],
  repo: "https://github.com/Risclover/reduncrate",
  demo: "https://reduncrate.herokuapp.com",
};

function Reduncrate({}: Props) {
  const headingsRef = useRef(null);

  const postData = {
    category: "Projects",
    categoryUrl: "/#projects",
    title: "Reduncrate",
    subtitle:
      "A replication of the ecommerce site Uncrate.com created as a collaboration from a small team of engineers.",
  };

  const fileContent = useTableOfContents();

  return (
    <Layout postData={postData}>
      <Head>
        <title>Sara Dunlop | Reduncrate</title>
      </Head>
      <MobileTableofContents headings={fileContent} />
      <div
        ref={headingsRef}
        className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900 gap-14"
      >
        <TableofContents headings={fileContent} />
        <div className="font-wotfard text-lg w-full lg:pl-6 flex-1 min-w-0">
          <QuickFacts projectInfo={projectInfo} />
          <h2
            id="introduction"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8"
          >
            Introduction
          </h2>
          <div className="font-wotfard text-lg">
            Reduncrate stands as an impressive web application that closely
            emulates the essence of Uncrate.com, a renowned online magazine that
            curates and shares unique and noteworthy products across various
            categories. This project was brought to life through the collective
            efforts of a collaborative team comprising myself and three other
            skilled software engineers. The development involved a synergy of
            expertise in software engineering, full-stack development, and
            frontend design.
          </div>
          <div className="w-[50%] mx-auto">
            <ImageModal
              imgSrc="/images/projects/reduncrate/reduncrate-home.png"
              imgAlt="Reduncrate homepage"
              title="Reduncrate: Home"
              description="The homepage of Reduncrate"
            />
          </div>
          <div className="font-wotfard text-lg">
            Reduncrate, built using React, Redux, Flask, and SQLAlchemy,
            showcases an exceptional blend of technologies to offer users an
            immersive experience of discovering and exploring curated products.
            With a robust feature set that includes image uploads via AWS S3,
            product listings, user accounts, profiles, favorite products, cart,
            order history, and a responsive design, Reduncrate reflects the
            culmination of diverse skills and collaborative endeavors.
          </div>
          <h2
            id="project-goals"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Project Goals
          </h2>
          <div className="font-wotfard text-lg mt-7">
            The core goals that steered the development of Reduncrate
            encompassed a comprehensive replication of Uncrate.com's features
            while incorporating seamless user experience and collaboration among
            team members. The project's objectives were outlined as follows:
          </div>
          <ol>
            <li>
              <strong>Functionality replication:</strong> Reduncrate aimed to
              closely mirror Uncrate.com's features, allowing users to explore
              curated product listings, create accounts, manage profiles, and
              interact with the website's extensive range of functionalities.
            </li>
            <li>
              <strong>Database design:</strong> Implementing a robust and
              efficient database schema utilizing SQLAlchemy was crucial for
              seamless data storage and retrieval.
            </li>
            <li>
              <strong>Responsive UI/UX design:</strong> Crafting a responsive
              and visually appealing user interface design to ensure consistent
              user experiences across devices.
            </li>
            <li>
              <strong>Secure user authentication:</strong> Implementing a secure
              user authentication and authorization system to safeguard user
              data and provide controlled access to application features.
            </li>
            <li>
              <strong>Collaborative development:</strong> Collaborating with
              three other software engineers to develop different aspects of the
              application while ensuring harmonious integration.
            </li>
          </ol>
          <h2
            id="tech-stack"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Tech Stack
          </h2>
          <div className="font-wotfard text-lg mt-7">
            Reduncrate's development hinged upon a well-rounded tech stack,
            chosen to cater to diverse needs and to uphold the application's
            robustness:
          </div>
          <ul className="project-ul">
            <li>
              <strong>Frontend:</strong> Utilizing{" "}
              <span className="text-pink-500">React.js</span> and{" "}
              <span className="text-pink-500">Redux</span> for state management
              ensured dynamic, responsive, and interactive user interfaces.
            </li>
            <li>
              <strong>Backend:</strong> Employing{" "}
              <span className="text-pink-500">Flask</span>, a lightweight Python
              web framework, facilitated server setup, routing, and API
              development.
            </li>
            <li>
              <strong>Database:</strong> The integration of{" "}
              <span className="text-pink-500">SQLAlchemy</span>, a Python SQL
              toolkit, enabled efficient interactions with the MySQL database.
            </li>
            <li>
              <strong>User authentication:</strong> User authentication was
              managed using secure techniques and{" "}
              <span className="text-pink-500">JWT</span> tokens to ensure user
              data protection.
            </li>
            <li>
              <strong>Collaboration tools:</strong> Utilizing collaborative
              tools such as <span className="text-pink-500">Git</span> and{" "}
              <span className="text-pink-500">GitHub</span> ensured efficient
              code management and version control.
            </li>
          </ul>

          {/* FEATURES */}
          <h2
            id="features"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Features
          </h2>
          <div className="font-woftard text-lg mt-7">
            My team and I carefully selected features that would help Reduncrate
            feel like Uncrate as much as possible whilst also providing as much
            value as possible:
          </div>
          <h3 id="users" className="text-2xl font-bold mb-8 mt-16">
            Users
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can register new accounts and log in to access personalized
            features and bookings. Registered users have profiles displaying
            their bookings, reviews, and account information. Secure
            authentication ensures user data protection and controlled access to
            features.
          </div>
          <h3 id="product-listings" className="text-2xl font-bold mb-8 mt-16">
            Product Listings
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Properties are displayed with detailed information, images, pricing,
            and availability calendars. Users have the ability to post their own
            listings with full customization, including images.
          </div>
          <h3 id="favorites" className="text-2xl font-bold mb-8 mt-16">
            Favorites (User's Stash)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Property locations are displayed on interactive maps, enabling users
            to see what the surrounding area is like, and to use the map to
            explore the neighborhood.
          </div>
          <ImageModal
            imgSrc="/images/projects/reduncrate/reduncrate-stash.png"
            imgAlt="Reduncrate's favorites page, or the user's stash"
            title="Reduncrate: User Stash"
            description="The user's stash, which is their customized list of favorite products."
          />
          <h3 id="search" className="text-2xl font-bold mb-8 mt-16">
            Search
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can select available dates and receive booking confirmations.
            Extensive validation ensures that only valid and available dates are
            selected by users. Users can view and manage past and current
            bookings.
          </div>
          <h3 id="cart" className="text-2xl font-bold mb-8 mt-16">
            Cart
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Property owners can upload images of their listings, enhancing the
            visual appeal and attractiveness of properties. All users can upload
            a profile image, personalizing their profile for other users to see.
          </div>
          <div className="mx-auto w-[70%]">
            <ImageModal
              imgSrc="/images/projects/reduncrate/reduncrate-cart.png"
              imgAlt="Reduncrate's cart"
              title="Reduncrate: Cart"
              description="Reduncrate's shopping cart"
            />
          </div>
          <h3 id="order-history" className="text-2xl font-bold mb-8 mt-16">
            Order History
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can leave reviews for properties they have booked, offering
            valuable insights to future travelers.
          </div>
          <h2
            id="challenges-faced"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8"
          >
            Challenges Faced
          </h2>
          <div className="">
            Developing Reduncrate as a collaborative project presented various
            challenges, each contributing to the learning and growth of the
            team:
          </div>
          <ul className="project-ul">
            <li>
              <strong>Collaboration dynamics:</strong> Collaborating with
              multiple team members required effective communication and
              coordination to integrate frontend and backend seamlessly.
            </li>
            <li>
              <strong>Complex UI components:</strong> Designing and implementing
              the complex image carousel and "suggested products" section
              demanded a deep understanding of frontend technologies and user
              interaction.
            </li>
            <li>
              <strong>Responsive design:</strong> Crafting a responsive design
              that provided consistent experiences across devices necessitated
              careful design considerations.
            </li>
          </ul>
          <ImageModal
            imgSrc="/images/projects/reduncrate/reduncrate-carousel.gif"
            imgAlt="Reduncrate's product image carousel"
            title="Reduncrate: Product Image Carousel"
            description="The carousel on the Product page. Includes all ways to interact, including mouse click, mouse drag, touch, and keyboard."
          />
          <h2
            id="my-role"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8"
          >
            My Role: Project Accomplishments
          </h2>
          <div>
            As a core contributor to Reduncrate's development, my primary focus
            was on the frontend aspect, where I played a pivotal role in shaping
            the user interface and enhancing user experience. Here are the key
            areas where I made substantial contributions:
          </div>
          <ol>
            <li>
              <strong>Single product page:</strong> I took charge of designing
              and implementing the intricate user interface for the single
              product page. This included crafting a complex image carousel that
              not only seamlessly showcased multiple product images, but also
              allowed full interactivity including through mouse click, mouse
              drag, touch, and keyboard. The carousel enabled users to explore a
              product's various angles and appearance variations (i.e. color).
              <div className="mx-auto w-[50%]">
                <ImageModal
                  imgSrc="/images/projects/reduncrate/reduncrate-product.png"
                  imgAlt="Reduncrate's single product page"
                  title="Reduncrate: Single Product Page"
                  description="Reduncrate's product page"
                />
              </div>
            </li>
            <li>
              <strong>Suggested products section:</strong> To enhance user
              engagement, I replicated Uncrate's "suggested products" section
              which dynamically shuffled and presented related products upon
              page reload. This feature aimed to encourage users to explore
              more.
            </li>
            <li>
              <strong>Responsive design:</strong> Ensuring a consistent and
              visually appealing experience across devices was a significant
              endeavor. I meticulously designed the frontend to be resposnive,
              adapting to different screen sizes and orientations without
              comporomising functionality or aesthetics.
            </li>
            <li>
              <strong>CSS-complex footer:</strong> I implemented Uncrate's
              intricate footer, which added a touch of sophistication to the
              overall user interface. By thoughtfully incorporating my own take
              on the footer to best fit our site, the footer contributed to the
              website's visual appeal.
              <ImageModal
                imgSrc="/images/projects/reduncrate/reduncrate-footer.png"
                imgAlt="Reduncrate's footer"
                title="Reduncrate: Footer"
                description="Reduncrate's footer"
              />
            </li>
            <li>
              <strong>Search feature</strong>: Although most of my contribution
              to this project was on the frontend, I took charge of both the
              frontend and backend development of the search feature. This
              allowed users to explore products based on names and description
              keywords, enhancing their ability to discover items of interest.
            </li>
          </ol>
          <h2
            id="lessons-learned"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mt-16 mb-8"
          >
            Lessons Learned
          </h2>
          <div>
            The development of Reduncrate paved the way for invaluable insights
            and takeaways:
          </div>
          <ul className="project-ul">
            <li>
              <strong>Collaborative synergy:</strong> Effective collaboration
              across diverse roles is essential for the successful integration
              of various application components.
            </li>
            <li>
              <strong>Frontend design mastery:</strong> Designing complex UI
              components and ensuring a responsive design underscores the
              importance of mastering frontend technologies.
            </li>
            <li>
              <strong>User-centric development:</strong> Incorporating features
              like favorite products, cart, and order history enhances user
              experiences and engagement.
            </li>
            <li>
              <strong>Project management skills:</strong> Utilizing
              collaborative tools like Git and GitHub streamlines code
              management and ensures version control.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Reduncrate;
