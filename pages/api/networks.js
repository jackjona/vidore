export default async function handler(req, res) {
  const ids = [
    213, // Netflix
    2739, // Disney+
    49, // HBO
    1024, // Amazon Prime Video
    2552, // Apple TV+
    453, // Hulu
    4330, // Paramount+
    3353, // Peacock
    318, // Starz
    67, // Showtime
    4353, // Discovery+
  ];

  const results = [];

  for (const id of ids) {
    const response = await fetch(
      `https://api.themoviedb.org/3/network/${id}?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    results.push({
      id: data.id,
      name: data.name,
      //  logo: `https://image.tmdb.org/t/p/original${data.logo_path}`,
      logo: `https://image.tmdb.org/t/p/w500${data.logo_path}`,
    });
  }

  res.status(200).json(results);
}
