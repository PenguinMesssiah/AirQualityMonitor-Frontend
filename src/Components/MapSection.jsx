import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer } from 'react-leaflet'
import MapDataCard from '@/Components/MapDataCard'
import 'leaflet/dist/leaflet.css'

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

function MapSection({ markerList, selectedDevice, onClose }) {
    const temperature = selectedDevice
        ? Math.round((selectedDevice.temperature * 9 / 5) + 32)
        : null;

    const aqiDisplay = (selectedDevice) => {
        if (selectedDevice?.device_quality != 0) {
            return selectedDevice?.device_quality;
        } else if (selectedDevice?.particle_03um != 0) {
            return selectedDevice?.particle_03um;
        } else {
            return null;
        }
    }
    
    return (
        <div style={{ position: 'relative' }}>
            <MapDataCard
                locationName={selectedDevice?.displayName ?? "Select a Location"}
                aqi={aqiDisplay(selectedDevice)}
                temperature={temperature}
                humidity={selectedDevice ? Math.round(selectedDevice.humidity) : null}
                sensorTimestamp={selectedDevice ? selectedDevice.timestamp : null}
                isVisible={selectedDevice !== null}
                onClose={onClose}
            />

            <MapContainer
                center={[40.40666, -79.94271]}
                zoom={13}
                className="max-w-full rounded-md pb-6"
                style={{ height: '500px' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markerList}
            </MapContainer>
        </div>
    );
}

export default MapSection;
