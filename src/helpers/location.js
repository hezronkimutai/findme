export const getCurrentPosition = (setCenter) => {
  navigator.geolocation.getCurrentPosition((position) => {
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
};
export const getCurrentLocationDetails = (
  map,
  maps,
  center,
  setLocationDetails
) => {
  const geocoder = new maps.Geocoder();

  geocoder.geocode({ location: center }, function (results, status) {
    map.setZoom(11);
    new maps.Marker({
      position: center,
      map: map,
    });
    if (status === "OK") {
      if (results[0]) {
        setLocationDetails(results[0].formatted_address);
      } else {
        setLocationDetails(`No results found`);
      }
    } else {
      setLocationDetails(`Geolocation:${status}`);
    }
  });
};
