import Link from "next/link";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "Ribbit",
      hero_img: "/images/ribbit-screen-full.png",
      tech_stack: "React, Redux, Flask, flask-sqlalchemy",
      description:
        "A feature-rich pixel-perfect clone of the social media site Reddit.com",
      url: "/projects/ribbit",
      img_alt: "Ribbit (Reddit clone)",
    },
    {
      name: "Airbnbeezy",
      hero_img: "/images/airbnbeezy-screen.jpg",
      tech_stack: "React, Redux, Express, Sequelize",
      description: "An Airbnb clone with a focus on UI.",
      url: "/projects/airbnbeezy",
      img_alt: "Airbnbeezy (Airbnb clone)",
    },
    {
      name: "Reduncrate",
      hero_img: "/images/reduncrate-screen.png",
      tech_stack: "React, Redux, Flask, flask-sqlalchemy",
      description:
        "A replication of the ecommerce site Uncrate.com created as a collaboration from a small team of engineers.",
      url: "/projects/reduncrate",
      img_alt: "Reduncrate (Uncrate clone)",
    },
  ];

  return (
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
          Click on a project to go to its Project Details page, where you can
          find all of its available information (including links to code
          repositories and live demos).
        </div>
        <div data-aos="fade-up" data-aos-delay={400} className="projects">
          {projects.map((project, i) => (
            <Link className="group hover:no-underline" href={`${project.url}`}>
              <div
                className="hover:no-underline w-full flex flex-col"
                data-aos="fade-up"
              >
                <div className="project rounded group w-full overflow-hidden cursor-pointer group-hover:scale-105 transition duration-500">
                  <img
                    src={project.hero_img}
                    className="rounded"
                    alt={project.img_alt}
                  />
                </div>
                <div className="text-2xl font-wotfard font-bold mt-6 mb-4 dark:text-[#a5b4fc] text-[#4f4ef5]">
                  {project.name}
                </div>
                <div className="text-lg font-wotfard dark:text-[#ffffff]">
                  {project.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
