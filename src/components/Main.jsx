import React from "react";
import AllReleseNotes from "./AllReleseNotes";
import MainRelese from "./MainRelese";
import data from "../assets/notes.json";
const Main = () => {
  return (
    <main className="flex max-[645px]:flex-col  max-[645px]:mt-3 max-[645px]:mx-auto  gap-5  justify-center my-3 mx-6 mt-10 px-10 ">
      <MainRelese />
      <AllReleseNotes relesesnotes={data.notes} />
    </main>
  );
};

export default Main;
