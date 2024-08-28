"use client";

import { data } from "autoprefixer";
import MapCaller from "../components/MapCaller";
import { currentlyPlayingSong, getGenres } from "../../utils/api";
import { SpotifyEmbed } from "spotify-embed";
import { RootState } from "../../lib/store";
import { useAppSelector } from "../../lib/hooks";
import { currentlyPlayingState } from "../../lib/features/spotify/spotifySlice";

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
    <div>{/* <SpotifyEmbed src={currentlyPlaying.item.uri} /> */}</div>
    // <MapCaller
    //   initialData={data}
    //   genres={genres}
    //   currentlyPlaying={currentlyPlaying}
    // />
  );
}
