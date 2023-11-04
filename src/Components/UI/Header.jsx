function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-6 shadow-md">
      <h1 className="bg-blue-500s  font-bold text-lg">Where in the world?</h1>
      <div className="flex space-x-5">
        <img src="vite.svg" alt="toggletheme" className="" />
        <p>Dark mode</p>
      </div>
    </header>
  );
}

export default Header;
