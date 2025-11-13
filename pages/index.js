import HomeSlider from "@/components/HomeSlider";
import Hero from "@/components/Hero";
import Meta from "@/components/Meta";

export default function Home({
  trending,
  mostWatchedMovies,
  highestRatedMovies,
  highestRatedTV,
  airingTV,
  upcomingMovies,
}) {
  return (
    <>
      <Meta />
      <main className="bg-black text-white text-center md:text-left">
        <Hero data={trending?.results?.slice(0, 5)} />

        <HomeSlider
          type="trending"
          name="Trending Now"
          location="home"
          data={trending?.results || []}
          label
        />

        <HomeSlider
          type="mostWatchedMovies"
          name="Most Watched Movies"
          location="home"
          data={mostWatchedMovies?.results || []}
          path="movie"
        />

        <HomeSlider
          type="highestRatedTV"
          name="Highest Rated TV Shows"
          location="home"
          data={highestRatedTV?.results || []}
          path="tv"
        />

        <HomeSlider
          type="highestRatedMovies"
          name="Highest Rated Movies"
          location="home"
          data={highestRatedMovies?.results || []}
          path="movie"
        />

        <HomeSlider
          type="airingTV"
          name="TV Shows Airing Now"
          location="home"
          data={airingTV?.results || []}
          path="tv"
        />

        <HomeSlider
          type="upcomingMovies"
          name="Upcoming Movies"
          location="home"
          data={upcomingMovies?.results || []}
          path="movie"
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const apiKey = process.env.TMBD_API_KEY;

  const endpoints = {
    trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`,
    mostWatchedMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false`,
    highestRatedMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_count.desc&include_adult=false`,
    highestRatedTV: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=vote_count.desc&include_adult=false`,
    airingTV: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&include_adult=false`,
  };

  try {
    const responses = await Promise.all(
      Object.values(endpoints).map((url) =>
        fetch(url, { headers: { "content-type": "application/json" } })
      )
    );

    const data = await Promise.all(responses.map((res) => res.json()));

    return {
      props: {
        trending: data[0],
        mostWatchedMovies: data[1],
        highestRatedMovies: data[2],
        highestRatedTV: data[3],
        airingTV: data[4],
        upcomingMovies: data[5],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        trending: null,
        mostWatchedMovies: null,
        highestRatedMovies: null,
        highestRatedTV: null,
        airingTV: null,
        upcomingMovies: null,
      },
    };
  }
}
