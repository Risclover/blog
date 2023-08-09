import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {};

export default function Contact({}: Props) {
  const form = useRef<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setDisabled(false);
    }
  }, [name, email, message]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tg2e0lg",
        "template_1zzzdnl",
        form.current,
        "URByaHKZYS0jACyrB"
      )
      .then(
        (result) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <svg
        class="_1IHNP4dWxy7U5QgxQxi5If"
        width="1821"
        height="283"
        viewBox="0 0 1821 283"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2660_632712)">
          <path
            d="M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z"
            fill="#FF9999"
          ></path>
          <path
            opacity="0.7"
            d="M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z"
            fill="#FB133A"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_2660_632712">
            <rect width="1821" height="283" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <h2 className="text-4xl font-bold">Let's talk!</h2>
      <div className="flex flex-col lg:flex-row mt-14 gap-12">
        <div data-aos="fade-up" className="flex flex-col lg:max-w-lg w-full">
          <div className="font-wotfard text-lg">
            Need a developer, or perhaps just want to chat? Feel free to hit me
            up! Messages sent through this contact form are sent straight to my
            email address. You can also find me via my social links below.
          </div>
          <div className="flex gap-12 mt-14 w-full">
            <div>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="https://www.github.com/Risclover"
                    passHref
                    legacyBehavior
                  >
                    <a
                      className="flex items-end group cursor-pointer"
                      target="_blank"
                    >
                      Github{" "}
                      <BsArrowUpRight
                        className="text-sm mb-2 ml-1 group-hover:scale-110
                   origin-bottom-left transition"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/sara-dunlop"
                    passHref
                    legacyBehavior
                  >
                    <a
                      className="flex items-end group cursor-pointer"
                      target="_blank"
                    >
                      LinkedIn{" "}
                      <BsArrowUpRight
                        className="text-sm mb-2 ml-1 group-hover:scale-110
                   origin-bottom-left transition"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ml-4">
              <div className="uppercase mb-1 text-sm font-semibold">
                Email me directly
              </div>
              <Link
                className="hover:text-indigo-300 dark:hover:text-indigo-300 dark:text-gray-50"
                href="mailto:sara.dunlop.dev@gmail.com"
              >
                sara.dunlop.dev@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <form
          action="php/mail.php"
          method="post"
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          className="flex flex-col w-full contact-form"
          id="contact-form"
        >
          <label className="flex flex-col text-gray-50">
            Name
            <input
              name="name"
              placeholder="Mr. Fullstack"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-10 mb-3 py-2 px-4 text-slate-900 dark:text-slate-900 bg-gray-50 dark:bg-gray-50"
            />
          </label>
          <label className="flex flex-col text-gray-50">
            Email
            <input
              name="email"
              placeholder="bobbyfullstack@example.com"
              type="email"
              className="rounded-10 mb-3 py-2 px-4 text-slate-900 dark:text-slate-900 bg-gray-50 dark:bg-gray-50"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="flex flex-col text-gray-50">
            Message
            <textarea
              name="message"
              placeholder="Dear Sara..."
              className="rounded-10 py-2 px-4 text-slate-900 dark:text-slate-900 bg-gray-50 dark:bg-gray-50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          {success && <div className="mt-2">Message sent successfully!</div>}
          <button
            type="submit"
            className="hover:border-indigo-400 border border-2 w-[125px] px-4 py-1 rounded mt-5"
            disabled={disabled}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
