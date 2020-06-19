import React, { useState } from "react";
import Map from "../components/map/index";
import Hero from "../components/hero";

export default () => {
  const [displayMap, setDisplayMap] = useState(true);
  return (
    <>
      <div className="App">
        {displayMap ? (
          <Hero setDisplayMap={setDisplayMap} />
        ) : (
          <Map setDisplayMap={setDisplayMap} />
        )}
      </div>
    </>
  );
};
