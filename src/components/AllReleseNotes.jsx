import React from "react";

const AllReleseNotes = ({ relesesnotes }) => {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-openSans text-releses font-bold">All relese notes</h1>
      <ul className="font-openSans text-descAndchips">
        {relesesnotes.map((note) => (
          <li key={note.id}>
            <h2 className="text-gray-400  hover:text-black hover:font-bold">
              {" "}
              {note.title}
            </h2>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllReleseNotes;
