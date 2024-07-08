import React from "react";

const ReleseCardInformation = ({ title, type, date, desc, img, details }) => (
  <article key={date} className="flex flex-col gap-3">
    <h2 className="text-2xl font-openSans">{title}</h2>
    <div className=" flex items-center font-openSans gap-2 text-descAndchips">
      <p
        className={`px-3 bg-gray-300 rounded-xl  font-bold ${
          type === "Fix" ? "text-yellow-500 bg-yellow-100" : "text-gray-500"
        } `}>
        {type}
      </p>
      <p className="font-openSans font-bold">{date}</p>
    </div>
    <p className="font-openSans  text-gray-400">{desc}</p>
    {img && (
      <img src={img} alt={title} className="w-full h-full object-cover" />
    )}
    {details && (
      <ul className="flex flex-col text-descAndchips font-openSans list-disc gap-2 px-10 py-1 ">
        {details.map((detail) => (
          <li key={detail}>
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    )}
  </article>
);

export default ReleseCardInformation;
