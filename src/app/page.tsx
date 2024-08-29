"use client";

import { data } from "autoprefixer";
import MapCaller from "../components/Map/MapCaller";
import { currentlyPlayingSong, getGenres } from "../../utils/api";
import { SpotifyEmbed } from "spotify-embed";
import { RootState } from "../../lib/store";
import { useAppSelector } from "../../lib/hooks";
import { currentlyPlayingState } from "../../lib/features/spotify/spotifySlice";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  // const genres = await getGenres();

  // const currentlyPlaying = useAppSelector((state) => state);
  const currentlyPlaying = useAppSelector(
    (state: { spotify: currentlyPlayingState }) => state.spotify
  );
  console.log("@@@", currentlyPlaying);

  // console.log("### GENRES ###", genres);
  // console.log("### CURRENTLY PLAYING ###", currentlyPlaying);

  return (
    <div className="flex">
      <MapCaller initialData={data} currentlyPlaying={currentlyPlaying} />
      <Sidebar />
    </div>
  );
}
