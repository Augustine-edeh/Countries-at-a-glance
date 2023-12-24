import BackButton from "../UI/BackButton";
import Container from "../UI/Container";
import getBorderName from "../../utils/helper";
import Border from "../UI/Border";
import { useLocation } from "react-router-dom";

const Country = () => {
  const countryInfo = useLocation().state;
  // console.log(countryInfo);
  const borders = countryInfo.borders;
  const languages =
    countryInfo.languages &&
    Object.keys(countryInfo.languages)
      .map((key) => countryInfo.languages[key])
      .join(", ");

  return (
    <main className="p-5 md:p-10 xl:px-40 2xl:px-72">
      <Container styleClasses={"my-24 "}>
        <div className="text-lightText dark:text-darkText_LightElement">
          <BackButton />
          <div className="flex flex-col gap-10 lg:gap-20 2xl:gap-40 lg:flex-row  container lg:h-96 mt-10">
            <section className="lg:w-1/2 container">
              <img
                src={countryInfo.flags.png}
                alt="flag"
                className="h-full w-full"
              />
            </section>

            <section className="flex flex-col lg:w-1/2 ">
              <div className="mb-10">
                <p className="font-bold text-3xl">
                  {countryInfo.name.official}
                </p>
              </div>

              <div className="flex flex-col gap-10  h-full justify-around">
                <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 2xl:gap-20 md:flex-row  text-lg">
                  <div className="w-fit">
                    <p>
                      Native Name:{" "}
                      <span className="font-thin">
                        {countryInfo.name.common}
                      </span>
                    </p>
                    <p>
                      Population:{" "}
                      <span className="font-thin">
                        {countryInfo.population}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span className="font-thin">{countryInfo.region}</span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span className="font-thin">{countryInfo.subregion}</span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span className="font-thin">{countryInfo.capital}</span>
                    </p>
                    <p>
                      <span>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={countryInfo.maps.googleMaps}
                          className="text-blue-600 dark:text-darkLink hover:underline"
                        >
                          Map of {countryInfo.name.common}
                        </a>
                      </span>
                    </p>
                  </div>

                  <div>
                    <p>
                      Time: <span>{countryInfo.time}</span>
                    </p>
                    <p>
                      Date: <span>{countryInfo.date}</span>
                    </p>
                    <p>
                      Top Level Domain:{" "}
                      <span className="font-thin">{countryInfo.tld}</span>
                    </p>
                    <p>
                      Currencies: <span className="font-thin">Euro</span>
                    </p>
                    <p>
                      Languages: <span className="font-thin">{languages}</span>
                    </p>
                  </div>
                </div>

                <div className="">
                  <p className="flex flex-col lg:flex-row gap-3">
                    <span className="">Border Countries:</span>
                    <span className="flex flex-wrap gap-3 ">
                      {borders?.length ? (
                        borders.map((borderCountry) => {
                          return (
                            <Border key={Math.random().toString()}>
                              {getBorderName(borderCountry)}
                            </Border>
                          );
                        })
                      ) : (
                        <Border
                          key={Math.random().toString()}
                          title={`${countryInfo.name.common} has no border Country`}
                        >
                          No Border
                        </Border>
                      )}
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
