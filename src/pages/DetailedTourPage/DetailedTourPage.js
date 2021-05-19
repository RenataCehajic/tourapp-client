import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailedTour, incrementLikes } from "../../store/admin/action";
import { enrollToTour } from "../../store/admin/action";
import { getDetailedTourSelector } from "../../store/admin/selector";
import { selectUser } from "../../store/user/selectors";

// import { getAllToursSelector } from "../../store/admin/selector";

function DetailedTourPages() {
  const { tourid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailedTour(tourid));
  }, []);

  const tour = useSelector(getDetailedTourSelector);
  const user = useSelector(selectUser);

  const enroll = () => {
    dispatch(enrollToTour(tourid));
  };

  const likeTour = () => {
    dispatch(incrementLikes(tourid));
  };

  return (
    <div>
      <div class="jumbotron bg-dark text-white jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">{tour.title}</h1>
          <div style={{ marginTop: "40px" }}>
            {user.token ? (
              <h4
                style={{
                  color: "#fff",
                  marginTop: "3rem",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Like
                <div>
                  <Button
                    style={{
                      backgroundColor: "#fdff00",
                      borderColor: "#000",
                      marginTop: "10px",
                    }}
                    onClick={likeTour}
                  >
                    <span style={{ fontSize: "2rem" }}>❤</span>{" "}
                  </Button>
                  <p class="lead">{tour.rate}</p>
                </div>
              </h4>
            ) : null}
          </div>
          <p class="lead">{tour.district}</p>
          <p class="lead">{tour.description}</p>
          <p class="lead">Cafes: {tour.cafes}</p>
          <p class="lead">Already signed up: {tour.users?.length}</p>
          <p class="lead"> /allusers/ </p>
          {!user ? null : <Button onClick={enroll}>Enroll</Button>}
        </div>
      </div>
    </div>
  );
}

export default DetailedTourPages;
