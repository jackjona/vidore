import Link from "next/link";
import React from "react";

const HomeHero = ({ data }) => {
  return (
    <div
      id="hero"
      className="relative flex flex-col md:flex-row justify-center items-center h-[36rem] md:h-[46rem] overflow-hidden text-center text-white md:text-left px-12"
    >
      <img
        className="absolute left-0 top-0 object-cover w-full h-full max-h-[36rem] md:max-h-[55rem] opacity-50 blur-sm z-0"
        src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
        alt=""
      />
      <Link href={`/${data.media_type}/${data.id}`}>
        <img
          className="hidden md:block rounded-lg drop-shadow-2xl w-[300px] h-[370px] lg:w-[320px] lg:h-[480px] mt-10 md:-mt-0 hover:scale-105 transition-all duration-500 ease-in-out"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt=""
          loading="lazy"
          width="320px"
          height="480px"
        />
      </Link>
      <div className="relative md:ml-20 my-20 mx-2 md:pl-2 text-center md:text-left">
        <p className="md:flex md:flex-wrap max-w-xl text-3xl md:text-5xl xl:text-6xl font-extrabold">
          {data.name ? data.name : data.original_title}
        </p>
        <div className="flex justify-center md:justify-start my-6">
          <div className="flex justify-center items-center font-normal ">
            {/*    <img src="./tmbd.svg" width="32" height="32" /> */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0621 1.65925L15.5435 6.67764C15.716 7.02667 16.0496 7.26852 16.4356 7.3244L21.9843 8.12919C22.9562 8.27027 23.344 9.46212 22.641 10.146L18.626 14.0522C18.3469 14.3239 18.2194 14.7155 18.2854 15.0989L19.2331 20.6147C19.3992 21.5807 18.3832 22.3173 17.514 21.8615L12.5514 19.2575C12.2063 19.0766 11.7937 19.0766 11.4486 19.2575L6.48598 21.8615C5.6168 22.3177 4.60078 21.5807 4.7669 20.6147L5.71455 15.0989C5.78064 14.7155 5.65306 14.3239 5.37404 14.0522L1.35905 10.146C0.655998 9.46166 1.04378 8.26982 2.01575 8.12919L7.56441 7.3244C7.95036 7.26852 8.28398 7.02667 8.45653 6.67764L10.9379 1.65925C11.372 0.780251 12.6276 0.780251 13.0621 1.65925Z"
                fill="#ED8A19"
              />
            </svg>
            <p className="pl-2 max-w-xl max-h-48 whitespace-normal truncate text-lg">
              {Math.round(data.vote_average * 100) / 100}
            </p>
          </div>
          <p className="text-lg mx-2">•</p>
          <p className="max-w-xl max-h-48 whitespace-normal truncate text-lg">
            {data.vote_count} Reviews
          </p>
          <p className="text-lg mx-2">•</p>
          <p className="max-w-xl max-h-48 whitespace-normal truncate text-lg">
            {data.first_air_date
              ? data.first_air_date.split("-")[0]
              : data.release_date.split("-")[0]}
          </p>
        </div>
        <p className="max-w-2xl md:max-w-xl max-h-48 whitespace-normal truncate text-lg font-medium">
          {data.overview}
        </p>
        <Link href={`/${data.media_type}/${data.id}`}>
          <button className="mt-12 px-6 py-5 bg-primary rounded-lg hover:bg-sky-500 hover:rounded-xl transition-all duration-300 ease-in-out font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
