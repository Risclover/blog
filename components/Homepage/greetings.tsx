import Image from "next/image";
import React from "react";
import Avatar from "../../public/images/avatar2.png";

type Props = {};

export default function Greetings({}: Props) {
  return (
    <section className="lg:max-w-6xl mx-auto px-6 lg:px-12 flex flex-col py-20">
      <Image
        data-aos="zoom-in"
        data-aos-duration={400}
        data-aos-delay={400}
        className="w-96 mx-auto float-right mb-10 md:mb-14"
        src={Avatar}
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
          Welcome to my little corner of the internet!
        </p>

        <p className="mt-4" data-aos="fade-up" data-aos-delay={1000}>
          I’m a passionate{" "}
          <span className="text-pink-500">full-stack software engineer</span>{" "}
          based in California, and I’m excited to share my passion for
          technology with you. Software engineering is more than just a
          profession for me; it’s a creative outlet where I can transform ideas
          into reality.
        </p>
        <p className="mt-4" data-aos="fade-up" data-aos-delay={1200}>
          You can often find me at my computer, immersed in projects that ✨{" "}
          <span className="text-pink-500">challenge</span> and{" "}
          <span className="text-pink-500">inspire</span> ✨ me, and when I’m not
          coding, you might find me diving into the latest games or writing
          about tech. I love working with diverse teams, combining our unique
          skills to build exceptional products. I’m always eager to learn from
          others and share my knowledge in return.
        </p>
        <p className="mt-4" data-aos="fade-up" data-aos-delay={1400}>
          I believe I’ve found my calling, and{" "}
          <span className="text-pink-500">
            I’m excited to embark on my next adventure
          </span>
          . Driven by an insatiable curiosity and a commitment to teamwork, I’m
          ready to make a significant impact in the industry. If you’re looking
          for a dedicated engineer to join your team,{" "}
          <a href="#contact" className="text-indigo-400">
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
          <div className="resume-btn dark:bg-indigo-400 rounded-full border border-2 text-[16px] border-transparent px-4 py-1 bg-indigo-600 font-wotfard transition text-gray-50 mt-6 cursor-pointer w-fit leading-8">
            Download resume
          </div>
        </a>
      </div>
    </section>
  );
}
