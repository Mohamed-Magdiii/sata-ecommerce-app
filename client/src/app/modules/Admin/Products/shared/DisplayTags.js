import React from "react";

function DisplayTags({ data }) {
  return (
    <>
      {data.map((d, i) => {
        return (
          <td
            key={i}
            className={`${i < 2 ? "ps-4 min-w-100px" : "min-w-100px"}`}
          >
            {d}
          </td>
        );
      })}
    </>
  );
}

export default DisplayTags;
