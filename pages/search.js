import Meta from "@/components/Meta";
import Link from "next/link";
import { React, useEffect, useState } from "react";

function Search() {
  /*   const [inputText, setInputText] = useState(""); */
  const [inputValue, setInputValue] = useState("");
  const [validQuery, setValidQuery] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    if (inputValue != "") {
      setLoading(true);

      handleFetch();
      setLoading(false);
    } else if (inputValue === "") {
      /*       console.log("Empty Input"); */
    } else {
      console.error("Error");
      setValidQuery(false);
    }
  }, [inputValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.includes("https" || "www")) {
      setValidQuery(false);
      console.error("Error");
    } else if (inputValue === "") {
      setValidQuery(false);
      console.error("Error");
    } else {
      setLoading(true);
      handleFetch();
      setLoading(false);
    }
  };

  return (
    <>
      <Meta />
      <div
        className={`text-white flex flex-col justify-center items-center  ${
          inputValue === "" && data === null ? "h-[80vh]" : "h-full mt-20"
        }`}
      >
        <form onSubmit={onSubmit}>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl sm:text-3xl font-semibold mb-10">
                Search For A Movie, TV Show, Or Person
              </h3>
              <input
                type="text"
                name="search"
                aria-label="Search"
                placeholder=" John Wick"
                className="rounded-md w-7/12 ease-in-out px-2 py-3 text-gray-200/90 text-sm bg-slate-700 border-4 border-gray-400 focus:outline-none focus:ring-4 focus:ring-slate-700"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>
            <button className="mt-10 my-6 ont-semibold text-md  bg-primary ring ring-primary ring-offset-2 ring-offset-white-100 py-4 px-10 rounded-xl shadow-lg shadow-primary hover:shadow-xl hover:bg-sky-500 transition duration-300 delay-40 hover:delay-40">
              Search
            </button>
            {validQuery === false && (
              <div id="formError">
                <p className="mt-2 max-w-lg text-red-600/80 break-words capitalize">
                  Invalid Query. Please only search using words.
                </p>
              </div>
            )}
          </div>
        </form>

        <div className="flex flex-wrap justify-center mb-20">
          {data != null && data.results.length != 0 ? (
            data.results.map((result, i) => (
              <div
                key={i}
                className="bg-secondary rounded-md hover:scale-[1.01] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-16"
              >
                <Link href={`/${result.media_type}/${result.id}`}>
                  <img
                    className="z-0 rounded drop-shadow-sm w-[185px] h-[278px] hover:opacity-70 transition-all duration-500 ease-in-out"
                    src={
                      result.profile_path || result.poster_path
                        ? `https://image.tmdb.org/t/p/w500${
                            result.profile_path
                              ? result.profile_path
                              : result.poster_path
                          }`
                        : "/placeholder.png"
                    }
                    alt=""
                    loading="lazy"
                    width="185px"
                    height="278px"
                  />

                  <div className=" px-3 pt-2 w-32">
                    <p className="text-xl font-bold break-words">
                      {result.name ? result.name : result.original_name}
                      {result.title ? result.title : result.original_title}
                    </p>
                    <p className="text-sm text-gray-400 font-normal italic pt-1">
                      {result.character}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p
              className={`${
                !inputValue && "hidden"
              } m-10 h-[56vh] font-bold text-2xl`}
            >
              No Results Found
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
