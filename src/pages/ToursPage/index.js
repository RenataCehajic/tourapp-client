import React, { useEffect, useState } from "react";
// import { Button, Card, Dropdown } from "react-bootstrap";
import axios from "axios";

function ToursPage() {
  // Fetch all data (tours) from server set it in a variable

  const [allTours, set_allTours] = useState([]);
  const [filteredTours, set_filteredTours] = useState([]);
  const [selectedOption, set_selectedOption] = useState("all");

  console.log(allTours);

  const handleSelect = (event) => {
    set_selectedOption(event.target.value);

    const filterTours = allTours.filter((tour) => {
      return tour.district.includes(event.target.value);
    });
    set_filteredTours(filterTours);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:4000/tours").then((response) => {
          set_allTours(response.data);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Add a filter select tag, to filter the variable by district, set the usestate to this outcome

  // Display the tours with bootstrap.

  return (
    <div>
      <h2>Filter by district</h2>
      <select
        onChange={handleSelect}
        value={selectedOption}
        name="district"
        id="district-select"
      >
        <option value="all">All Districts</option>
        <option value="Centrum">Centrum</option>
        <option value="north">North</option>
        <option value="east">East</option>
        <option value="south">South</option>
        <option value="west">West</option>
      </select>

      {selectedOption === "all"
        ? allTours.map((tour) => {
            return (
              <div key={tour.id}>
                {" "}
                {tour.title}
                {tour.cafes}
                {tour.description}
              </div>
            );
          })
        : filteredTours.map((tour) => {
            return <div key={tour.id}></div>;
          })}
    </div>
  );
}

export default ToursPage;
