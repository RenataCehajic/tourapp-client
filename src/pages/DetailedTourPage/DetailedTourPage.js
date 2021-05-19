import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailedTour } from "../../store/admin/action";
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

  return (
    <div>
      <div class="jumbotron bg-dark text-white jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">{tour.title}</h1>
          <p class="lead">{tour.district}</p>
          <p class="lead">{tour.description}</p>
          <p class="lead">Cafes: {tour.cafes}</p>
          <p class="lead">Already signed up: /amountofusers/</p>
          <p class="lead"> /allusers/ </p>
          {!user ? null : <Button onClick={enroll}>Enroll</Button>}
        </div>
      </div>
    </div>
  );
}

export default DetailedTourPages;
