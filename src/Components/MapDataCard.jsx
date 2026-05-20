import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function MapDataCard({
    locationName = "Select a location",
    aqi = null,
    temperature = null,
    humidity = null,
    sensorTimestamp = null,
    isVisible = false,
    onClose
}) {

    // Function to determine AQI color and category
    const getAQIInfo = (aqiValue) => {
        if (aqiValue === null) return { color: '#6c757d', category: 'No Data', textColor: 'white' };
        if (aqiValue <= 50) return { color: '#00e400', category: 'Good', textColor: 'black'};
        if (aqiValue <= 100) return { color: '#ffff00', category: 'Moderate', textColor: 'black' };
        if (aqiValue <= 150) return { color: '#ff7e00', category: 'Unhealthy for Sensitive Groups', textColor: 'white' };
        if (aqiValue <= 200) return { color: '#ff0000', category: 'Unhealthy', textColor: 'white' };
        if (aqiValue <= 300) return { color: '#8f3f97', category: 'Very Unhealthy', textColor: 'white' };
        return { color: '#7e0023', category: 'Hazardous', textColor: 'white' };
    };

    const aqiInfo = getAQIInfo(aqi);
    
    const getSensorStatus = (sensorTimestamp) => {
        try {
            const date = new Date(sensorTimestamp);
            const now = new Date();
    
            const diffMs = now - date;
            const diffHours = Math.floor(diffMs / 3600000);
            const diffDays = Math.floor(diffMs / 86400000);
            
            if(diffHours < 12) {
                return (<>
                    <p className="text-green-700 font-semibold medium mt-0 mb-0 text-center">
                        Sensor Online
                    </p>
                </>)
            } else if (diffHours >= 12 && diffHours <=24 ) {
                return (<>
                    <p className="text-yellow-700 font-semibold medium mt-0 mb-0 text-center">
                        {`Sensor offline for ${diffHours} hour${diffHours !== 1 ? 's' : ''}`}
                    </p>
                </>)
            } else if (diffDays >= 1) {
                return (<>
                    <p className="text-yellow-700 font-semibold medium mt-0 mb-0 text-center">
                        {`Sensor offline for ${diffDays} day${diffDays !== 1 ? 's' : ''}`}
                    </p>
                </>)
            } else {
                return (<>
                    <p className="text-yellow-700 font-semibold medium mt-0 mb-0 text-center">
                        {"Sensor offline since " + date.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </p>
                </>)
            }
        } catch (error) {
            return 'Invalid date';
        }
    }
    let sensorStatus = getSensorStatus(sensorTimestamp);

    if (!isVisible) return null;

    return (
        <Card
            className="map-data-card shadow-lg border-0"
            style={{
                position: 'absolute',
                top: '6%',
                zIndex: 1000,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <Card.Header
                className="d-flex justify-content-between align-items-center py-2"
                style={{ backgroundColor: '#0d6efd', color: 'white' }}
            >
                <h6 className="mb-0 fw-semibold">Location Data</h6>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="btn-close btn-close-white"
                        aria-label="Close"
                        style={{ fontSize: '0.75rem' }}
                    />
                )}
            </Card.Header>

            <Card.Body className="p-3">
                {/* Location Name */}
                <div className="mb-3 pb-2 border-bottom">
                    <p className="text-muted small mb-1">LOCATION</p>
                    <h6 className="mb-0 fw-semibold text-dark">{locationName}</h6>
                </div>

                {/* AQI Display */}
                <div className="mb-3">
                    <p className="text-muted small mb-2">AIR QUALITY INDEX (AQI)</p>
                    <div
                        className="rounded-3 p-3 text-center"
                        style={{
                            backgroundColor: aqiInfo.color,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <div
                            className="display-4 fw-bold mb-1"
                            style={{ color: aqiInfo.textColor }}
                        >
                            {aqi !== null ? aqi : '—'}
                        </div>
                        <div
                            className="small fw-semibold"
                            style={{ color: aqiInfo.textColor }}
                        >
                            {aqiInfo.category}
                        </div>
                    </div>
                </div>

                {/* Temperature and Humidity Grid */}
                <div className="row g-2">
                    <div className="col-6">
                        <div
                            className="border rounded-3 p-2 text-center"
                            style={{ backgroundColor: '#f8f9fa' }}
                        >
                            <p className="text-muted small mb-1">TEMPERATURE</p>
                            <h4 className="mb-0 fw-bold text-primary">
                                {temperature !== null ? `${temperature}°F` : '—'}
                            </h4>
                        </div>
                    </div>
                    <div className="col-6">
                        <div
                            className="border rounded-3 p-2 text-center"
                            style={{ backgroundColor: '#f8f9fa' }}
                        >
                            <p className="text-muted small mb-1">HUMIDITY</p>
                            <h4 className="mb-0 fw-bold text-primary">
                                {humidity !== null ? `${humidity}%` : '—'}
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Last Updated (Optional - for future use) */}
                <div className="mt-3 pt-2 border-top">
                    {sensorStatus}
                </div>
            </Card.Body>
        </Card>
    );
}

MapDataCard.propTypes = {
    locationName: PropTypes.string,
    aqi: PropTypes.number,
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
};

export default MapDataCard;
