import { Arizonia } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Building from "../public/building.jpg";
const alex_brush = Arizonia({ subsets: ["latin"], weight: "400" });

const Home = function () {
  const { ref: firstSecRef, inView: secVisible } = useInView();
  return (
    <main className="scroll-smooth">
      <section ref={firstSecRef} className="h-screen flex">
        <div className="self-center justify-self-center mx-auto">
          <Image
            src={Building}
            className={`w-72 opacity-40 ${
              secVisible ? "scale-100 ease-in duration-700" : "scale-150 blur"
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

      <section
        id="about"
        className="h-screen px-20 pt-20 py-10 grid grid-cols-2 gap-5"
      >
        {/* About Me */}
        <span className="text-2xl font-bold">(about me)</span>
        <p className="font-semibold text-justify max-w-5xl text-3xl indent-80">
          As a Junior Front-End Developer, I am responsible for maintaining and
          creating a website/web application and the user interface. I'm
          proficient in HTML, CSS, and vanilla JavaScript, which I'll use to
          carry out those tasks. And to enhance my technical skills I put extra
          effort to learn ReactJS, NextJS, and TailwindCSS.
        </p>

        {/* Education and Training */}
        <span className="text-2xl font-bold">(Education and Training)</span>
        <div className="grid grid-cols-2 gap-4">
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
    </main>
  );
};

export default Home;
