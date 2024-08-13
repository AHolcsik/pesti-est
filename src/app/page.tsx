import { data } from "autoprefixer";
import MapCaller from "../components/MapCaller";
/* your fetch function that fetches data server side */
// import { fetchData } from '@/lib/data';

export default async function Home() {
  // const data = await fetchData();

  return <MapCaller initialData={data} />;
}
