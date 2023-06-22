import React from "react";

export default function Card({ innerData }) {
  console.log(innerData.data, "card");
  return (
    <>
      {innerData.data.map((item) => (
        <div key={item.id}>
          {item.name}
          {item.title}
        </div>
      ))}
    </>
  );
}
