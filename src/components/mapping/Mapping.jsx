import { Map, Marker } from "pigeon-maps";

const Mapping = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center uppercase pb-5">
        Find Us on the Map
      </h1>
      <Map height={400} defaultCenter={[21.421, 91.9763]} defaultZoom={8}>
        <Marker width={50} anchor={[21.421, 91.9763]} />
      </Map>
    </div>
  );
};

export default Mapping;
