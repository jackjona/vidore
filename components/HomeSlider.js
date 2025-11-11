import Link from "next/link";
import React from "react";
import Slider from "./Slider";

const SliderContent = ({ type, name, location, data, label, path }) => {
  return (
    <div id={`${type}-section`} className="mb-12">
      <h2 className="text-4xl font-bold mt-12 mb-4 ml-16">{name}</h2>
      <Slider location={location} type={type}>
        {data.map(
          (
            {
              id,
              poster_path,
              name: titleName,
              original_title,
              vote_average,
              vote_count,
              first_air_date,
              release_date,
              media_type,
            },
            i
          ) => (
            <div
              key={id}
              className="snap-center shrink-0 first:-ml-12 bg-secondary rounded-lg pb-2 hover:scale-[1.01] transition-all duration-300 ease-in-out"
              tabIndex={0}
            >
              <Link href={`/${path || media_type}/${id}`}>
                {label && (
                  <div className="sm:flex items-end justify-end font-mono text-sm font-bold -mb-24">
                    <div className="w-14 z-10 h-24 flex items-center justify-center bg-yellow-500 text-2xl rounded-bl-md shadow-lg ring-2 ring-slate-900">
                      {i + 1}
                    </div>
                  </div>
                )}
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : "/placeholder.png"
                  }
                  alt={titleName || original_title || "Poster"}
                  className="rounded drop-shadow-sm w-[210px] h-[290px] md:w-[320px] md:h-[480px] hover:opacity-70 transition-all duration-500 ease-in-out"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="480"
                />
                <div className="flex flex-col justify-center flex-wrap md:max-w-xs items-center text-center">
                  <h3 className="w-[13rem] md:w-full text-lg md:text-xl font-extrabold mt-6 px-2">
                    {titleName || original_title}
                  </h3>
                  <div className="flex flex-col md:flex-row justify-start items-center my-2">
                    <div
                      className="flex font-normal mx-auto"
                      aria-label="Rating"
                    >
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
                      <p className="pl-2 truncate">
                        {Math.round(vote_average * 100) / 100}
                      </p>
                    </div>
                    <p className="hidden md:flex text-lg mx-2">-</p>
                    <p className="truncate">{vote_count} Reviews</p>
                    <p className="hidden md:flex text-lg mx-2">-</p>
                    <p className="truncate">
                      {first_air_date
                        ? first_air_date.split("-")[0]
                        : release_date?.split("-")[0]}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default SliderContent;
