import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Locationmarker from './Locationmarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const [infoBoxPopup, setinfoBoxPopup] = useState(false);

    const markers = eventData.map(item =>{
        return <Locationmarker 
        lat ={item.Lat}
        lng ={item.Lng} 
        onClick={()=> {
                setLocationInfo({
                    Name: item.Name,
                    lng: item.Lat,
                    lat: item.Lng, 
                    })
                setinfoBoxPopup(true)
            }
        } 
    />
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLEMAPS_API_KEY
                }}
                    defaultCenter={center}
                    defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {infoBoxPopup && <LocationInfoBox trigger={infoBoxPopup} info={locationInfo} setTrigger={setinfoBoxPopup} />}
        </div>
    )
}







Map.defaultProps = {
    center:{
        lat: 4.7109886,
        lng: -74.072092
    },
    zoom: 6

}

export default Map
