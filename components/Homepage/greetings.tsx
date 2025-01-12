import React from "react";
import Image from "next/image";
import Avatar from "public/images/avatar2.png";
import EnterAnimation from "./enter-animation";

export default function Greetings() {
  return (
    <section
      className="lg:max-w-6xl mx-auto px-6 lg:px-12 flex flex-col py-20"
      id="about"
    >
      <Image
        data-aos="zoom-in"
        data-aos-duration={400}
        data-aos-delay={400}
        data-aos-once="true"
        className="w-96 mx-auto float-right mb-10 md:mb-14"
        src={Avatar}
        alt="Cartoon girl sitting with laptop and cat"
      />
      <h2
        data-aos="fade-up"
        data-aos-delay={600}
        data-aos-once="true"
        className="font-bold leading-10 md:leading-20 text-slate-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 dark:text-gray-50 mb-4 md:mb-8 text-4xl md:text-5xl"
      >
        Hello! I'm <span className="text-pink-500">Sara Dunlop</span>.
      </h2>
      <div className="font-wotfard text-slate-900 text-lg font-medium leading-8 font-wotfard dark:text-gray-50 mb-16">
        <p data-aos="fade-up" data-aos-delay={800}>
          Welcome to my little corner of the internet!
        </p>

        <p className="mt-4" data-aos="fade-up" data-aos-delay={1000}>
          I’m a passionate{" "}
          <span className="text-pink-500">full-stack software engineer</span>{" "}
          based in <span className="text-pink-500">California</span>, and I’m
          excited to share my passion for technology with you. You can often
          find me at my computer, immersed in projects that{" "}
          <span className="text-pink-500">challenge</span> and{" "}
          <span className="text-pink-500">inspire</span> me. When I’m not
          coding, you might find me diving into my favorite video games or
          writing for fun.
        </p>
        <p className="mt-4" data-aos="fade-up" data-aos-delay={1200}>
          Driven by an insatiable curiosity and a commitment to teamwork, I’m
          ready to make a significant impact in the industry. If you’re looking
          for a dedicated engineer to join your team,{" "}
          <a
            href="#contact"
            className="connect text-indigo-400 hover:underline"
          >
            let's connect!
          </a>
        </p>
        <a
          href="https://drive.google.com/file/d/1Nz41Llc9eWQOKT35Wfsi9_6_NEdHQwo3/view?usp=sharing"
          target="_blank"
          className="resume-link"
          data-aos="zoom-in"
          data-aos-delay={400}
        >
          <div className="resume-btn dark:hover:bg-indigo-600 dark:bg-indigo-500 rounded-full border border-2 text-base border-transparent px-4 py-1 hover:bg-indigo-500 bg-indigo-600 font-wotfard transition text-gray-50 mt-6 cursor-pointer w-fit leading-8 hover:animate-bounce-once">
            Download resume
          </div>
        </a>
      </div>
    </section>
  );
}
