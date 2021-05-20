import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { CreateTour } from "../../store/admin/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
const moment = require("moment");
const TourCreation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const [form, setform] = useState({
    title: "",
    cafes: "",
    description: "",
    district: "",
    imageUrl: "",
    date: moment().format("YYYY-MM-DD"),
  });

  function Submit() {
    console.log(`The form contents`, { form });

    dispatch(
      CreateTour(
        form.title,
        form.cafes,
        form.description,
        form.district,
        form.date,
        form.imageUrl,
        history
      )
    );

    setform({
      title: "",
      cafes: "",
      description: "",
      district: "",
      imageUrl: "",
      date: moment().format("YYYY-MM-DD"),
    });
  }

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  });
  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Create Tour</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name of Tour</Form.Label>
          <Form.Control
            value={form.title}
            onChange={(event) =>
              setform({ ...form, title: event.target.value })
            }
            type="text"
            placeholder="Enter name of the tour"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Cafe's</Form.Label>
          <Form.Control
            value={form.cafes}
            onChange={(event) =>
              setform({ ...form, cafes: event.target.value })
            }
            type="cafes"
            placeholder="Enter Cafes"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter description</Form.Label>
          <Form.Control
            value={form.description}
            onChange={(event) =>
              setform({ ...form, description: event.target.value })
            }
            type="description"
            placeholder="Enter description"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter district</Form.Label>
          <Form.Control
            value={form.district}
            onChange={(event) =>
              setform({ ...form, district: event.target.value })
            }
            type="district"
            placeholder="Enter district"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter date</Form.Label>
          <Form.Control
            value={form.date}
            onChange={(event) => setform({ ...form, date: event.target.value })}
            type="datetime-local"
            placeholder="Enter date"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter imageUrl</Form.Label>
          <Form.Control
            value={form.imageUrl}
            onChange={(event) =>
              setform({ ...form, imageUrl: event.target.value })
            }
            type="imageUrl"
            placeholder="Enter imageURL"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter PDF</Form.Label>
          <Form.Control
            type="file"
            placeholder="upload tour PDF here"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={Submit}>
            Create Tour
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TourCreation;
