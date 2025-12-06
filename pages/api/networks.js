export default function handler(req, res) {
  const networks = [
    {
      id: 213,
      name: "Netflix",
      logo: "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    },
    {
      id: 2739,
      name: "Disney+",
      logo: "https://image.tmdb.org/t/p/w500/1edZOYAfoyZyZ3rklNSiUpXX30Q.png",
    },
    {
      id: 49,
      name: "HBO",
      logo: "https://image.tmdb.org/t/p/w500/tuomPhY2UtuPTqqFnKMVHvSb724.png",
    },
    {
      id: 1024,
      name: "Prime Video",
      logo: "https://image.tmdb.org/t/p/w500/w7HfLNm9CWwRmAMU58udl2L7We7.png",
    },
    {
      id: 2552,
      name: "Apple TV",
      logo: "https://image.tmdb.org/t/p/w500/bngHRFi794mnMq34gfVcm9nDxN1.png",
    },
    {
      id: 453,
      name: "Hulu",
      logo: "https://image.tmdb.org/t/p/w500/pqUTCleNUiTLAVlelGxUgWn1ELh.png",
    },
    {
      id: 4330,
      name: "Paramount+",
      logo: "https://image.tmdb.org/t/p/w500/fi83B1oztoS47xxcemFdPMhIzK.png",
    },
    {
      id: 3353,
      name: "Peacock",
      logo: "https://image.tmdb.org/t/p/w500/gIAcGTjKKr0KOHL5s4O36roJ8p7.png",
    },
    {
      id: 318,
      name: "STARZ",
      logo: "https://image.tmdb.org/t/p/w500/qx3Y9LCaK4mq1ykFuDIfjshlo3U.png",
    },
    {
      id: 67,
      name: "Showtime",
      logo: "https://image.tmdb.org/t/p/w500/Allse9kbjiP6ExaQrnSpIhkurEi.png",
    },
    {
      id: 4353,
      name: "discovery+",
      logo: "https://image.tmdb.org/t/p/w500/1D1bS3Dyw4ScYnFWTlBOvJXC3nb.png",
    },
    {
      id: 3897,
      name: "TVING",
      logo: "https://image.tmdb.org/t/p/w500/cfMtt9sNl2bDyHuoPSZouEqDB9N.png",
    },
  ];

  res.status(200).json(networks);
}
