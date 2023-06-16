import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map";
import Loader from "../../components/Loader";

const libraries = ["places"]

export default function HomePage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY_MAP,
    libraries: libraries,
  });
  return !isLoaded ? (
    <Loader
      borderColor="#04AA6D"
      borderTopColor="rgba(0, 0, 0, 0)"
      width="100%"
      height="200px"
    />
  ) : (
    <Map />
  );
}
