const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  // URL 주소를 대체해서 이동
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  // URL 을 숨김
  async rewrites() {
    return [
      {
        source: "/api/movies", // 유저에게 표시되는 URL
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id", // detail 페이지
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
