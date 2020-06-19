import React from "react";
import { Button, Container } from "react-bootstrap";

export default ({ setDisplayMap }) => {
  return (
    <Container className="text-center m-auto h-100">
      <h1>Location Finder</h1>
      <p>Click on the button below to find your location</p>
      <Button variant="info" onClick={() => setDisplayMap(false)}>
        Find Me
      </Button>
    </Container>
  );
};
