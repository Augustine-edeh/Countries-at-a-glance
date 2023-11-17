import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import Container from "./Container";
const Country = () => {
  const borders = ["France", "Germany", "Luxembourg", "Netherlands"];
  const languages = ["Dutch", "French", "German"];
  return (
    <main className="p-5 md:p-10 xl:px-40 2xl:px-72">
      <Container styleClasses={"my-24 "}>
        <div className="text-lightText dark:text-darkText_LightElement">
          <Link to="/">
            <BackButton />
          </Link>
          <div className="flex flex-col gap-10 lg:gap-20 2xl:gap-40 lg:flex-row  container lg:h-96 mt-10">
            <section className="lg:w-1/2 container">
              <img
                src="https://flagcdn.com/be.svg"
                alt="flag"
                className="h-full w-full"
              />
            </section>

            <section className="flex flex-col lg:w-1/2 ">
              <div className="mb-10">
                <p className="font-bold text-3xl">Belgium</p>
              </div>

              <div className="flex flex-col gap-10  h-full justify-around">
                <div className="flex flex-col gap-10 md:flex-row  text-lg">
                  <div className="">
                    <p>
                      Native Name: <span className="font-thin">Belgie</span>
                    </p>
                    <p>
                      Population: <span className="font-thin">11,319,511</span>
                    </p>
                    <p>
                      Region: <span className="font-thin">Europe</span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span className="font-thin">Western Europe</span>
                    </p>
                    <p>
                      Capital: <span className="font-thin">Brussels</span>
                    </p>
                  </div>

                  <div className="">
                    <p>
                      Top Level Domain: <span className="font-thin">.be</span>
                    </p>
                    <p>
                      Currencies: <span className="font-thin">Euro</span>
                    </p>
                    <p>
                      Languages:{" "}
                      <span className="font-thin">{languages.join(", ")}</span>
                    </p>
                  </div>
                </div>

                <div className="">
                  <p className="flex flex-col lg:flex-row gap-1">
                    <span className="">Border Countries:</span>
                    <span className="flex flex-wrap gap-3 ">
                      {borders.map((borderCountry) => (
                        <button
                          key={Math.random().toString()}
                          type="button"
                          className="text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement py-0.5 px-5 rounded-sm shadow-lg"
                        >
                          {borderCountry}
                        </button>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Country;
