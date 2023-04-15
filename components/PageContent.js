import { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "./Slider";
import Loader from "./Loader";

const PageContent = ({ data, type }) => {
  const [seasonData, setSeasonData] = useState(null);
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${data.id}/season/${seasonNumber}?api_key=cf462bd4335ec8255cff20c070b1702a`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setSeasonData(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    try {
      {
        data && type === "tv" && fetchData();
      }
    } catch (error) {
      setError(true);
    }
  }, [seasonNumber, data]);

  const handleChange = (event) => {
    setSeasonNumber(event.target.value);
  };

  return (
    <>
      {!isLoading && seasonData && data.seasons && (
        <div id="episodes">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start max-w-full text-white text-center font-bold mt-12 -mb-4 lg:ml-26">
            <h2 className="font-bold text-3xl">
              {seasonData.name === `Season ${seasonData.season_number}`
                ? `Season ${seasonData.season_number}`
                : `Season ${seasonData.season_number} - ${seasonData.name}`}
            </h2>
            <select
              onChange={handleChange}
              id="select-season-number"
              className="bg-slate-800 text-white w-32 rounded my-2 px-1 "
            >
              {data.seasons.map((data, i) => (
                <option key={i} value={data.season_number}>
                  {data.name}
                </option>
              ))}
            </select>
            <p className="mt-2 text-xl font-normal">
              {seasonData.episodes.length} Episodes
            </p>
          </div>
          {isLoading && <Loader />}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {seasonData.episodes.length != 0 && (
              <Slider type="episodeSlider">
                {seasonData.episodes.map((episode, i) => (
                  <div
                    key={i}
                    className="w-56 sm:w-[500px] min-h-[400px] hover:max-h-full snap-center shrink-0 first:-ml-12 bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out sm:pb-4 text-ellipsis"
                  >
                    <img
                      className="object-cover rounded drop-shadow-sm w-[500px] h-[281px] hover:opacity-70 transition-all duration-500 ease-in-out"
                      src={
                        episode.still_path
                          ? `https://image.tmdb.org/t/p/w500${episode.still_path}`
                          : "/share.png"
                      }
                      alt=""
                      loading="lazy"
                      width="500px"
                      height="281px"
                    />
                    <div className="text-white px-3 pt-2">
                      <p className="text-xl font-bold w-50 truncate">
                        {episode.name ? episode.name : episode.original_title}
                      </p>
                      <div className="flex items-center">
                        <p className="text-md text-gray-300">
                          {episode.air_date}
                        </p>
                        {episode.runtime && (
                          <>
                            <span
                              id="divider"
                              className="bg-gray-400 w-0.5 h-5 mx-2"
                            ></span>
                            <p className="text-md text-gray-300">
                              {episode.runtime} Minutes
                            </p>
                          </>
                        )}
                      </div>
                      {episode.vote_count != 0 && (
                        <div className="flex max-w-sm mt-2 sm:mt-4 mb-1">
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

                          <div className="flex flex-wrap w-[11rem] items-center pl-2 max-h-48 whitespace-normal text-md">
                            {Math.round(episode.vote_average * 100) / 100}{" "}
                            <span
                              id="divider"
                              className="bg-gray-400 w-[2px] h-5 mx-2"
                            ></span>{" "}
                            {episode.vote_count === 1
                              ? `${episode.vote_count} Review`
                              : `${episode.vote_count} Reviews`}
                          </div>
                        </div>
                      )}
                      <div>
                        <p
                          className={`hidden sm:block ${
                            !isHovered && "truncate"
                          }`}
                        >
                          {episode.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      )}
      {data.credits.cast && data.credits.cast.length != 0 && (
        <div id="cast">
          {data.credits.cast.length > 5 ? (
            <>
              <div className="flex justify-center lg:justify-start max-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                <h2>Cast:</h2>
              </div>
              <Slider type="castSlider">
                {data.credits.cast.map((cast, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 first:-ml-12 bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4"
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
              <div className="flex justify-center lg:justify-start max-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                <h2>Cast:</h2>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {data.credits.cast.map((cast, i) => (
                  <div
                    key={i}
                    className="bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-16 lg:first:ml-24"
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
                <div className="flex justify-center lg:justify-start max-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                  <h2>You Might Also Like</h2>
                </div>
                <Slider type="recommendedSlider">
                  {data.recommendations.results.map((results, i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 first:-ml-12 h-[26rem] w-[11.5rem] bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 text-ellipsis"
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
                <div className="flex justify-center lg:justify-start max-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                  <h2>You Might Also Like:</h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {data.recommendations.results.map((results, i) => (
                    <div
                      key={i}
                      className="h-[26rem] w-[11.5rem] bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-16 lg:first:ml-24 text-ellipsis"
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
                          <div className="flex max-w-sm">
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
