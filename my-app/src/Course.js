import React from "react";
import { Container } from "react-bootstrap";

const Course = (props) => {
  const { name, price, description, img, star } = props.course;
  return (
    <Container className="course-container">
      <div
        className="course"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="img-container">
          <div className="photo">
          <img src={img} style={{ width: "300px", height: "200px" }} alt="" />
          </div>
          <h3 className="photo-detail" style={{ textAlign: "center" }}>
            {name}
          </h3>
        </div>
        <div>
          <h3>Course:{name}</h3>
          <h3>Price: ${price}</h3>
          </div>
      </div>
    </Container>
  );
};

export default Course;
