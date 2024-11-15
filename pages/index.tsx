import React, { useEffect } from "react";
import Aos from "aos";
import Layout from "@/components/layout";
import Contact from "@/components/Homepage/contact";
import Greetings from "@/components/Homepage/greetings";
import Toolkit from "@/components/Homepage/toolkit";
import Projects from "@/components/Homepage/projects";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 800, disable: window.innerWidth < 768 });
  }, []);

  return (
    <Layout home>
      <div
        className="frontpage dark:text-gray-50 font-sans flex flex-col min-h-screen h-full w-full m-auto"
        id="about"
      >
        <Greetings />
        <Toolkit />
        <Projects />
        <div className="w-full bg-slate-900 text-gray-50 dark:text-gray-50">
          <div className="px-6 lg:px-12 lg:max-w-6xl mx-auto w-full py-20">
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
