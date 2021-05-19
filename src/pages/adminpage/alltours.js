import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTours } from "../../store/admin/action";
import { getAllToursSelector } from "../../store/admin/selector";
import TourTableComponent from "../../components/Tour/tour";
const moment = require("moment");

const Alltours = () => {
  const dispatch = useDispatch();
  const alltours = useSelector(getAllToursSelector);
  console.log(alltours);

  const [selectedOption, set_selectedOption] = useState("all");
  const [filteredTours, set_filteredTours] = useState([]);

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  const handleSelect = (event) => {
    set_selectedOption(event.target.value);

    const filterTours = alltours.filter((tour) => {
      return tour.district.includes(event.target.value);
    });
    set_filteredTours(filterTours);
  };

  return (
    <div class="table-responsive">
      <select
        onChange={handleSelect}
        value={selectedOption}
        name="district"
        id="district-select"
      >
        <option value="all">All Districts</option>
        <option value="Centrum">Centrum</option>
        <option value="North">North</option>
        <option value="East">East</option>
        <option value="South">South</option>
        <option value="West">West</option>
      </select>

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
          {selectedOption === "all"
            ? alltours.map((tour, index) => {
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
              })
            : filteredTours.map((tour, index) => {
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
