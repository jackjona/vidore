import React from "react";
import Loader from "@/components/Loader";

const TrailerOverlay = ({ data, loaded, loadCompleted, showTrailer }) => {
  return (
    <>
      {!loaded && (
        <div className="h-screen w-full ">
          <Loader full />
        </div>
      )}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-10 h-[60%] px-6">
        <div className="mb-10 mt-20 lg:ml-26">
          <button
            onClick={showTrailer}
            className="text-white text-xl font-bold px-6 py-4 rounded-md bg-primary hover:bg-sky-500 hover:rounded-xl transition-all duration-300 ease-in-out"
          >
            &#x2190; Close
          </button>
        </div>
        {data.videos.results.filter((data) => data.name === "Official Trailer")
          .length != 0
          ? data.videos.results
              .filter((data) => data.name === "Official Trailer")
              .map((data, i) => (
                <div key={i} className={`h-full w-full ${!loaded && "hidden"}`}>
                  <iframe
                    title={data.name ? data.name : data.original_title}
                    src={`https://www.youtube-nocookie.com/embed/${data.key}`}
                    allow="fullscreen; picture-in-picture"
                    height="100%"
                    width="100%"
                    referrerPolicy="no-referrer"
                    onLoad={loadCompleted}
                  />
                </div>
              ))
          : data.videos.results
              .filter((data) => data.type === "Trailer")
              .slice(0, 1)
              .map((data, i) => (
                <div key={i} className={`h-full w-full ${!loaded && "hidden"}`}>
                  <iframe
                    title={data.name ? data.name : data.original_title}
                    src={`https://www.youtube-nocookie.com/embed/${data.key}`}
                    allow="fullscreen; picture-in-picture"
                    height="100%"
                    width="100%"
                    referrerPolicy="no-referrer"
                    onLoad={loadCompleted}
                  />
                </div>
              ))}
      </div>
    </>
  );
};

export default TrailerOverlay;
