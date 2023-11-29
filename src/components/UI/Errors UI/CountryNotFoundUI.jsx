const CountryNotFoundUI = () => {
  return (
    <div className="my-14 md:my-20 xl:my-24 text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement shadow-lg px-5 py-3 rounded-xl">
      <p className="font-bold text-red-500 dark:text-red-400 text-lg md:text-xl 2xl:text-2xl border-l border-r  border-gray-400 dark:border-gray-600 px-5 rounded-3xl">
        Country not found
      </p>
    </div>
  );
};

export default CountryNotFoundUI;
