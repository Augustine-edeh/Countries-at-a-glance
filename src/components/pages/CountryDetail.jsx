import BackButton from "../UI/BackButton";
import Container from "../UI/Container";
import getBorderName from "../../utils/helper";
import Border from "../UI/Border";
import monthsList from "../../utils/monthsList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const countryInfo = useLocation().state;
  // console.log(countryInfo.time, countryInfo.date);
  // console.log(countryInfo);
  const borders = countryInfo.borders;
  const languages =
    countryInfo.languages &&
    Object.keys(countryInfo.languages)
      .map((key) => countryInfo.languages[key])
      .join(", ");

  useEffect(() => {
    const fetchTimeAndDateInfo = async () => {
      await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=XN1YFKSTBENU&format=json&by=position&lat=${countryInfo.capitalInfo.latlng[0]}&lng=${countryInfo.capitalInfo.latlng[1]}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("No internet connection");
          }
          return response.json();
        })
        .then((data) => {
          const hour = data.formatted.split(" ")[1].split(":")[0];
          const minute = data.formatted.split(" ")[1].split(":")[1];
          const time24hr = `${hour}:${minute}`;

          function convertTo12HourFormat(time_24hr) {
            // Split the time into hours and minutes
            const [hours, minutes] = time_24hr.split(":");

            // Convert hours to a number
            const hoursNum = parseInt(hours, 10);

            // Determine whether it's "am" or "pm" based on the hours
            const period = hoursNum >= 12 ? "pm" : "am";

            // Calculate the 12-hour format hours
            const hours12 = hoursNum % 12 || 12; // 0 should be converted to 12

            // Construct the 12-hour format time string
            const time12hr = `${hours12}:${minutes} ${period}`;

            countryInfo.time = time12hr;
            setTime(time12hr);

            // console.log(countryInfo.time);
          }
          convertTo12HourFormat(time24hr);
          // console.log(countryInfo.date);

          let [year, month, day] = data.formatted.split(" ")[0].split("-");
          // console.log(year, month, day);
          // remove leading zero from day
          day[0] === "0" ? (day = day[1]) : "";
          // Formatting date to desired format
          const formattedDate = `${monthsList[month - 1]} ${day}, ${year}`;
          countryInfo.date = formattedDate;
          const countryDate = countryInfo.date;
          setDate(countryDate);
          // console.log(countryDate);
        })
        .catch((error) => console.error(error.message));
      // localStorage.setItem("countryInfo", JSON.stringify(countryInfo));
      // se;
    };
    fetchTimeAndDateInfo();

    return () => {
      // setTimeout(() => setTime("Done!!"), 2000);
      // console.log("rendered");
    };
  }, [countryInfo, time, date]);

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
                      {/* Time: <span>{countryInfo.time}</span> */}
                      Time: <span>{time}</span>
                    </p>
                    <p>
                      {/* Date: <span>{countryInfo.date}</span> */}
                      Date: <span>{date}</span>
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
