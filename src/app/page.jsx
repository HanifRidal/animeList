import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();
  // console.log(anime.data);

  return (
    <>
      {/* Paling Popular */}
      <section>
        <Header
          title="Most Popular Anime"
          linkTitle="Lihat Selengkapnya"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Paling Popular */}
      <section>
        <Header title="Newest Anime" linkTitle="Follow Now" linkHref="/new" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
