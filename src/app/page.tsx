import { data } from "autoprefixer";
import MapCaller from "../components/MapCaller";
/* your fetch function that fetches data server side */
// import { fetchData } from '@/lib/data';

export default async function Home({ genres }) {
  // const data = await fetchData();

  return <MapCaller initialData={data} />;
}

const getAccessToken = async () => {
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

// export const currentlyPlayingSong = async () => {
//   const { access_token } = await getAccessToken();

//   return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };

export const getInitialProps = async () => {
  const { access_token } = await getAccessToken();

  const genres = await fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    // "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((response) => {
    return response.json();
  });

  console.log(genres);

  return {
    props: {
      genres,
    },
  };
};
