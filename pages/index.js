import HomeSlider from "@/components/HomeSlider";
import Hero from "@/components/Hero";
import Meta from "@/components/Meta";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home({ trending, mostWatchedMovies }) {
  const [airingTV, setAiringTV] = useState(null);
  const [highestRatedMovies, setHighestRatedMovies] = useState(null);
  const [highestRatedTV, setHighestRatedTV] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getHighestRatedMovies = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMBD_API_KEY}&sort_by=vote_count.desc&include_adult=false`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setHighestRatedMovies(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    const getHighestRatedTV = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMBD_API_KEY}&sort_by=vote_count.desc&include_adult=false`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setHighestRatedTV(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    const getAiringTV = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_TMBD_API_KEY}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setAiringTV(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    const getUpcomingMovies = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMBD_API_KEY}&include_adult=false`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setUpcomingMovies(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    try {
      {
        getHighestRatedMovies();
        getHighestRatedTV();
        getAiringTV();
        getUpcomingMovies();
      }
    } catch (error) {
      setError(true);
    }
  }, []);

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
          type="mostWatchedMovies"
          name="Most Watched Movies"
          location="home"
          data={mostWatchedMovies.results}
          path="movie"
        />
        {isLoading && <Loader />}
        {highestRatedTV && !error && (
          <HomeSlider
            type="highestRatedTV"
            name="Highest Rated TV Shows"
            location="home"
            data={highestRatedTV.results}
            path="tv"
          />
        )}
        {highestRatedMovies && !error && (
          <HomeSlider
            type="highestRatedMovies"
            name="Highest Rated Movies"
            location="home"
            data={highestRatedMovies.results}
            path="movie"
          />
        )}
        {airingTV && !error && (
          <HomeSlider
            type="airingTV"
            name="TV Shows Airing Now"
            location="home"
            data={airingTV.results}
            path="tv"
          />
        )}
        {upcomingMovies && !error && (
          <HomeSlider
            type="upcomingMovies"
            name="Upcoming Movies"
            location="home"
            data={upcomingMovies.results}
            path="movie"
          />
        )}
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
  const getMostWatchedMovies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMBD_API_KEY}&sort_by=popularity.desc&include_adult=false`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const trendingData = await getTrending.json();
  const mostWatchedMoviesData = await getMostWatchedMovies.json();

  return {
    props: {
      trending: trendingData,
      mostWatchedMovies: mostWatchedMoviesData,
    },
  };
}
