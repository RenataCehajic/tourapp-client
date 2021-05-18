import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTours } from "../../store/admin/action";
import { getAllToursSelector } from "../../store/admin/selector";
import TourTableComponent from "../../components/Tour/tour";
const moment = require("moment");
const Alltours = () => {
  const dispatch = useDispatch();
  const alltours = useSelector(getAllToursSelector);
  console.log(alltours);

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">District</th>
            <th scope="col">Cafes</th>
            <th scope="col">File</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {alltours.map((tour, index) => {
            return (
              <TourTableComponent
                title={tour.title}
                key={index}
                description={tour.description}
                cafes={tour.cafes}
                district={tour.district}
                date={moment(tour.date).format("YYYY-MM-DD")}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Alltours;
