function Container({ styleClasses, children }) {
  return (
    <section className={styleClasses}>
      {/* Rememberrto remove mt-3 above  */}
      {children}
    </section>
  );
}

export default Container;
