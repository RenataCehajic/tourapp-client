import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { DeleteTour } from "../../store/admin/action";

export const TourTable = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function Delete() {
    dispatch(DeleteTour(props.id));
  }
  return (
    <>
      <tr>
        <th scope="row"></th>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.cafes}</td>
        <td>{props.district}</td>
        <td>{props.date}</td>
        {user.isAdmin ? (
          <td>
            <Button style={{ backgroundColor: "red" }} onClick={Delete}>
              Delete Tour
            </Button>
          </td>
        ) : null}
      </tr>
    </>
  );
};

export default TourTable;
