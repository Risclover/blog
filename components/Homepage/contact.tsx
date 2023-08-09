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
      <h2 className="text-4xl font-bold">Let's talk!</h2>
      <div className="flex flex-col lg:flex-row mt-14 gap-12">
        <div data-aos="fade-up" className="flex flex-col lg:max-w-lg w-full">
          <div className="font-wotfard text-lg">
            Need a developer, or perhaps just want to chat? Feel free to hit me
            up! Messages sent through this contact form are sent straight to my
            email address. You can also find me via my social links below.
          </div>
          <div className="sm:flex gap-12 mt-14 w-full">
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
            <div className="flex flex-col mt-8 sm:mt-0 sm:ml-4">
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
