import React from "react";
import { MapStyles } from "../stylesheets/style";

const MapContainer = ({isPage}) => {
  return (
    <MapStyles>
      <div
        id="map-container-google-8"
        className={`z-depth-2-half map-container"}`}
      >
<iframe title="map" src="https://maps.google.com/maps?q=вулиця+Івана+Сергієнка + 18,+Київ&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" allowfullscreen="" width="100%" height="300px"></iframe>
      </div>
    </MapStyles>
  );
};

export default MapContainer;
