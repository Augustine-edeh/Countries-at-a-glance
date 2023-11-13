const BackButton = () => {
  const leftArrow = (
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
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>
  );

  return (
    <button
      type="button"
      className="flex gap-2 text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement py-2 px-5  rounded-md shadow-xl"
    >
      {leftArrow}
      <span className="">Back</span>
    </button>
  );
};
export default BackButton;
