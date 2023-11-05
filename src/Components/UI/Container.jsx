function Container(props) {
  return (
    <section className="mt-3 flex flex-wrap justify-center gap-5">
      {/* Rememberrto remove mt-3 above  */}
      {props.children}
    </section>
  );
}

export default Container;
