const LoadingUI = () => {
  return (
    <div className="my-14 md:my-20 xl:my-24 text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement shadow-lg px-5 py-3 rounded-xl">
      <p className="text-lightText dark:text-darkText_LightElement md:text-xl 2xl:text-2xl dark:border-gray-600 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </p>
    </div>
  );
};

export default LoadingUI;
