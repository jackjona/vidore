import Link from "next/link";
import React from "react";

const PageHero = ({ data, provider, showTrailer, tv, movie }) => {
  return (
    <div
      id="hero"
      className="relative flex flex-col lg:flex-row justify-center items-center h-full overflow-hidden text-center text-white lg:text-left px-12"
    >
      <img
        className="absolute left-0 top-0 object-cover w-full h-full lg:max-h-[58rem] opacity-50 blur-md lg:blur-sm z-0"
        src={`https://image.tmdb.org/t/p/w1280/${
          data.backdrop_path && data.backdrop_path
        }`}
        alt=""
        /*  loading="lazy" */
      />
      <img
        className="rounded-lg drop-shadow-2xl w-[270px] h-[400px] md:w-[340px] md:h-[480px] mt-4 lg:-mt-20 hover:scale-105 transition-all duration-500 ease-in-out"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt=""
        loading="lazy"
        width="320px"
        height="480px"
      />
      <div className="flex flex-col relative lg:pl-20 py-20 items-center lg:items-start max-w-sm sm:max-w-6xl">
        <p className="max-w-xl text-6xl font-extrabold">
          {data.name ? data.name : data.original_title}
        </p>
        {data.original_name != data.name && (
          <p className="max-w-xl text-lg text-gray-200 font-normal mt-2">
            <span className="font-semibold">Original Name:</span>{" "}
            {data.original_name}
          </p>
        )}
        <div className="flex justify-center lg:justify-start items-center mt-6 mb-4">
          <div className="flex items-center font-normal">
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
          <span id="divider" className="bg-gray-400 w-[2px] h-5 mx-2"></span>
          <p className="max-w-xl max-h-48 whitespace-normal truncate text-lg">
            {data.vote_count}
            {data.vote_count === "1" ? " Review" : " Reviews"}
          </p>
          <span id="divider" className="bg-gray-400 w-[2px] h-5 mx-2"></span>
          <p className="max-w-xl max-h-48 whitespace-normal truncate text-lg">
            {data.first_air_date && data.first_air_date.split("-")[0]}
            {data.release_date && data.release_date.split("-")[0]}
          </p>
          {data.content_ratings && data.content_ratings.results[0] && (
            <>
              <span
                id="divider"
                className="bg-gray-400 w-[2px] h-5 mx-2"
              ></span>
              <p className="border-2 border-gray-200 px-1 py-0 rounded-md text-sm font-semibold">
                {data.content_ratings.results[0].rating}
              </p>
            </>
          )}
        </div>

        {data.keywords.results && (
          <div
            id="keywords"
            className="hidden sm:flex flex-row flex-wrap text-gray-200 text-xs justify-center lg:justify-start items-center max-w-xl mt-2 mb-4 "
          >
            {data.keywords.results.map(
              (keyword, i) =>
                i < 8 && (
                  <div
                    key={i}
                    className="bg-slate-800 mt-2 lg:mt-1 mr-2 p-2 rounded-md font-semibold capitalize"
                  >
                    {keyword.name}
                  </div>
                )
            )}
          </div>
        )}

        <p className="max-w-xl max-h-48 whitespace-normal truncate text-lg font-medium">
          {data.overview}
        </p>
        <div className="flex flex-col justify-center items-center lg:items-start mt-4">
          {movie && (
            <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
              <span className="font-semibold">Release Date:</span>{" "}
              {data.release_date}
            </p>
          )}
          {tv && (
            <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
              <span className="font-semibold">Air Date:</span>{" "}
              {data.first_air_date} - {data.last_air_date}
            </p>
          )}
          <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
            <span className="font-semibold">Status:</span> {data.status}
          </p>
          <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
            <span className="font-semibold">Genre:</span>{" "}
            {data.genres.map((data, i) => (
              <span key={i}>{(i ? ", " : "") + data.name}</span>
            ))}
          </p>
          {movie && (
            <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
              <span className="font-semibold">Run Time:</span> {data.runtime}{" "}
              Minutes
            </p>
          )}
          {tv && (
            <>
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Seasons:</span>{" "}
                {data.number_of_seasons}
              </p>
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Episodes:</span>{" "}
                {data.number_of_episodes}
              </p>
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Episode Run Time:</span>{" "}
                {data.episode_run_time[0]} Minutes
              </p>
            </>
          )}
          <p className="max-w-sm max-h-48 text-md text-gray-200 font-normal my-1">
            <span className="font-semibold">Production:</span>{" "}
            {data.production_companies.map((data, i) => (
              <span key={i}>{(i ? ", " : "") + data.name}</span>
            ))}
          </p>
          <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
            <span className="font-semibold">TMBD ID:</span> {data.id}
          </p>
        </div>
        {provider.results.US && (
          <div id="providerOptions" className="mt-2">
            <b>
              {provider.results.US.flatrate
                ? "Streaming Now On:"
                : "Buy/Rent On:"}
            </b>
            <Link
              href={`https://www.justwatch.com/us/search?q=${
                data.name ? data.name : data.original_title
              }`}
              target="_blank"
              rel="noreferrer"
              className="flex mt-2"
            >
              <div className="flex flex-wrap sm:flex-nowrap justify-center lg:justify-start items-start w-full">
                {/* Show streaming/purchase options in the US region */}
                {provider.results.US.flatrate &&
                  provider.results.US.flatrate.slice(0, 5).map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center text-center sm:ml-10 first:ml-0 w-full"
                    >
                      <img
                        className="rounded-lg"
                        width="48px"
                        height="48px"
                        src={`https://image.tmdb.org/t/p/w200${data.logo_path}`}
                        alt=""
                      />

                      <p>{data.provider_name}</p>
                    </div>
                  ))}
                {!provider.results.US.flatrate &&
                  provider.results.US.buy &&
                  provider.results.US.buy.slice(0, 5).map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center text-center sm:ml-10 first:ml-0 w-full"
                    >
                      <img
                        className="rounded-lg"
                        width="48px"
                        height="48px"
                        src={`https://image.tmdb.org/t/p/w200${data.logo_path}`}
                        alt=""
                      />

                      <p>{data.provider_name}</p>
                    </div>
                  ))}
              </div>
            </Link>
            {/* <div className="flex flex-col justify-center items-center lg:items-start mt-6 lg:mt-4 text-gray-300 text-sm italic">
              <img src="/justwatch.svg" width="120" height="120" alt=""/>
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
            </div> */}
          </div>
        )}
        {data.videos.results.length != 0 && (
          <button
            onClick={showTrailer}
            className="mt-4 px-6 py-5 bg-primary rounded-lg hover:bg-sky-500 hover:rounded-xl transition-all duration-300 ease-in-out font-semibold"
          >
            Watch Trailer
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHero;
