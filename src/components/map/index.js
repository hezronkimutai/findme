import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import {
  getCurrentPosition,
  getCurrentLocationDetails,
} from "../../helpers/location";
import { Container } from "react-bootstrap";
import { Button } from "./style";
import Marker from "./Marker";

export default ({ setDisplayMap }) => {
  const [center, setCenter] = useState("");
  const [locationDetails, setLocationDetails] = useState("");
  const [displayLocation, setDisplayLocation] = useState(false);
  useEffect(() => {
    getCurrentPosition(setCenter);
  }, []);

  return (
    center && (
      <Container className="vh-100 vw-100">
        <Button
          className="position-absolute m-1 btn btn-info"
          onClick={() => setDisplayMap(true)}
        >
          Back
        </Button>
        <GoogleMapReact
          distanceToMouse={() => {}}
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={center}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            getCurrentLocationDetails(map, maps, center, setLocationDetails)
          }
          onClick={() => setDisplayLocation(!displayLocation)}
        >
          {displayLocation && <Marker locationDetails={locationDetails} />}
        </GoogleMapReact>
      </Container>
    )
  );
};
