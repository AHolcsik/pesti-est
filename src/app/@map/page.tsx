"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function MapCaller(props) {
  return <Map {...props} />;
}

export default MapCaller;
