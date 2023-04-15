import Meta from "@/components/Meta";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="bg-hero min-h-screen m-0 p-0">
      <style jsx>{`
        .bg-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("/about-bg.jpg");
          margin-bottom: -14vh;
        }
      `}</style>
      <Meta />

      <div className="flex justify-center items-center text-center z-10 relative">
        <div className="flex flex-col text-gray-100 bg-slate-800 py-6 m-4 px-4 sm:px-12 my-[10vh] rounded-2xl max-w-lg items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="72px"
            height="72px"
            className="fill-gray-200"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z" />
          </svg>
          <h1 className="text-2xl font-bold my-4">About:</h1>
          <div>
            <h2>Vidore is a modern video discovery and streaming website.</h2>
            <br />
            <div className="flex flex-col justify-center items-center text-gray-300 text-sm">
              <img src="/tmbd.svg" width="96" height="96" alt="" />
              <p>
                This product uses the TMDB API but is not endorsed or certified
                by{" "}
                <Link
                  href={`https://www.themoviedb.org`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-yellow-400"
                >
                  TMBD
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-6 lg:mt-4 text-gray-300 text-sm">
              <img src="/justwatch.svg" width="120" height="120" alt="" />
              <p>
                Streaming service data from JustWatch. Visit{" "}
                <Link
                  href={`https://www.justwatch.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-yellow-400"
                >
                  JustWatch
                </Link>{" "}
                for more information.
              </p>
            </div>
            <br />
            <p className="text-gray-300 font-semibold">
              Vidore does not host any content. All content on Vidore is sourced
              from third-party sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
