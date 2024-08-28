import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface currentlyPlayingState {
  timestamp: number;
  context: null; // dunno lol
  progress_ms: number;
  item: {
    album: {
      album_type: string;
      artists: string[]; // not sure
      available_markets: string[];
      external_urls: [Object]; // ??
      href: string;
      id: string;
      images: string[]; // ??
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: [[Object]]; // ??
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: { isrc: string };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  };
  currently_playing_type: string;
  actions: { disallows: { pausing: boolean; skipping_prev: boolean } };
  is_playing: boolean;
}

const initialState: currentlyPlayingState = {
  timestamp: 0,
  context: null,
  progress_ms: 0,
  item: {
    album: {
      album_type: "",
      artists: [],
      available_markets: [],
      external_urls: [Object],
      href: "",
      id: "",
      images: [],
      name: "THIS IS THE INITIAL STATE",
      release_date: "",
      release_date_precision: "",
      total_tracks: 0,
      type: "",
      uri: "",
    },
    artists: [[Object]],
    available_markets: [],
    disc_number: 0,
    duration_ms: 0,
    explicit: false,
    external_ids: { isrc: "" },
    external_urls: {
      spotify: "",
    },
    href: "",
    id: "",
    is_local: false,
    name: "",
    popularity: 0,
    preview_url: "",
    track_number: 0,
    type: "",
    uri: "",
  },
  currently_playing_type: "",
  actions: { disallows: { pausing: false, skipping_prev: false } },
  is_playing: false,
};

const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    addCurrentlyPlaying: (
      state,
      action: PayloadAction<currentlyPlayingState>
    ) => {
      state = action.payload;
    },
  },
});

export const { addCurrentlyPlaying } = spotifySlice.actions;

export default spotifySlice.reducer;
