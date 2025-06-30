import AnimeList from "../components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  // console.log(anime.data);

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <Link
          href="/popular"
          className="md:text-xl text-md underline hover:text-indigo-50 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          // console.log(data.title);
          return (
            <div
              key={data.mal_id}
              className="bg-gray-200 shadow-xl p-4 rounded-lg"
            >
              <AnimeList
                id={data.mal_id}
                title={data.title}
                images={data.images.webp.image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
