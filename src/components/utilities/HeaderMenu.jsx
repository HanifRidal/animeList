const HeaderMenu = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Anime List</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/popular" className="hover:underline">
              Popular
            </a>
          </li>
          <li>
            <a href="/search" className="hover:underline">
              Search
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderMenu;
