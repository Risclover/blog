import VideoPlayer from "@/components/VideoPlayer/videoplayer";
import ImageModal from "@/components/imagemodal";
import Layout from "@/components/layout";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import Head from "next/head";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

type Props = {};

function Airbnbeezy({}: Props) {
  const [showFeatures, setShowFeatures] = useState(false);
  const headingsRef = useRef(null);
  const [linkName, setLinkName] = useState("");
  const [secondLinkName, setSecondLinkName] = useState("");

  const onResize = () => {
    const width = window.innerWidth;

    if (width < 600) {
      setLinkName("Link");
      setSecondLinkName("Link");
    } else {
      setLinkName("https://air-bnbeezy.herokuapp.com");
      setSecondLinkName("https://www.github.com/Risclover/airbnbeezy");
    }
  };

  useLayoutEffect(() => {
    onResize();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
    title: "Airbnbeezy",
    subtitle: "An Airbnb clone with a focus on UI.",
  };

  const fileContent = [
    { id: 1, slug: "introduction", title: "Introduction", level: 2 },
    { id: 2, slug: "project-goals", title: "Project Goals", level: 2 },
    { id: 3, slug: "tech-stack", title: "Tech Stack", level: 2 },
    { id: 4, slug: "features", title: "Features", level: 2 },
    { id: 5, slug: "users", title: "Users", level: 3 },
    { id: 6, slug: "property-listings", title: "Property Listings", level: 3 },
    {
      id: 7,
      slug: "interactive-maps",
      title: "Interactive Maps",
      level: 3,
    },
    { id: 8, slug: "booking-process", title: "Booking Process", level: 3 },
    { id: 9, slug: "image-uploads", title: "Image Uploads", level: 3 },
    { id: 10, slug: "user-reviews", title: "User Reviews", level: 3 },
    { id: 11, slug: "challenges-faced", title: "Challenges Faced", level: 2 },
    { id: 12, slug: "lessons-learned", title: "Lessons Learned", level: 2 },
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
            Airbnbeezy is a remarkable web application that mirrors the core
            functionalities of Airbnb, a prominent online marketplace for
            lodging and travel experiences. Crafted meticulously by a solo
            developer (myself), this project encompasses a testament to my
            expertise in software engineering and full-stack web development.
          </div>
          <ImageModal
            imgSrc="/images/projects/airbnbeezy/airbnbeezy-home.png"
            imgAlt="Airbnbeezy: Home"
            title="Airbnbeezy: Home"
            description="Homepage of Airbnbeezy"
          />
          <div className="font-wotfard text-lg">
            {" "}
            By leveraging a tech stack comprising React, Redux, Express, and
            Sequelize, Airbnbeezy brings to life a platform that enables users
            to discover accommodations, make bookings, leave reviews, and enjoy
            a seamless travel planning experience. The integration of AWS S3 for
            image uploads, Google Maps API for location services, and user
            authentication further elevates the application's utility and
            user-friendliness.
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
                  <strong>Project title:</strong> Airbnbeezy
                </li>
                <li>
                  <strong>Description:</strong> An Airbnb clone with a focus on
                  UI.
                </li>
                <li>
                  <strong>Tech stack:</strong> React, Redux, Express, and
                  Sequelize
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
                      <li>Listings</li>
                      <li>Bookings</li>
                      <li>Reviews</li>
                      <li>Image uploads</li>
                      <li>Interactive maps (Google Maps API)</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <strong>Github Repo:</strong>{" "}
                  <a
                    href="https://www.github.com/Risclover/airbnbeezy"
                    target="_blank"
                    className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
                  >
                    {secondLinkName}
                  </a>
                </li>
                <li>
                  <strong>Live demo:</strong>{" "}
                  <a
                    href="https://air-bnbeezy.herokuapp.com"
                    target="_blank"
                    className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
                  >
                    {linkName}
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
            The primary objectives that steered the development of Airbnbeezy
            are outlined below:
          </div>
          <ol>
            <li>
              <strong>Functionality replication:</strong> The foremost goal was
              to replicate Airbnb's core features, enabling users to search for
              accommodations, view detailed listings, make bookings, and post
              reviews.
            </li>
            <li>
              <strong>Database design:</strong> The design and implementation of
              a robust and efficient database schema using Sequelize aimed to
              ensure optimal storage and retrieval of user, property, booking,
              and review data. The very first version of this schema is shown
              below.
            </li>
            <ImageModal
              imgSrc="/images/projects/airbnbeezy/airbnbeezy-schema.png"
              imgAlt="Airbnbeezy database schema"
              title="Airbnbeezy: Database schema (v. 1)"
              description="A very early version of the database schema design"
            />
            <li>
              <strong>User-centric UI design:</strong> The user interface (UI)
              design focused on creating an intuitive, visually pleasing, and
              responsive layout to provide a delightful user experience.
            </li>
            <li>
              <strong>Secure user authentication:</strong> Implementing a secure
              user authentication and authorization system to safeguard user
              data and provide controlled access to application features.
            </li>
            <li>
              <strong>Seamless image uploads (AWS S3):</strong> The integration
              of AWS S3 for image uploads guarantees a smooth process of
              uploading, storing, and displaying property images.
            </li>
            <li>
              <strong>Streamlined booking process:</strong> Developing a
              simplified and efficient booking process for users to easily
              select dates, make payments, and receive booking confirmations.
            </li>
            <li>
              <strong>Empowering user reviews:</strong> Enabling users to leave
              reviews for properties, fostering transparency and aiding other
              users in making informed decisions.
            </li>
            <li>
              <strong>Location services (Google Maps API):</strong> Leveraging
              the Google Maps API to provide accurate property locations and
              assist users in understanding the surrounding area.
            </li>
          </ol>
          <h2
            id="tech-stack"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Tech Stack
          </h2>
          <div className="font-wotfard text-lg mt-7">
            The technological choices underpinning Airbnbeezy's development are
            a testament to creating a robust and efficient application:
          </div>
          <ul className="project-ul">
            <li>
              <strong>Frontend:</strong> Utilizing{" "}
              <span className="text-pink-500">React.js</span> and{" "}
              <span className="text-pink-500">Redux</span> for state management
              ensured a dynamic and responsive user interface.
            </li>
            <li>
              <strong>Backend:</strong>{" "}
              <span className="text-pink-500">Express</span>, a minimalist
              Node.js web application framework, facilitated routing, server
              setup, and API development.
            </li>
            <li>
              <strong>Database:</strong>{" "}
              <span className="text-pink-500">Sequelize</span>, a promise-based
              Node.js ORM, enabled interactions with the MySQL database,
              ensuring data integrity and efficiency.
            </li>
            <li>
              <strong>User authentication:</strong>{" "}
              <span className="text-pink-500">JSON Web Tokens (JWT)</span> were
              employed to secure user authentication and manage user sessions.
            </li>
            <li>
              <strong>Image uploads (AWS S3):</strong> The integration with{" "}
              <span className="text-pink-500">AWS S3</span> allowed for
              efficient and secure storage of property images.
            </li>
            <li>
              <strong>Location services (Google Maps API):</strong> Integration
              with the <span className="text-pink-500">Google Maps API</span>{" "}
              provided accurate and interactive property locations.
            </li>
            <li>
              <strong>Version control:</strong>{" "}
              <span className="text-pink-500">Git</span> and{" "}
              <span className="text-pink-500">Github</span> for efficient
              version control and code management.
            </li>
          </ul>
          <ImageModal
            imgSrc="/images/projects/airbnbeezy/airbnbeezy-edit-listing.png"
            imgAlt="Airbnbeezy edit listing page"
            title="Airbnbeezy: Edit Listing Page"
            description="Users who post listings can edit the listing details from this page."
          />
          {/* FEATURES */}
          <h2
            id="features"
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-8 mt-16"
          >
            Features
          </h2>
          <div className="font-woftard text-lg mt-7">
            Airbnbeezy is a feature-rich application designed to offer an
            immersive and convenient travel planning experience:
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
          <h3 id="property-listings" className="text-2xl font-bold mb-8 mt-16">
            Property Listings
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Properties are displayed with detailed information, images, pricing,
            and availability calendars. Users have the ability to post their own
            listings with full customization, including images.
          </div>
          <ImageModal
            imgSrc="/images/projects/airbnbeezy/airbnbeezy-listing.png"
            imgAlt="Airbnbeezy listing page"
            title="Airbnbeezy: Listing Page"
            description="An example of one of the many listing pages on Airbnbeezy"
          />
          <h3 id="interactive-maps" className="text-2xl font-bold mb-8 mt-16">
            Interactive Maps (Google Maps API)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Property locations are displayed on interactive maps, enabling users
            to see what the surrounding area is like, and to use the map to
            explore the neighborhood.
          </div>
          <ImageModal
            imgSrc="/images/projects/airbnbeezy/airbnbeezy-map.png"
            imgAlt="Airbnbeezy map"
            title="Airbnbeezy: Interactive Map"
            description="Each listing page on Airbnbeezy has an interactive map, courtesy of Google Maps API."
          />
          <h3 id="booking-process" className="text-2xl font-bold mb-8 mt-16">
            Booking Process
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Users can select available dates and receive booking confirmations.
            Extensive validation ensures that only valid and available dates are
            selected by users. Users can view and manage past and current
            bookings.
          </div>
          <ImageModal
            imgSrc="/images/projects/airbnbeezy/airbnbeezy-reserve.png"
            imgAlt="Airbnbeezy: Reservation"
            title="Airbnbeezy: Reservation Form"
            description="The form to make a reservation on a listing on Airbnbeezy's listings pages"
          />
          <h3 id="image-uploads" className="text-2xl font-bold mb-8 mt-16">
            Image Uploads (AWS S3)
          </h3>
          <div className="font-wotfard text-lg mt-7">
            Property owners can upload images of their listings, enhancing the
            visual appeal and attractiveness of properties. All users can upload
            a profile image, personalizing their profile for other users to see.
          </div>
          <h3 id="user-reviews" className="text-2xl font-bold mb-8 mt-16">
            User Reviews
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
            The journey of building Airbnbeezy was accompanied by several
            challenges, each fostering learning and growth:
          </div>
          <ol>
            <li>
              <strong>Integration of external APIs:</strong> Incorporating the
              Google Maps API to accurately display property locations required
              understanding its usage and ensuring seamless integration.
            </li>
            <li>
              <strong>Complex booking logic:</strong> Developing the booking
              process involved managing available dates, user selections, and
              real-time updates while maintaining data consistency.
            </li>
            <li>
              <strong>Image uploads with AWS S3:</strong> Properly configuring
              AWS S3 for secure image uploads and handling user-generated
              content was crucial.
            </li>
            <li>
              <strong>Database relationships:</strong> Establishing
              relationships between users, properties, bookings, and reviews in
              Sequelize demanded careful schema design and understanding of
              associations.
            </li>
            <li>
              <strong>Advanced styling:</strong> Several components required
              advanced knowledge
            </li>
          </ol>
          <ImageModal
            imgSrc="/images/projects/airbnbeezy/airbnbeezy-manage-listings.png"
            imgAlt="Airbnbeezy manage listings page"
            title="Airbnbeezy: Manage Listings"
            description="Users can view their listings on this listings management page."
          />
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
        </div>
      </div>
    </Layout>
  );
}

export default Airbnbeezy;
