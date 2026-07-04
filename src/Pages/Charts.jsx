import { useState, useEffect } from 'react'
import BarChart from '@/Components/BarChart';
import { EPA } from '@/text/textFile';
import { EPA_Citations } from '@/text/textFile';
import DeviceDropdown from '@/Components/Dropdown';
import SpineChart from '@/Components/SpineChart';
import Alert from '@/Components/Alert';
import { fetchJsonWithRetry } from '@/utils/fetchWithRetry';

const baseURL = "https://artsexcursionairquality.org"

function ChartsPage() {
    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [deviceData, setDeviceData] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [timeRangeDays, setTimeRangeDays] = useState(30);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                setAlertMessage(null);

                const json = await fetchJsonWithRetry(`${baseURL}/api/sensor_data`);
                console.log("received data = ", json)
                setData(json);
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : "Unknown Error Fetching Average Data";
                setAlertMessage(errorMsg);
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, [])

    useEffect(() => {
        //Null Check
        if (!selectedDevice || selectedDevice === "Average") {
            setDeviceData([]);
            return;
        }

        setDeviceData([]); //Clean Up

        const fetchDeviceData = async () => {
            try {
                setLoading(true);
                setAlertMessage(null);

                const readingsPerDay = (24 * 60) / 5; // sensor reports every 5 minutes
                const limit = timeRangeDays * readingsPerDay;

                const json = await fetchJsonWithRetry(`${baseURL}/api/sensor_data/${selectedDevice}?limit=${limit}`);
                setDeviceData(json);
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : "Unknown Error Retrieving Device Data";
                setAlertMessage(errorMsg);
            } finally {
                setLoading(false);
            }
        };
        fetchDeviceData();
    }, [selectedDevice, timeRangeDays])
    
    useEffect(() => {
        if(deviceData.length > 0) {
            console.log("deviceData = ", deviceData)
        }
    },[deviceData])

    function handleSelect(device) {
        setSelectedDevice(device)
    }

    const deviceNames = ["Average", ...data.map(item => item.device_name)];

    return (
        <>
            <main className="flex-1 w-full justify-center mt-2 font-sans text-indigo-900">
                {alertMessage && (
                    <Alert
                        message={alertMessage}
                        variant="danger"
                        onClose={() => setAlertMessage(null)}
                    />
                )}

                {/* Device and Time Range Selectors */}
                <div className="flex justify-end items-center gap-4 mb-2">
                    <DeviceDropdown deviceNames={deviceNames} onDeviceSelect={handleSelect}></DeviceDropdown>

                    {/* Time Range Selector*/}
                    {selectedDevice!==null && selectedDevice!=="Average" && (
                        <div className="flex justify-start items-center gap-2">
                            <label className="font-medium">Time Range:</label>
                            <select
                                value={timeRangeDays}
                                onChange={(e) => setTimeRangeDays(Number(e.target.value))}
                                className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value={7}>Last 7 Days</option>
                                <option value={14}>Last 14 Days</option>
                                <option value={30}>Last 30 Days</option>
                                <option value={60}>Last 60 Days</option>
                                <option value={90}>Last 90 Days</option>
                                <option value={365}>Last Year</option>
                            </select>
                        </div>
                    )}
                </div>

                {loading && <p>Loading Charts</p>}
                {!loading && (selectedDevice===null || selectedDevice==="Average") && (
                    <BarChart title="Average AQI (PM2.5) Values" data={data}></BarChart>
                )}
                {!loading && selectedDevice!==null && selectedDevice!=="Average" && deviceData.length > 0 &&
                    <SpineChart
                        title={`${selectedDevice}'s Data`}
                        data={deviceData}
                        timeRangeDays={timeRangeDays}
                    ></SpineChart>
                }
                <hr className=''></hr>
                <p className="flex font-medium text-2xl">Real-Time AQI Data Measured Against EPA Standards</p>
                <div className="flex mt-3 text-justify">{EPA}</div>
                <div className=" italic">{EPA_Citations}</div>
            </main>
        </>
    )
};

export default ChartsPage;