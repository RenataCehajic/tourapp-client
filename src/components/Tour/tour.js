import React from "react";

export const TourTable = (props) => {
  return (
    <>
      <tr>
        <th scope="row"></th>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.cafes}</td>
        <td>{props.district}</td>
        <td>{props.date}</td>
      </tr>
    </>
  );
};

export default TourTable;
