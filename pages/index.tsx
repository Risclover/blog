import Layout from "@/components/layout";
import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Avatar from "../public/images/avatar2.png";
import Image from "next/image";
import ComparisonSlider from "@/components/comparisonslider";
import topImage from "../public/images/ribbit-screen.png";
import bottomImage from "../public/images/reddit-screen.png";
import Nav from "@/components/nav";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Contact from "@/components/Homepage/contact";

type Props = {};

const Blog = (props: Props) => {
  const projects = [
    {
      name: "Ribbit",
      hero_img: "/images/ribbit-screen-full.png",
      tech_stack: "React, Redux, Flask, flask-sqlalchemy",
      description:
        "A feature-rich pixel-perfect clone of the social media site Reddit.com",
      url: "/projects/ribbit",
    },
    {
      name: "Airbnbeezy",
      hero_img: "/images/airbnbeezy-screen.jpg",
      tech_stack: "React, Redux, Express, Sequelize",
      description: "An Airbnb clone with a focus on UI.",
      url: "/projects/airbnbeezy",
    },
    {
      name: "Reduncrate",
      hero_img: "/images/reduncrate-screen.png",
      tech_stack: "React, Redux, Flask, flask-sqlalchemy",
      description: "A perfect copy of Uncrate.com",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 800, disable: window.innerWidth < 768 });
  }, []);

  return (
    <Layout home>
      <div
        className="frontpage dark:text-gray-50 font-sans flex flex-col min-h-screen h-full w-full m-auto"
        id="about"
      >
        <section className="lg:max-w-6xl mx-auto px-6 lg:px-12 flex flex-col py-20">
          <Image
            data-aos="zoom-in"
            data-aos-duration={400}
            data-aos-delay={400}
            width={384}
            height={226}
            className="w-96 mx-auto float-right mb-10 md:mb-14"
            src="/images/avatar2.png"
            alt="Cartoon girl sitting with laptop and cat"
          />
          <h2
            data-aos="fade-up"
            data-aos-delay={600}
            className="font-bold leading-10 md:leading-20 text-slate-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 dark:text-gray-50 mb-4 md:mb-8 text-4xl md:text-5xl"
          >
            Hello! I'm <span className="text-pink-500">Sara Dunlop</span>.
          </h2>
          <div className="font-wotfard text-slate-900 text-lg font-medium leading-8 font-wotfard dark:text-gray-50 mb-16">
            <p data-aos="fade-up" data-aos-delay={800}>
              I am a{" "}
              <span className="text-pink-500">fullstack software engineer</span>{" "}
              from California, USA. Welcome to my little corner of the internet!
            </p>

            <p className="mt-4" data-aos="fade-up" data-aos-delay={1000}>
              I have three main passions in life: writing, gaming, and software
              engineering, the latter being my biggest by far. On any given day,
              there's a great chance that I can be found working at my computer.
              There's nothing I enjoy doing more than working on projects or
              learning new things and honing my skills. Not only do I love the
              creativity and joy I get from creating something out of virtually
              nothing, but I also think one of the greatest feelings is the
              happiness I feel when I manage to get stubbornly-broken code to
              work. I also love collaborating with other engineers and combining
              our respective skills to produce a quality product.
            </p>
            <p className="mt-4" data-aos="fade-up" data-aos-delay={1200}>
              Needless to say, I think I've found my calling.
            </p>
            <p className="mt-4" data-aos="fade-up" data-aos-delay={1400}>
              Speaking of which:{" "}
              <span className="text-pink-500 ">
                I am currently looking for work
              </span>
              ! Not only am I driven by my love for the field, but I also have a
              natural love for learning, and I know how to play well with
              others. I am ready to break into this industry at full force, so
              if you're in need of an engineer on your team,{" "}
              <a href="#contact" className="hover:underline">
                let's have a chat
              </a>
              !
            </p>
            <a
              href="https://drive.google.com/file/d/1Nz41Llc9eWQOKT35Wfsi9_6_NEdHQwo3/view?usp=sharing"
              target="_blank"
              className="resume-link"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="resume-btn dark:bg-indigo-400 rounded-full border border-2 text-[16px] border-transparent px-4 py-1 bg-indigo-600 font-wotfard transition text-gray-50 mt-6 cursor-pointer w-fit leading-8">
                Download resume
              </div>
            </a>
          </div>
        </section>
        <div className="bg-slate-900 text-gray-50 dark:text-gray-50 w-full py-40">
          <div className="lg:max-w-6xl mx-auto px-6 lg:px-12">
            <h2
              data-aos="fade-right"
              className="text-4xl font-bold leading-8 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-8"
            >
              Toolkit
            </h2>
            <h2
              data-aos="fade-right"
              className="uppercase text-base font-medium tracking-widest text-pink-500 mt-6"
            >
              Frontend
            </h2>
            <div className="skills-row flex my-4">
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                HTML
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                CSS
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                JavaScript
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                TypeScript
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                React
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Next.js
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Redux
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                TailwindCSS
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                SASS
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Bootstrap
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                jQuery
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Jest
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Mocha
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Testing Library
              </div>
            </div>
            <h2
              data-aos="fade-right"
              className="uppercase text-base font-medium tracking-widest text-pink-500 mt-2"
            >
              Backend
            </h2>
            <div className="skills-row flex my-4">
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                JavaScript
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                TypeScript
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Python
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Flask
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Express
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                SQLAlchemy
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Sequelize
              </div>
              <div
                data-aos="flip-right"
                className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5 cursor-pointer"
              >
                Node.js
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-6xl text-slate-900 dark:text-gray-50 mx-auto px-2 sm:px-6 lg:px-12 py-20">
          <div className="w-full" id="projects">
            <h2
              data-aos="fade-up"
              className="text-4xl font-bold leading-8 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 mb-8 px-4 sm:px-0"
            >
              Projects
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              className="mt-4 text-lg font-wotfard"
            >
              Click on a project to go to its Project Details page, where you
              can find all of its available information (including links to code
              repositories and live demos).
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="projects">
              {projects.map((project, i) => (
                <Link className="hover:no-underline" href={`${project.url}`}>
                  <div
                    className="hover:no-underline w-full flex flex-col"
                    data-aos="fade-up"
                  >
                    <div className="project rounded group w-full overflow-hidden cursor-pointer">
                      <img src={project.hero_img} className="rounded" />
                    </div>
                    <div className="text-2xl font-wotfard font-bold mt-6 mb-4 dark:text-[#a5b4fc] text-[#4f4ef5]">
                      {project.name}
                    </div>
                    <div className="text-lg font-wotfard">
                      {project.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-900 text-gray-50 dark:text-gray-50 w-full">
          <div className="px-6 lg:px-12 lg:max-w-6xl mx-auto w-full py-20">
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
