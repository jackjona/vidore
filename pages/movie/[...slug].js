import { useState } from "react";
import TrailerOverlay from "@/components/TrailerOverlay";
import Meta from "@/components/Meta";
import PageContent from "@/components/PageContent";
import PageHero from "@/components/PageHero";

const Slug = ({ data, provider }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [trailerLoaded, setTrailerLoaded] = useState(false);

  const loadComplete = () => {
    setTrailerLoaded(true);
  };

  const showTrailer = () => {
    !openTrailer ? setOpenTrailer(true) : setOpenTrailer(false);
  };
  /*   console.log(data); */
  return (
    <>
      <Meta title={data.original_title && data.original_title} />
      {/* Youtube Trailer Modal */}
      {openTrailer && (
        <TrailerOverlay
          data={data}
          loaded={trailerLoaded}
          loadCompleted={loadComplete}
          showTrailer={showTrailer}
        />
      )}

      <div
        id="movie-page"
        className={`${openTrailer ? "w-full h-full blur-sm" : "visible"} `}
      >
        <PageHero data={data} provider={provider} showTrailer={showTrailer} />
        <PageContent data={data} type="movie" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const getMovieData = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}?api_key=cf462bd4335ec8255cff20c070b1702a&append_to_response=content_ratings,videos,keywords,credits,recommendations`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const getProviderData = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}/watch/providers?api_key=cf462bd4335ec8255cff20c070b1702a`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const movieData = await getMovieData.json();

  const providerData = await getProviderData.json();

  return {
    props: {
      data: movieData,
      provider: providerData,
    },
  };
}

export default Slug;
