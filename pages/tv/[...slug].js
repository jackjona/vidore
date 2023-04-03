import { useState } from "react";
import PageHero from "@/components/PageHero";
import TrailerOverlay from "@/components/TrailerOverlay";
import PageContent from "@/components/PageContent";
import Meta from "@/components/Meta";

const Slug = ({ data, provider }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [trailerLoaded, setTrailerLoaded] = useState(false);

  const loadComplete = () => {
    setTrailerLoaded(true);
  };

  const showTrailer = () => {
    !openTrailer ? setOpenTrailer(true) : setOpenTrailer(false);
  };

  return (
    <>
      <Meta />
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
        id="tv-page"
        className={`${openTrailer ? "w-full h-full blur-sm" : "visible"} `}
      >
        <PageHero
          data={data}
          provider={provider}
          showTrailer={showTrailer}
          tv
        />
        <PageContent data={data} type="tv" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const getTVData = await fetch(
    `https://api.themoviedb.org/3/tv/${params.slug}?api_key=cf462bd4335ec8255cff20c070b1702a&append_to_response=content_ratings,videos,keywords,credits,recommendations`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const getProviderData = await fetch(
    `https://api.themoviedb.org/3/tv/${params.slug}/watch/providers?api_key=cf462bd4335ec8255cff20c070b1702a`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const TVData = await getTVData.json();
  const providerData = await getProviderData.json();

  return {
    props: {
      data: TVData,
      provider: providerData,
    },
  };
}

export default Slug;
