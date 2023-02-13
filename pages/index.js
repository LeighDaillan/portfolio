import { Arizonia } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Building from "../public/building.jpg";
import Stream from "../public/stream.jpg";
import Autocheck from "../public/autocheck.jpg";
const alex_brush = Arizonia({ subsets: ["latin"], weight: "400" });

const Home = function () {
  const router = useRouter();
  const { ref: firstSecRef, inView: secVisible } = useInView();
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  const { ref: educRef, inView: educVisible } = useInView();
  const { ref: projectRef, inView: projectVisible } = useInView();
  return (
    <main className="scroll-smooth">
      {/* First Section */}
      <section ref={firstSecRef} className="h-screen flex">
        <div className="self-center justify-self-center mx-auto">
          <Image
            src={Building}
            className={`w-72 opacity-40 ${
              secVisible ? "scale-100 ease-in duration-1000" : "scale-150 blur"
            }`}
            alt="Building"
          />
        </div>
        <div className="absolute text-6xl italic font-bold  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full">
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

        <div className="self-end justify-self-end max-w-2xl mb-10 absolute ">
          <div className="flex">
            <p
              className={`font-bold mx-16 ${
                secVisible
                  ? "showAnimation ease-in duration-500"
                  : "hideAnimation"
              }`}
            >
              2023
            </p>

            <div
              className={`mx-16 ${
                secVisible
                  ? "showAnimation ease-in duration-700"
                  : "hideAnimation"
              }`}
            >
              <p className="font-bold">Location:</p>
              <p>Rizal/Philippines</p>
            </div>

            <div
              className={`mx-16 ${
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
        className="h-screen px-20 pt-20 py-10 grid grid-cols-2 gap-5"
      >
        {/* About Me */}
        <span
          ref={aboutRef}
          className={`text-2xl font-bold ${
            aboutVisible
              ? "showAnimation ease-in duration-500"
              : "hideAnimation"
          }`}
        >
          (about me)
        </span>
        <p
          ref={aboutRef}
          className={`font-semibold text-justify max-w-5xl text-3xl indent-64 ${
            aboutVisible
              ? "showAnimation ease-in duration-500"
              : "hideAnimation"
          }`}
        >
          As a Junior Front-End Developer, I am responsible for maintaining and
          creating a website/web application and the user interface. I'm
          proficient in HTML, CSS, and vanilla JavaScript, which I'll use to
          carry out those tasks. And to enhance my technical skills I put extra
          effort to learn ReactJS, NextJS, and TailwindCSS.
        </p>
        {/* Education and Training */}
        <span
          ref={educRef}
          className={`text-2xl font-bold ${
            educVisible ? "showAnimation ease-in duration-500" : "hideAnimation"
          } `}
        >
          (Education and Training)
        </span>
        <div
          ref={educRef}
          className={`grid grid-cols-2 gap-4 ${
            educVisible ? "showAnimation ease-in duration-500" : "hideAnimation"
          }`}
        >
          {/* College */}
          <div>
            <h2 className="text-xl font-bold">College</h2>
            <h3>2019 - 2022</h3>
            <p className="text-lg ">
              I graduated in college with Bachelor's Degree in Information
              Technology at ICCT Colleges Inc. Binangonan Campus.
            </p>
          </div>
          {/* Udemy */}
          <div>
            <h2 className="text-xl font-bold">Udemy</h2>
            <p className="text-lg">
              I wanted to learn more about HTML, CSS, and JavaScript, so I took
              Udemy courses to become proficient in using this technology.
            </p>
          </div>
          {/* Youtube */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold">YouTube</h2>
            <p className="text-lg">
              I learned more about front end technologies, including ReactJS,
              NextJS, and TailwindCSS, and I continued to study them on YouTube.
            </p>
            <h4 className="font-semibold mt-2">
              Here some channels that might be helpful in your learning journey:
            </h4>
            <div className="flex justify-evenly text-blue-400 underline mt-3">
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

      {/* Projects */}
      <section className="mt-20 h-screen px-20 pt-20">
        <h2 className="text-7xl font-bold">◀ Projects</h2>

        <div className="grid grid-cols-2 ">
          {/* Card 1*/}
          <div
            ref={projectRef}
            className={`justify-self-center max-w-md rounded-xl p-2 bg-neutral-800 mt-10 ${
              projectVisible
                ? "showAnimation ease-in duration-500"
                : "hideAnimation"
            }`}
          >
            <Image src={Stream} className="w-max rounded-xl" alt="stream" />
            <h4 className="mt-2 text-center text-xl font-semibold py-2">
              Online To-do App
            </h4>
            <p className="px-4">
              <span className="font-semibold">Description:</span> Stream App is
              a kind of app that generally used to maintain our day-to-day tasks
              or list everything that we have to do.
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
            className={`justify-self-center max-w-md rounded-xl p-2 bg-neutral-800 mt-10 ${
              projectVisible
                ? "showAnimation ease-in duration-700"
                : "hideAnimation"
            }`}
          >
            <Image src={Autocheck} className="w-max rounded-xl" alt="stream" />
            <h4 className="mt-2 text-center text-xl font-semibold py-2">
              Auto Shop E-commerce
            </h4>
            <p className="px-4">
              <span className="font-semibold">Description:</span> This app is an
              e-commerce web app in which the user can browse various car parts.
              They can add items to their cart and then checkout.
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
    </main>
  );
};

export default Home;
