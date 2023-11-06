import { Map, Marker } from "pigeon-maps";
import Title from "../sectionTitle/Title";

const Mapping = () => {
  return (
    <div className="py-10">
      <Title>Find Us on the Map</Title>
      <Map height={400} defaultCenter={[21.421, 91.9763]} defaultZoom={8}>
        <Marker width={50} anchor={[21.421, 91.9763]} />
      </Map>
    </div>
  );
};

export default Mapping;
