const Border = ({ title, children }) => {
  return (
    <button
      key={Math.random().toString()}
      type="button"
      title={title}
      className="text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement py-0.5 px-5 rounded-sm shadow-lg"
    >
      {children}
    </button>
  );
};
export default Border;
