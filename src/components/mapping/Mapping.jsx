import { Map, Marker } from "pigeon-maps";
import Title from "../sectionTitle/Title";

const Mapping = () => {
  return (
    <div className="pt-10">
      <Title>Mapping</Title>
      <Map height={300} defaultCenter={[23.82235, 90.365417]} defaultZoom={11}>
        <Marker width={50} anchor={[23.82235, 90.365417]} />
      </Map>
    </div>
  );
};

export default Mapping;
