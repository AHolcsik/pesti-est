"use client";

// import { addCurrentlyPlaying } from "../lib/features/spotify/spotifySlice";
// import { useAppDispatch, useAppStore } from "../lib/hooks";

export const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token ?? "",
    }),
  });

  return response.json();
};

export const currentlyPlayingSong = async () => {
  // const dispatch = useAppDispatch();

  const { access_token } = await getAccessToken();
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    // console.log("DISPATCH");
    // dispatch(addCurrentlyPlaying(response.json));

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// scrap later
export const getGenres = async () => {
  const { access_token } = await getAccessToken();

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
