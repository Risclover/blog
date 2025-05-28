import React from "react";
import { Badge } from "../badge";
import Link from "next/link";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { useRouter } from "next/router";
import { GithubIcon } from "../icons/GithubIcon";
import { stopNavigationEventsPropagation } from "yet-another-react-lightbox";
import { SQLAIcon } from "../icons/SQLAIcon";
import { FlaskIcon } from "../icons/FlaskIcon";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";
import { FlaskSocketIoIcon } from "../icons/FlaskSocketIoIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { SequelizeIcon } from "../icons/SequelizeIcon";

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
              className="project rounded border border-slate-200 dark:border-slate-500 cursor-pointer shadow-md transition-transform duration-200 ease-in-out active:scale-95 transition:shadow dark:bg-slate-900 bg-opacity-70 dark:bg-opacity-30"
            >
              <div className="project-img">
                <img src={project.hero_img} />
              </div>
              <div className="project-info">
                <h3 className="project-title text-[1.5rem] font-medium flex items-center justify-between w-full">
                  <span>{project.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="transition-transform duration-200 ease-in-out hover:scale-125 active:scale-100">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.25rem"
                          height="1.25rem"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
                          />
                        </svg>
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
