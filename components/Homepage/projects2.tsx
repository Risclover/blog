import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Badge } from "../badge";
import {
  GithubIcon,
  SQLAIcon,
  FlaskIcon,
  TypeScriptIcon,
  FlaskSocketIoIcon,
  ExpressIcon,
  SequelizeIcon,
  ExternalLinkIcon,
  ReactIcon,
  ReduxIcon,
} from "@/components/icons";

type Props = {};

export function Projects2({}: Props) {
  const router = useRouter();
  const projects = [
    {
      name: "Ribbit",
      hero_img: "/images/ribbit-screen-full.png",
      github_url: "https://github.com/Risclover/ribbit",
      tech_stack: (
        <div className="flex gap-2 flex-wrap">
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
      live_url: "https://ribbit-app.herokuapp.com",
      description:
        "This is Ribbit, a fullstack, pixel-perfect clone of Reddit.com. With over 15 features, an intuitive interactive interface, and beautifully-written code, Ribbit thrives as one of the best Reddit clones on the Internet.",
      url: "/projects/ribbit2",
      img_alt: "Ribbit (Reddit clone)",
    },
    {
      name: "Reduncrate",
      hero_img: "/images/reduncrate-screen.png",
      live_url: "https://reduncrate.herokuapp.com",
      github_url: "https://github.com/Risclover/reduncrate",
      tech_stack: (
        <div className="flex gap-2 flex-wrap">
          <Badge
            svg={<ReactIcon />}
            color="text-[#1a92b3]"
            bgColor="bg-[#1a92b3]"
            darkColor="dark:text-[#61DAFB]"
            darkBgColor="dark:bg-[#61DAFB]"
            title="React"
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
        </div>
      ),
      description:
        "Reduncrate is a replication of Uncrate.com, a renowned online magazine geared towards primarily men that curates and shares unique and noteworthy products across various categories.",
      url: "/projects/reduncrate",
      img_alt: "Reduncrate (Uncrate clone)",
    },
    {
      name: "Airbnbeezy",
      hero_img: "/images/airbnbeezy-screen.jpg",
      live_url: "https://air-bnbeezy.herokuapp.com",
      github_url: "https://github.com/Risclover/airbnbeezy",
      tech_stack: (
        <div className="flex gap-2 flex-wrap">
          <Badge
            svg={<ReactIcon />}
            color="text-[#1a92b3]"
            bgColor="bg-[#1a92b3]"
            darkColor="dark:text-[#61DAFB]"
            darkBgColor="dark:bg-[#61DAFB]"
            title="React"
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
            svg={<ExpressIcon />}
            title="Express"
            color="text-green-700"
            bgColor="bg-green-700"
            darkColor="dark:text-green-400"
            darkBgColor="dark:bg-green-400"
          />
          <Badge
            svg={<SequelizeIcon />}
            title="Sequelize"
            bgColor="bg-blue-500"
            color="text-blue-500"
            darkColor="dark:text-blue-400"
            darkBgColor="dark:bg-blue-400"
          />
        </div>
      ),
      description:
        "Airbnbeezy is a web application that mirrors the core functionalities of Airbnb, a prominent online marketplace for lodging and travel experiences.",
      url: "/projects/airbnbeezy",
      img_alt: "Airbnbeezy (Airbnb clone)",
    },
  ];
  return (
    <div className="lg:max-w-6xl text-slate-900 dark:text-gray-50 mx-auto px-2 px-6 lg:px-12 py-20">
      <div className="w-full" id="projects">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold leading-8 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 mb-8"
        >
          Featured Projects
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
        <div
          data-aos="fade-up"
          data-aos-delay={400}
          className="projects flex-wrap"
        >
          {projects.map((project) => (
            <div
              onClick={() => router.push(project.url)}
              onKeyDown={(e) => {
                if (e.key === "Enter") router.push(project.url);
              }}
              tabIndex={0}
              className="project rounded border border-slate-200 dark:border-slate-500 cursor-pointer shadow-md transition-transform duration-200 ease-in-out transition:shadow dark:bg-slate-900 bg-opacity-70 dark:bg-opacity-30"
            >
              <div className="project-img">
                <img src={project.hero_img} />
              </div>
              <div className="project-info">
                <h3 className="project-title text-[1.5rem] font-medium flex items-center justify-between w-full">
                  <span>{project.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="transition-transform duration-200 ease-in-out hover:scale-125 active:scale-90">
                      <Link
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon />
                      </Link>
                    </div>
                    <div className="transition-transform duration-200 ease-in-out hover:scale-125 active:scale-100">
                      <Link
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <ExternalLinkIcon />
                      </Link>
                    </div>
                  </div>
                </h3>
                <div className="project-stack py-2 flex wrap">
                  {project.tech_stack}
                </div>
                <hr className="h-px bg-slate-200 border-0 dark:bg-slate-500" />
                <div className="project-description mt-2 md:text-[1rem] text-[0.9rem]">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
