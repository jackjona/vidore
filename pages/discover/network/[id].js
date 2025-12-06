import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function DiscoverNetwork() {
  const router = useRouter();
  const { id } = router.query;
  const [shows, setShows] = useState([]);
  const [network, setNetwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

      // Fetch network details
      const netRes = await fetch(
        `https://api.themoviedb.org/3/network/${id}?api_key=${apiKey}&language=en-US`
      );
      const netData = await netRes.json();
      setNetwork(netData);

      // Fetch shows for this network
      const showRes = await fetch(
        `https://api.themoviedb.org/3/discover/tv?with_networks=${id}&api_key=${apiKey}&language=en-US&sort_by=popularity.desc`
      );
      const showData = await showRes.json();
      setShows(showData.results || []);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return (
    <main className="bg-black min-h-screen text-white p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          {network ? `Now Trending on ${network.name}` : "Loading..."}
        </h1>
        {network?.logo_path && (
          <img
            src={`https://image.tmdb.org/t/p/w92${network.logo_path}`}
            alt={network.name}
            className="h-10 object-contain"
          />
        )}
      </div>

      {loading && (
        <div className="h-screen w-full ">
          <Loader full />
        </div>
      )}

      {shows.length === 0 ? (
        <p className="text-gray-400">
          No trending shows found for this network.
        </p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {shows.map((show) => (
            <div
              key={show.id}
              className="bg-gray-900 rounded-md hover:scale-[1.02] transition-all duration-300 ease-in-out pb-4 mx-1 sm:mx-3 mt-10 shadow-md hover:shadow-lg w-[185px]"
            >
              <Link href={`/tv/${show.id}`}>
                <img
                  className="z-0 rounded-t-md drop-shadow-sm mx-auto hover:opacity-80 transition-all duration-500 ease-in-out object-cover"
                  src={
                    show.poster_path
                      ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                      : "/placeholder.png"
                  }
                  alt={show.name}
                  loading="lazy"
                  width="185"
                  height="278"
                />

                <div className="px-3 pt-3 text-center">
                  <h2 className="md:text-lg font-semibold text-xl break-words line-clamp-2">
                    {show.name || show.original_name || show.original_title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {show.first_air_date?.split("-")[0] || "—"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
