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

  console.log(props.imageUrl);

  function Delete() {
    dispatch(DeleteTour(props.id));
  }
  return (
    <div className="container">
      <Card
        style={{
          textAlign: "center",
        }}
      >
        <img
          className="card-img-top"
          style={{ width: "200px", height: "150px" }}
          src={props.imageUrl}
        ></img>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.district}
          </Card.Subtitle>

          <Card.Text>Cafe's: {props.cafes}</Card.Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to={`/tours/${props.id}`}>
              <p> More information & enroll</p>
            </Link>
            {user.isAdmin ? (
              <Button
                style={{ backgroundColor: "red", width: "40%", margin: "20px" }}
                onClick={Delete}
              >
                Delete Tour
              </Button>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourTable;
