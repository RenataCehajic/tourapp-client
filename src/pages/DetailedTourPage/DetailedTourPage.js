import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailedTour, incrementLikes } from "../../store/admin/action";
import { enrollToTour, cancelEnrolltour } from "../../store/admin/action";
import { getDetailedTourSelector } from "../../store/admin/selector";
import { selectUser } from "../../store/user/selectors";

// import { getAllToursSelector } from "../../store/admin/selector";

function DetailedTourPages() {
  const { tourid } = useParams();
  const dispatch = useDispatch();
  const tour = useSelector(getDetailedTourSelector);

  console.log("tour", tour);

  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getDetailedTour(tourid));
  }, []);

  const enroll = () => {
    dispatch(enrollToTour(tourid));
  };

  const likeTour = () => {
    dispatch(incrementLikes(tourid));
  };

  const cancelenroll = () => {
    dispatch(cancelEnrolltour(tourid));
    //console.log(`TOUR ID `, tourid, user.id);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!tour ? (
        <div></div>
      ) : (
        <Card style={{ width: "50%", marginTop: "20px", border: "none" }}>
          <div className="container">
            <Card.Header
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <Card.Title style={{ fontSize: "2rem" }}>
                {tour.tourById?.title}
              </Card.Title>
              <Card.Subtitle>{tour.tourById?.district}</Card.Subtitle>
            </Card.Header>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                <Card.Subtitle
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  About the tour:
                </Card.Subtitle>
                <p class="lead">{tour.tourById?.description}</p>
                <Card.Subtitle
                  style={{
                    fontSize: "1.25rem",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Cafes on the way:
                </Card.Subtitle>
                <p class="lead"> {tour.tourById?.cafes}</p>
                <Card.Subtitle
                  style={{
                    fontSize: "1.25rem",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Already signed up:
                </Card.Subtitle>
                <p class="lead">{tour.enrollments?.length}</p>
                {!user ||
                tour.enrollments?.some((e) => {
                  return e["userId"] === user.id;
                }) ? null : (
                  <Button onClick={enroll}>Enroll</Button>
                )}{" "}
                {tour?.enrollments?.map((e) => {
                  return e["userId"] === user.id ? (
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={cancelenroll}
                    >
                      Cancel Enroll
                    </Button>
                  ) : null;
                })}
                <div style={{ margin: "10px" }}>
                  {user.token ? (
                    <h4
                      style={{
                        color: "#fff",
                      }}
                    >
                      {" "}
                      Like
                      <div>
                        <Button
                          style={{
                            backgroundColor: "#fdff00",
                            borderColor: "#000",
                          }}
                          onClick={likeTour}
                        >
                          <span style={{ fontSize: "1.5rem" }}>❤</span>{" "}
                        </Button>
                        <p class="lead">{tour.tourById?.rate}</p>
                      </div>
                    </h4>
                  ) : null}
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ maxHeight: "75%", maxWidth: "75%" }}
                  src={tour.tourById?.imageUrl}
                ></img>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default DetailedTourPages;
