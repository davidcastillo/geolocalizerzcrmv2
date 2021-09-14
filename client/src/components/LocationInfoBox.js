import Logo from "./Logo";

const LocationInfoBox = ({info,trigger,setTrigger}) => {

    return (trigger) ? (<div className="location-info" >
            <span className="closeInfoBox" onClick={()=> setTrigger(false)} >X</span>
            {/* {props.children} */}
            <Logo />
            <h2>{info.Name}</h2> 
            <div className="asociate-info">
                <ul>
                    <li><strong>Longitud:</strong> {info.lng}</li>
                    <li><strong>Latitud: </strong> {info.lat}</li>
                </ul>
            </div>

        </div>
    ) : "";
}

export default LocationInfoBox
