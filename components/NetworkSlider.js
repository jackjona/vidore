import { useEffect, useState } from "react";
import Link from "next/link";

export default function NetworkSlider() {
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    async function fetchNetworks() {
      const res = await fetch("/api/networks");
      const data = await res.json();
      setNetworks(data);
    }
    fetchNetworks();
  }, []);

  return (
    <div className="flex justify-center overflow-x-scroll space-x-4 p-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
      {networks.map(({ id, name, logo }) => (
        <Link href={`/discover/network/${id}`} key={id}>
          <div className="group flex flex-col items-center p-4 mt-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition cursor-pointer flex-shrink-0 snap-center w-40">
            <img
              src={logo}
              alt={name}
              className="h-16 w-full object-contain mb-2 group-hover:scale-110 transition-transform"
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
