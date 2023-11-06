function Header() {
  return (
    <header className="flex justify-between items-center shadow-md py-6 px-5 md:px-10 xl:px-40 2xl:px-72">
      <h1 className="bg-blue-500  font-bold text-lg">Where in the world?</h1>
      <div className="flex space-x-5">
        <img src="vite.svg" alt="toggletheme" className="" />
        <p>Dark mode</p>
      </div>
    </header>
  );
}

export default Header;
