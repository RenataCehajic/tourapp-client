import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { DeleteTour } from "../../store/admin/action";
import Card from "react-bootstrap/Card";

export const TourTable = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function Delete() {
    dispatch(DeleteTour(props.id));
  }
  return (
    <>
      <Card style={{ textAlign: "center", width: "15rem", height: "20rem" }}>
        <Card.Header>
          <Card.Title style={{ color: "green" }}>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.district}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>Cafe's: {props.cafes}</Card.Text>
          <Link to={`/tours/${props.id}`}>
            <Card.Link> More information & enroll</Card.Link>
          </Link>
          {user.isAdmin ? (
            <Button style={{ backgroundColor: "red" }} onClick={Delete}>
              Delete Tour
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
};

export default TourTable;
