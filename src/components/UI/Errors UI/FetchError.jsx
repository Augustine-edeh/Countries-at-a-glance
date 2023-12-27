const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="my-14 md:my-20 xl:my-24 text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement shadow-lg px-5 pb-10 pt-3">
      <h1 className="font-bold text-red-500 dark:text-red-400 mb-2 text-lg md:text-xl 2xl:text-2xl">
        ERROR...
      </h1>
      <p className="mb-5">{errorMessage}</p>
      <p className="border-r border-l border-gray-400 dark:border-gray-600 px-3 ">
        This may be due a problem with your internet connection or a server
        error from our end. Please try refreshing the page after some time.
      </p>
    </div>
  );
};
export default ErrorPage;
