import React, { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AliwangwangFilled } from "@ant-design/icons";

const Mapbox = () => {
  const MAP_TOKEN =
    "pk.eyJ1Ijoiamp6eXJhIiwiYSI6ImNsNG5xamJ3MjAwOGszaXF2MGRjZ3I4c2wifQ.r2rrgIXlly_-PjgE9G8bCA";

  return (
    <div className="Mapbox">
      <Map
        mapboxAccessToken={MAP_TOKEN}
        initialViewState={{
          longitude: 127.044395,
          latitude: 37.5083095,
          zoom: 17,
        }}
        style={{ width: "50vh", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={127.044395} latitude={37.5083095} anchor="bottom">
          <AliwangwangFilled style={{ fontSize: "20px", color: "#FF7F00" }} />
        </Marker>

        <Marker longitude={127.044248} latitude={37.5082285} anchor="bottom">
          <AliwangwangFilled style={{ fontSize: "20px", color: "#FF7F00" }} />
        </Marker>

        <Marker longitude={127.044316} latitude={37.5081564} anchor="bottom">
          <AliwangwangFilled style={{ fontSize: "20px", color: "#FF7F00" }} />
        </Marker>
      </Map>
    </div>
  );
};
export default Mapbox;
