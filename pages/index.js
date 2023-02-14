import { Arizonia } from "@next/font/google";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Building from "../public/building.jpg";
import Stream from "../public/stream.jpg";
import React from "../public/Logos/atom.png";
import Css from "../public/Logos/css.png";
import Firebase from "../public/Logos/firebase.png";
import Github from "../public/Logos/github.png";
import Html from "../public/Logos/html.png";
import Tailwind from "../public/Logos/tailwind.png";
import Js from "../public/Logos/js.png";
import Git from "../public/Logos/git.png";
import Next from "../public/Logos/next.png";
import Trello from "../public/Logos/trello.png";
import Autocheck from "../public/autocheck.jpg";
const alex_brush = Arizonia({ subsets: ["latin"], weight: "400" });

const Home = function () {
  const router = useRouter();
  const { ref: firstSecRef, inView: secVisible } = useInView();
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  const { ref: educRef, inView: educVisible } = useInView();
  const { ref: projectRef, inView: projectVisible } = useInView();
  const { ref: skillRef, inView: skillVisible } = useInView();
  const { ref: contactRef, inView: contactVisible } = useInView();
  const { ref: socialRef, inView: socialVisible } = useInView();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const contactHandler = function (e) {
    e.preventDefault();

    const data = { name, email, message };

    emailjs
      .sendForm(
        "service_2z9nz7r",
        "template_xpfceos",
        form.current,
        "9wA3T3ZGsF7C2g-hj"
      )
      .then(
        (result) => {
          alert("Your email has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmail("");
    setMessage("");
    setName("");
    return;
  };

  return (
    <>
      <Head>
        <title>Daillan Leigh Franco</title>
      </Head>
      <main>
        {/* First Section */}
        <section id="top" ref={firstSecRef} className="h-screen flex">
          <div className="self-center justify-self-center mx-auto">
            <Image
              src={Building}
              className={`w-52 md:w-72 opacity-40 ${
                secVisible
                  ? "scale-100 ease-in duration-1000"
                  : "scale-150 blur"
              }`}
              alt="Building"
            />
          </div>
          <div className="absolute text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-bold  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full">
            <h1
              className={
                secVisible
                  ? "showAnimation ease-in duration-500"
                  : "hideAnimation"
              }
            >
              Hi, I am{" "}
              <span className={`${alex_brush.className} inline`}>
                Daillan Leigh Franco
              </span>
            </h1>
          </div>
          <div className="self-end justify-self-end max-w-sm md:max-w-2xl mb-10 absolute ">
            <div className="flex text-xs md:text-base">
              <p
                className={`font-bold mx-8 md:mx-16 ${
                  secVisible
                    ? "showAnimation ease-in duration-500"
                    : "hideAnimation"
                }`}
              >
                2023
              </p>

              <div
                className={`mx-8 md:mx-16 ${
                  secVisible
                    ? "showAnimation ease-in duration-700"
                    : "hideAnimation"
                }`}
              >
                <p className="font-bold">Location:</p>
                <p>Rizal/Philippines</p>
              </div>

              <div
                className={`mx-8 md:mx-16 ${
                  secVisible
                    ? "showAnimation ease-in duration-1000"
                    : "hideAnimation"
                }`}
              >
                <p>Contact:</p>
                <p>(+63) 951-018-9773</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="h-auto md:px-20 px-3 z-10 md:pt-20 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* About Me */}
          <span
            ref={aboutRef}
            className={`text-lg md:text-2xl font-bold ${
              aboutVisible
                ? "showAnimation ease-in duration-500"
                : "hideAnimation"
            }`}
          >
            (about me)
          </span>
          <p
            ref={aboutRef}
            className={` text-justify text-sm sm:text-lg md:text-xl lg:text-3xl indent-32 md:indent-64 ${
              aboutVisible
                ? "showAnimation ease-in duration-500"
                : "hideAnimation"
            }`}
          >
            As a Junior Front-End Developer, I am responsible for maintaining
            and creating a website/web application and the user interface. I'm
            proficient in HTML, CSS, and vanilla JavaScript, which I'll use to
            carry out those tasks. And to enhance my technical skills I put
            extra effort to learn ReactJS, NextJS, and TailwindCSS.
          </p>
          {/* Education and Training */}
          <span
            ref={educRef}
            className={`text-lg md:text-2xl font-bold ${
              educVisible
                ? "showAnimation ease-in duration-500"
                : "hideAnimation"
            } `}
          >
            (Education and Training)
          </span>
          <div
            ref={educRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
              educVisible
                ? "showAnimation ease-in duration-500"
                : "hideAnimation"
            }`}
          >
            {/* College */}
            <div>
              <h2 className=" text-base md:text-xl font-bold">College</h2>
              <h3 className="text-sm md:text-lg">2019 - 2022</h3>
              <p className="text-sm md:text-lg ">
                I graduated in college with Bachelor's Degree in Information
                Technology at ICCT Colleges Inc. Binangonan Campus.
              </p>
            </div>
            {/* Udemy */}
            <div>
              <h2 className="text-base md:text-xl font-bold">Udemy</h2>
              <p className="text-sm md:text-lg">
                I wanted to learn more about HTML, CSS, and JavaScript, so I
                took Udemy courses to become proficient in using this
                technology.
              </p>
            </div>
            {/* Youtube */}
            <div className="md:col-span-2">
              <h2 className="text-base md:text-xl font-bold">YouTube</h2>
              <p className="text-sm md:text-lg">
                I learned more about front end technologies, including ReactJS,
                NextJS, and TailwindCSS, and I continued to study them on
                YouTube.
              </p>
              <h4 className="font-semibold text-sm md:text-lg mt-2">
                Here some channels that might be helpful in your learning
                journey:
              </h4>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 justify-evenly text-blue-400 underline mt-1 text-sm md:text-lg md:mt-3">
                <Link href="https://www.youtube.com/@NetNinja">
                  The Net Ninja
                </Link>
                <Link href="https://www.youtube.com/@SonnySangha">
                  Sonny Sangha
                </Link>
                <Link href="https://www.youtube.com/@WebDevSimplified">
                  Web Dev Simplified
                </Link>
                <Link href="https://www.youtube.com/@developedbyed">
                  developedbyed
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          ref={skillRef}
          id="skills"
          className={`mt-10 md:mt-20 py-20 px-10 md:px-20 md:pt-20 ${
            skillVisible ? "scale-100 ease-in duration-1000" : "scale-150 blur"
          }`}
        >
          <h2 className="text-xl text-center md:text-3xl lg:text-6xl font-bold">
            ✦ Skills
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            {/* Card Frontend skills*/}
            <div className=" max-w-md rounded-xl py-5 px-10 bg-neutral-800 mt-0 md:mt-10">
              <h3 className="text-xl text-center font-semibold">
                {"</>"} Front End Development
              </h3>
              <p className="text-sm text-center text-neutral-400">
                Less than 1 year
              </p>
              <div className="grid grid-cols-3 gap-6 mt-5">
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Html}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    HTML5
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Css}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    CSS3
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Tailwind}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    TailwindCSS
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Js}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    JavaScript
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={React}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    ReactJS
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Next}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    NextJS
                  </span>
                </div>
              </div>
            </div>

            {/* Card Others */}
            <div className="max-w-md rounded-xl py-5 px-10 bg-neutral-800 mt-0 md:mt-10">
              <h3 className="text-xl text-center font-semibold">⌬ Others</h3>
              <p className="text-sm text-center text-neutral-400">
                Acquired Skills
              </p>
              <div className="grid grid-cols-3 gap-6 mt-5">
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Firebase}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    Firebase
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Git}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    Git
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Github}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    GitHub
                  </span>
                </div>
                <div className="flex flex-col justify-center ease-in duration-200 hover:scale-110">
                  <Image
                    src={Trello}
                    className="w-14 self-center"
                    alt="progamming lanuage"
                  />
                  <span className="text-xs font-semibold self-center mt-2">
                    Trello
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </section>

        {/* Projects */}
        <section
          id="project"
          className={`mt-5 md:mt-20 h-auto py-10 px-10 md:px-20  ${
            projectVisible
              ? "showAnimation ease-in duration-500"
              : "hideAnimation"
          }`}
        >
          <h2 className="text-3xl mb-10 md:text-5xl lg:text-7xl font-bold">
            ◀ Projects
          </h2>

          <div className={`md:grid  md:grid-cols-2 `}>
            {/* Card 1*/}
            <div
              ref={projectRef}
              className={`justify-self-center max-w-xs md:max-w-md rounded-xl p-2 bg-neutral-800 mt-0 md:mt-10`}
            >
              <Image src={Stream} className="w-max rounded-xl" alt="stream" />
              <h4 className="mt-2 text-center text-xl font-semibold py-2">
                Online To-do App
              </h4>
              <p className="px-4">
                <span className="font-semibold">Description:</span> Stream App
                is a kind of app that generally used to maintain our day-to-day
                tasks or list everything that we have to do.
              </p>
              <p className="px-4 py-4">
                <span className="font-semibold">Technologies:</span> JavaScript,
                TailwindCSS, ReactJS, NextJS, and Firebase/Firestore
              </p>

              <button
                onClick={() =>
                  router.push("https://todo-app-beige-kappa.vercel.app/")
                }
                className="bg-neutral-700 w-full py-2 rounded-xl text-lg"
              >
                Visit Project →
              </button>
            </div>

            {/* Card 2*/}
            <div
              ref={projectRef}
              className={`justify-self-center max-w-xs md:max-w-md rounded-xl p-2 bg-neutral-800 mt-10`}
            >
              <Image
                src={Autocheck}
                className="w-max rounded-xl"
                alt="stream"
              />
              <h4 className="mt-2 text-center text-xl font-semibold py-2">
                Auto Shop E-commerce
              </h4>
              <p className="px-4">
                <span className="font-semibold">Description:</span> This app is
                an e-commerce web app in which the user can browse various car
                parts. They can add items to their cart and then checkout.
              </p>
              <p className="px-4 py-4">
                <span className="font-semibold">Technologies:</span> JavaScript,
                TailwindCSS, ReactJS, NextJS, and Stripe Checkout
              </p>

              <button
                disabled
                className="bg-neutral-700 w-full py-2 rounded-xl text-lg cursor-not-allowed opacity-40"
              >
                Under Production...
              </button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          ref={contactRef}
          id="contact"
          className={`px-10 md:px-20 md:pt-20 mt-20 h-auto ${
            contactVisible
              ? "scale-100 ease-in duration-1000"
              : "scale-150 blur"
          }`}
        >
          <h3 className="text-5xl font-bold"> Get in touch.</h3>
          <h3 className="text-5xl font-bold">Let's work together.</h3>

          <div className="md:grid md:grid-cols-2 mt-10 md:mt-20">
            <div>
              <h4 className="text-3xl ">Inquiries:</h4>
              <p className="md:max-w-md">
                Please fill out the form on the right or email us directly at
                francodaillanleigh@gmail.com.
                <br />
                <br />
                (Please check Spam folders for our response.)
              </p>
            </div>
            <form
              ref={form}
              onSubmit={contactHandler}
              className="bg-neutral-800 mt-5 md:max-w-2xl p-5"
            >
              <label>Name: *</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="block w-full bg-neutral-300 text-black font-bold px-2 py-1 rounded-sm"
                type="text"
                name="name"
                required
              />
              <label className="inline-block mt-5">Email Address: *</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="block w-full bg-neutral-300 text-black font-bold px-2 py-1 rounded-sm"
                type="email"
                name="email"
                required
              />
              <label className="inline-block mt-5">Message: *</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="resize-none p-2 text-sm block w-full h-60 bg-neutral-300 text-black font-bold px-2 py-1 rounded-sm"
                name="message"
                maxLength={1000}
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="mt-5 bg-neutral-700 text-white px-4 py-1 rounded-sm"
              />
            </form>
          </div>
        </section>

        {/* Social */}
        <section
          ref={socialRef}
          id="social"
          className={`px-10 my-10 md:px-20 md:pt-20 md:my-20 h-auto ${
            socialVisible
              ? "showAnimation ease-in duration-500"
              : "hideAnimation"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold">❛❛ Social</h2>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-5 justify-between md:max-w-2xl mt-5 mb-10 text-xl">
            <Link href="https://www.instagram.com/franco_daillan/">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/Milagro.rog">Facebook</Link>
            <Link href="https://github.com/LeighDaillan">GitHub</Link>
            <Link href="https://www.linkedin.com/in/daillan-leigh-franco-9b83aa25a/">
              LinkedIn
            </Link>
            <Link href="https://copper-cammi-87.tiiny.site/">Resume</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
