const Footer = () => {
  return (
    <section className="flex justify-center gap-2 text-sm md:text-lg  text-lightText  dark:text-darkText_LightElement  absolute bottom-0 mb-8 w-full">
      {"</>"} Developed by
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Augustine_edeh"
          className="text-blue-600 dark:text-darkLink hover:underline"
        >
          Augustine
        </a>
      </span>
    </section>
  );
};

export default Footer;
