import Image from "next/image";
import React from "react";

type Props = {};

export default function Greetings({}: Props) {
  return (
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
          <span className="text-pink-500"> fullstack software engineer</span>{" "}
          from California. Welcome to my little corner of the internet!
        </p>

        <p className="mt-4" data-aos="fade-up" data-aos-delay={1000}>
          I have three main passions in life: writing, gaming, and software
          engineering, the latter being my biggest by far. On any given day,
          there's a great chance that I can be found working at my computer.
          There's nothing I enjoy doing more than working on projects or
          learning new things and honing my skills. Not only do I love the
          creativity and joy I get from creating something out of virtually
          nothing, but I also think one of the greatest feelings is the
          happiness I feel when I manage to get stubbornly-broken code to work.
          I also love collaborating with other engineers and combining our
          respective skills to produce a quality product.
        </p>
        <p className="mt-4" data-aos="fade-up" data-aos-delay={1200}>
          Needless to say, I think I've found my calling.
        </p>
        <p className="mt-4" data-aos="fade-up" data-aos-delay={1400}>
          Speaking of which:{" "}
          <span className="text-pink-500 ">
            I am eager to start my next adventure
          </span>
          ! Not only am I driven by my love for the field, but I also have a
          natural love for learning, and I know how to play well with others. I
          am ready to break into this industry at full force, so if you're in
          need of an engineer on your team,{" "}
          <a href="#contact" className="text-indigo-400">
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
  );
}
