import HomeSlider from "@/components/HomeSlider";
import Hero from "@/components/Hero";
import Meta from "@/components/Meta";

export default function Home({ trending, mostWatched, highestRated }) {
  return (
    <>
      <Meta />
      <main className="bg-black text-white text-center md:text-left">
        <Hero data={trending.results[0]} />
        <HomeSlider
          type="trending"
          name="Trending Now"
          location="home"
          data={trending.results}
          label
        />
        <HomeSlider
          type="mostWatched"
          name="Most Watched"
          location="home"
          data={mostWatched.results}
          path="movie"
        />
        <HomeSlider
          type="highestRated"
          name="Highest Rated"
          location="home"
          data={highestRated.results}
          path="movie"
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const getTrending = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMBD_API_KEY}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const getMostWatched = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMBD_API_KEY}&sort_by=popularity.desc&include_adult=false`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const getHighestRated = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMBD_API_KEY}&sort_by=vote_count.desc&include_adult=false`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const trendingData = await getTrending.json();
  const mostWatchedData = await getMostWatched.json();
  const highestRatedData = await getHighestRated.json();

  return {
    props: {
      trending: trendingData,
      mostWatched: mostWatchedData,
      highestRated: highestRatedData,
    },
  };
}
