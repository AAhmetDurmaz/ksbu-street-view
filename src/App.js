import Map from './Components/Map';
import StreetView from './Components/StreetView';
import LocationContext from './Components/LocationContext';

import './leaflet.css';
import LocationJSON from './LocationData/locations.json';
import { useState } from 'react';

function App() {
  const [random, setRandom] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 39.391167251069604,
    lng: 30.03766784792898,
    name: "",
    desc: "",
    image: "39,391167251069604,30,03766784792898\\IMG_1142.JPG",
  });

  const locationData = {
    locations: LocationJSON,
    currentLocation: currentLocation,
    setCurrentLocation: setCurrentLocation,
    random: random,
    setRandom: setRandom,
  };

  return (
    <LocationContext.Provider value={locationData}>
      <div className="w-screen flex">
        <div className="h-screen grid place-items-center" style={{ width: '50%' }}>
          <StreetView />
        </div>
        <div className="h-screen" style={{ width: '50%' }}>
          <Map />
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
