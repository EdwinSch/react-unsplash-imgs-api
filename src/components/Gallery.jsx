import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=WppTM_KZsDllUnftHP2iTFi4PU355nGHCXTIgJ18AxY&query=dog";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  console.log(response);
  return <p>gallery</p>;
};

export default Gallery;
