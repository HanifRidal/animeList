import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href="/" className="font-bold text-white text-2xl">
          AnimeList
        </Link>
        <input placeholder="Search..." className="text-white" />
      </div>
    </header>
  );
};

export default Navbar;
