import React, { useState } from "react";
import data from "../assets/releseInfo.json";
import ReleseCardInformation from "./ReleseCard";
import { Chrono } from "react-chrono";
const MainRelese = () => {
  const [filterOption, setFilterOption] = useState("All");
  const [filteredReleases, setfilteredReleases] = useState(data.releases);

  const handleChange = (e) => {
    setFilterOption(e.target.value);
    if (e.target.value === "All") {
      setfilteredReleases(data.releases);
    } else {
      setfilteredReleases(
        data.releases.filter((release) => release.type === e.target.value)
      );
    }
  };

  return (
    <section className="max-w-[70%] max-[645px]:max-w-[1034px]  w-full   ">
      <header className="flex items-center w-[95%]   max-[465px]:flex-col gap-2  max-[465px]:items-start  max-[465px]:pb-3 justify-between border-b-2 pb-1 ">
        <h1 className="max-[645px]:font-bold max-[645px]:text-releses">
          Release 6.5
        </h1>
        <div className="flex items-center justify-center gap-2 md:min-w-[244px]">
          <label
            htmlFor="filterSelect"
            className="font-openSans text-descAndchips">
            Sort By:
          </label>
          <select
            value={filterOption}
            onChange={handleChange}
            name="filterSelect"
            id="filterSelect"
            className="outline-none p-2 font-openSans border rounded-2xl w-full font-bold text-descAndchips   border-gray-200">
            <option value="All" className="font-openSans  ">
              All
            </option>
            <option value="Feat" className="font-openSans ">
              Feat
            </option>
            <option value="Fix" className="font-openSans ">
              Fix
            </option>
          </select>
        </div>
      </header>
      <ul className="mt-2  flex flex-col gap-3 mx-4 w-[90%] p-2">
        {filteredReleases.map((release) => (
          <ReleseCardInformation {...release} />
        ))}
      </ul>
    </section>
  );
};

export default MainRelese;
