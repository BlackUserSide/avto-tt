import {MapContainer} from "./MapContainer.tsx";

export const EmergencyService = () => {
    return (
        <>
            <div className="emergency-service">
                <div className="title-container">
                    <h3 className="h3">Emergency Tow Truck Services</h3>
                    <p>Get immediate assistance for your vehicle</p>
                </div>
                <div className="map-containeer">
                    <MapContainer/>
                </div>
            </div>
        </>
    )
}