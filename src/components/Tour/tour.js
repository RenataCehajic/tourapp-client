import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <Link to={`/tours/${props.id}`}>
        <Button>See Details</Button>
      </Link>
    </>
  );
};

export default TourTable;
