import React from "react";
import { Row, Col, Button } from "reactstrap";

export default (props) => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza " style={{ color: "	#E8E8E8" }}>
            If you're looking for great pizza
            <i
              style={{ color: "white" }}
              className="fas fa-pizza-slice pizza-slice"
            ></i>
          </p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={(_) => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      {/* <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/cafe.jpeg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row> */}
    </div>
  );
};
