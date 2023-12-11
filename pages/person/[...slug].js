import Meta from "@/components/Meta";
import Slider from "@/components/Slider";
import Link from "next/link";

const Slug = ({ data }) => {
  return (
    <>
      <Meta title={data.name && data.name} />
      <div
        id="hero"
        className="relative flex flex-col lg:flex-row justify-center items-center h-full mb-12 overflow-hidden text-center text-white lg:text-left px-12"
      >
        <img
          className="absolute left-0 top-0 object-cover w-full h-full lg:max-h-[58rem] opacity-50 blur-2xl z-0"
          src={`https://image.tmdb.org/t/p/w1280/${data.profile_path}`}
          alt=""
          /*  loading="lazy" */
        />
        <Link
          href={`https://image.tmdb.org/t/p/original${data.profile_path}`}
          target="_blank"
        >
          <img
            className="border-2 border-primary rounded-lg drop-shadow-2xl w-[270px] h-[400px] md:w-[320px] md:h-[480px] mt-4 hover:scale-105 transition-all duration-500 ease-in-out"
            src={
              data.profile_path
                ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
                : "/placeholder.png"
            }
            alt=""
            loading="lazy"
            width="320px"
            height="480px"
          />
        </Link>
        <div className="relative lg:pl-20 py-20">
          <p className="max-w-xl text-6xl font-extrabold">
            {data.name ? data.name : data.original_title}
          </p>
          {data.also_known_as.length != 0 && (
            <div className="flex justify-center lg:justify-start items-center my-6">
              <p className="max-w-xl max-h-48 text-md font-normal my-1">
                <span className="font-semibold">Also Known As:</span>{" "}
                {data.also_known_as.map((data, i) => (
                  <span key={i} className=" text-gray-200 ">
                    {(i ? ", " : "") + data}
                  </span>
                ))}
              </p>
            </div>
          )}
          <p className="max-w-xl max-h-48 whitespace-normal truncate text-lg font-medium">
            {data.biography}
          </p>

          <div className="flex flex-col justify-center items-center lg:items-start mt-4">
            {data.birthday && (
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Birthday:</span> {data.birthday}
              </p>
            )}
            {data.place_of_birth && (
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Place Of Birth:</span>{" "}
                {data.place_of_birth}
              </p>
            )}
            {data.deathday && (
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Death Day:</span>{" "}
                {data.deathday}
              </p>
            )}
            {data.known_for_department && (
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Known For:</span>{" "}
                {data.known_for_department}
              </p>
            )}
            {data.homepage && (
              <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
                <span className="font-semibold">Homepage:</span>{" "}
                <Link
                  href={data.homepage}
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400"
                >
                  {data.homepage}
                </Link>
              </p>
            )}
            <p className="max-w-xl max-h-48 text-md text-gray-200 font-normal my-1">
              <span className="font-semibold">TMBD ID:</span> {data.id}
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[35vh]">
        {data.images.profiles.length != 0 && (
          <div id="profile-images" className="mb-10">
            {data.images.profiles.length > 5 ? (
              <>
                <div className="flex justify-center lg:justify-start maw-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26 ">
                  <h2>Profile Images:</h2>
                </div>
                <Slider type="profileSlider">
                  {data.images.profiles.map((data, i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 first:-ml-12 bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out p-4"
                    >
                      <Link
                        href={`https://image.tmdb.org/t/p/original${data.file_path}`}
                        target="_blank"
                      >
                        <img
                          className="rounded drop-shadow-sm w-[240px] h-[350px] hover:opacity-70 transition-all duration-500 ease-in-out"
                          src={`https://image.tmdb.org/t/p/w500${data.file_path}`}
                          alt=""
                          loading="lazy"
                          width="240px"
                          height="350px"
                        />
                      </Link>
                    </div>
                  ))}
                </Slider>
              </>
            ) : (
              <>
                <div className="flex justify-center lg:justify-start maw-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                  <h2>Profile Images:</h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {data.images.profiles.map((data, i) => (
                    <div
                      key={i}
                      className="lg:ml-24 bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out p-2 sm:mx-2 mt-16"
                    >
                      <Link
                        href={`https://image.tmdb.org/t/p/original${data.file_path}`}
                        target="_blank"
                      >
                        <img
                          className="rounded drop-shadow-sm w-[240px] h-[350px] hover:opacity-70 transition-all duration-500 ease-in-out"
                          src={`https://image.tmdb.org/t/p/w500${data.file_path}`}
                          alt=""
                          loading="lazy"
                          width="240px"
                          height="350px"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        {data.combined_credits.cast.length != 0 && (
          <div id="credits" className="mb-10">
            {data.combined_credits.cast.length > 5 ? (
              <>
                <div className="flex justify-center lg:justify-start maw-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26 ">
                  <h2>Known For:</h2>
                </div>
                <Slider type="castSlider">
                  {data.combined_credits.cast.map((cast, i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 first:-ml-12 bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out h-[26rem] min-h-[29rem] hover:h-full pb-4"
                    >
                      <Link href={`/${cast.media_type}/${cast.id}`}>
                        <img
                          className="rounded drop-shadow-sm w-[185px] h-[278px] hover:opacity-70 transition-all duration-500 ease-in-out"
                          src={
                            cast.poster_path
                              ? `https://image.tmdb.org/t/p/w500${cast.poster_path}`
                              : "/placeholder.png"
                          }
                          alt=""
                          loading="lazy"
                          width="185px"
                          height="278px"
                        />
                        <div className="text-white px-3 pt-2 w-32">
                          <p className="text-xl font-bold w-36">
                            {cast.title
                              ? cast.title
                              : cast.original_title || cast.name}
                            <span className="pl-2 text-sm text-gray-300 italic">
                              {cast.release_date &&
                                `(${cast.release_date.split("-")[0]})`}
                            </span>
                          </p>
                          <p className="text-sm text-gray-400 font-normal italic pt-1">
                            {cast.character}
                          </p>
                        </div>
                        {cast.vote_count != 0 && (
                          <div className="flex w-36 text-white font-semibold px-4">
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
                              {Math.round(cast.vote_average * 100) / 100} -{" "}
                              {cast.vote_count === 1
                                ? `${cast.vote_count} Review`
                                : `${cast.vote_count} Reviews`}
                            </p>
                          </div>
                        )}
                      </Link>
                    </div>
                  ))}
                </Slider>
              </>
            ) : (
              <>
                <div className="flex justify-center lg:justify-start maw-w-full text-white text-3xl font-bold mt-12 -mb-4 lg:ml-26">
                  <h2>Known For:</h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {data.combined_credits.cast.map((cast, i) => (
                    <div
                      key={i}
                      className="bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-16 lg:first:ml-24"
                    >
                      <Link href={`/${cast.media_type}/${cast.id}`}>
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
                        {cast.vote_count != 0 && (
                          <div className="flex w-32 text-white font-semibold px-4">
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
                              {Math.round(cast.vote_average * 100) / 100} -{" "}
                              {cast.vote_count === 1
                                ? `${cast.vote_count} Review`
                                : `${cast.vote_count} Reviews`}
                            </p>
                          </div>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const getPersonData = await fetch(
    `https://api.themoviedb.org/3/person/${params.slug}?api_key=cf462bd4335ec8255cff20c070b1702a&append_to_response=images,combined_credits`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const PersonData = await getPersonData.json();

  return {
    props: {
      data: PersonData,
    },
  };
}

export default Slug;
