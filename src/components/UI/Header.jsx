import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";

const Header = () => {
  const [theme, setTheme] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  // Toggle theme change when shortcut keys: (Ctrl+Enter) or (Cmd+Enter), are pressed
  useHotkeys("mod+enter", (e) => {
    e.preventDefault();
    themeSwitchHandler();
  });

  const themeSwitchHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-between items-center shadow-md py-6 px-5 md:px-10 xl:px-40 2xl:px-72 text-lightText dark:text-darkText_LightElement bg-lightBg dark:bg-darkElement fixed w-full z-10">
      <button className="font-bold text-lg" onClick={() => navigate("/")}>
        Countries at a Glance
      </button>
      <div className="flex gap-2 cursor-pointer" onClick={themeSwitchHandler}>
        <span className="grid place-content-center">
          <button type="button" className="grid place-content-center h-7 w-7">
            {theme === "dark" ? sunIcon : moonIcon}
          </button>
        </span>
        <p className="grid place-content-center ">
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
