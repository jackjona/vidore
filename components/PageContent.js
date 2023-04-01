import Link from "next/link";
import React from "react";
import Slider from "./Slider";

const PageContent = ({ data }) => {
  return (
    <>
      {data.keywords.results && (
        <div
          id="keywords"
          className="flex flex-row flex-wrap text-white justify-center lg:justify-start items-center lg:ml-26 max-w-full"
        >
          <p className="text-2xl font-bold">Keywords:</p>
          {data.keywords.results.map((data, i) => (
            <p
              key={i}
              className="ml-4 mt-2 bg-slate-800 px-4 py-2 rounded-md font-semibold"
            >
              <span className="text-gray-400">#</span>
              {data.name}
            </p>
          ))}
        </div>
      )}
      {data.credits.cast && data.credits.cast.length != 0 && (
        <div id="cast">
          {data.credits.cast.length > 5 ? (
            <>
              <div className="flex justify-center lg:justify-start w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                <h2>Cast:</h2>
              </div>
              <Slider type="castSlider">
                {data.credits.cast.map((cast, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 first:-ml-12 bg-[#1a1a1a] rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4"
                  >
                    <Link href={`/person/${cast.id}`}>
                      <img
                        className="rounded drop-shadow-sm w-[185px] h-[278px] hover:opacity-70 transition-all duration-500 ease-in-out"
                        src={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                            : "/placeholder.png"
                        }
                        alt=""
                        loading="lazy"
                        width="185px"
                        height="278px"
                      />
                      <div className="text-white px-3 pt-2 w-32">
                        <p className="text-xl font-bold">{cast.name}</p>
                        <p className="text-sm text-gray-400 font-normal italic pt-1">
                          {cast.character}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </>
          ) : (
            <>
              <div className="flex justify-center lg:justify-start w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                <h2>Cast:</h2>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {data.credits.cast.map((cast, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1a1a] rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-16 lg:first:ml-24"
                  >
                    <Link href={`/person/${cast.id}`}>
                      <img
                        className="z-0 rounded drop-shadow-sm w-[185px] h-[278px] hover:opacity-70 transition-all duration-500 ease-in-out"
                        src={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                            : "/placeholder.png"
                        }
                        alt=""
                        loading="lazy"
                        width="185px"
                        height="278px"
                      />

                      <div className="text-white px-3 pt-2 w-32">
                        <p className="text-xl font-bold">{cast.name}</p>
                        <p className="text-sm text-gray-400 font-normal italic pt-1">
                          {cast.character}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      {data.recommendations.results &&
        data.recommendations.results.length != 0 && (
          <div id="recommendations">
            {data.recommendations.results.length > 5 ? (
              <>
                <div className="flex justify-center lg:justify-start w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                  <h2>You Might Also Like</h2>
                </div>
                <Slider type="recommendedSlider">
                  {data.recommendations.results.map((results, i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 first:-ml-12 h-[26rem] w-[11.5rem] bg-[#1a1a1a] rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 text-ellipsis"
                    >
                      <Link
                        href={
                          results.media_type === "movie"
                            ? `/movie/${results.id}`
                            : `/tv/${results.id}`
                        }
                      >
                        <img
                          className="rounded drop-shadow-sm w-[185px] h-[278px] hover:opacity-70 transition-all duration-500 ease-in-out"
                          src={
                            results.poster_path
                              ? `https://image.tmdb.org/t/p/w500${results.poster_path}`
                              : "/placeholder.png"
                          }
                          alt=""
                          loading="lazy"
                          width="185px"
                          height="278px"
                        />
                        <div className="text-white px-3 pt-2 ">
                          <p className="text-xl font-bold w-50 truncate">
                            {results.name
                              ? results.name
                              : results.original_title}
                          </p>
                          <div className="flex  max-w-sm">
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
                            <p className="pl-2 max-h-48 whitespace-normal truncate text-md flex flex-wrap w-[11rem]">
                              {Math.round(results.vote_average * 100) / 100} -{" "}
                              {results.vote_count === 1
                                ? `${results.vote_count} Review`
                                : `${results.vote_count} Reviews`}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </>
            ) : (
              <>
                <div className="flex justify-center lg:justify-start w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                  <h2>You Might Also Like:</h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {data.recommendations.results.map((results, i) => (
                    <div
                      key={i}
                      className="h-[26rem] w-[11.5rem] bg-[#1a1a1a] rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-16 lg:first:ml-24 text-ellipsis"
                    >
                      <Link
                        href={
                          results.media_type === "movie"
                            ? `/movie/${results.id}`
                            : `/tv/${results.id}`
                        }
                      >
                        <img
                          className="rounded drop-shadow-sm w-[185px] h-[278px] hover:opacity-70 transition-all duration-500 ease-in-out"
                          src={
                            results.poster_path
                              ? `https://image.tmdb.org/t/p/w500${results.poster_path}`
                              : "/placeholder.png"
                          }
                          alt=""
                          loading="lazy"
                          width="185px"
                          height="278px"
                        />
                        <div className="text-white px-3 pt-2 ">
                          <p className="text-xl font-bold w-50 truncate">
                            {results.name
                              ? results.name
                              : results.original_title}
                          </p>
                          <div className="flex  max-w-sm">
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
                            <p className="pl-2 max-h-48 whitespace-normal truncate text-md flex flex-wrap w-[11rem]">
                              {Math.round(results.vote_average * 100) / 100} -{" "}
                              {results.vote_count === 1
                                ? `${results.vote_count} Review`
                                : `${results.vote_count} Reviews`}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
    </>
  );
};

export default PageContent;
