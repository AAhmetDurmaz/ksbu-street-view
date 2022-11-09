import { useContext, useEffect } from 'react';
import LocationContext from './LocationContext';
import useChecksum from './useChecksum';

const StreetView = ({ someProp }) => {
    const checksum = useChecksum(someProp);
    const { currentLocation } = useContext(LocationContext);

    useEffect(() => {
        console.log(`http://localhost:8000/pannellum.htm#config=${currentLocation.image.split("\\")[0]}/config.json&autoLoad=true`)
    }, [currentLocation])

    return (
        <>
            <iframe key={checksum} src={`http://localhost:8000/pannellum.htm#config=${currentLocation.image.split("\\")[0]}/config.json&autoLoad=true`} style={{ height: '100%', width: '100%' }} />
        </>
    )
}

export default StreetView