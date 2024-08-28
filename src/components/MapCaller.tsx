"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function MapCaller(props) {
  //   console.log(props.currentlyPlaying);

  return <Map {...props} />;
}

export default MapCaller;
