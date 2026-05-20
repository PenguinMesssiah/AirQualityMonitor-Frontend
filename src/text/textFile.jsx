export const motivation = (
    <p>
        We understand that <b>the city of Pittsburgh, along with the greater Pittsburgh area, has historically suffered from poor/hazardous air quality</b>, stemming from the rise and fall of the US steel industry. 
        However, despite previous economic initiatives to improve the region's air quality, we acknowledge the ongoing harm to our neighborhood communities caused by the U.S. Steel facilities known as the Clairton Coke Works and the Irvin and Edgar Thomson steel mills [1]. 
        <b> We are motivated to empower local community members to learn fundamental engineering and software concepts to develop a cluster of air-quality monitoring units to better assess, record, and understand their built environment to make more informed decisions on their health and safety.</b>
    </p>
);

export const motivationSource = (
    <>
        [1] Douglas H. Phelps, President and Executive Director, Phelps, D. H., & Director, P. and E. (2024, January 29). Cleaner Air in Steel City. The Public Interest Network <br/>  
        <a href="https://publicinterestnetwork.org/articles/cleaner-air-in-steel-city/"
            target="_blank">
             https://publicinterestnetwork.org/articles/cleaner-air-in-steel-city/
        </a>
    </>
);

export const EPA = (
    <div>
        The <b>U.S. Air Quality Index (AQI) is a standardized scale developed by the Environmental Protection Agency (EPA)</b> to communicate how clean or polluted outdoor air is and what health effects people might experience. 
        The index runs from 0 to 500, with higher values indicating greater pollution and greater health risk. 
        <b> It is divided into six color-coded categories:</b>
            <ol>
                <li className="text-green-600">Green (0–50, Good)</li>
                <li className="text-yellow-500">Yellow (51–100, Moderate)</li>
                <li className="text-orange-500">Orange (101–150, Unhealthy for Sensitive Groups)</li>
                <li className="text-red-600">Red (151–200, Unhealthy)</li>
                <li className="text-purple-700">Purple (201–300, Very Unhealthy)</li>
                <li className="text-red-900">Maroon (301+, Hazardous)</li>
            </ol>
        An AQI value of 100 generally corresponds to the level of the short-term National Ambient Air Quality Standard for a given pollutant, meaning values at or below 100 are generally considered satisfactory. 
        The EPA tracks five major pollutants regulated under the Clean Air Act: ground-level ozone, particulate matter (PM2.5 and PM10), carbon monoxide, nitrogen dioxide, and sulfur dioxide. While air pollution can affect anyone, children, older adults, people with asthma or cardiovascular disease, and those who work or exercise outdoors are particularly vulnerable.
        <b> Our system tracks temperature, humidity, along with particle matter at sizes 2.5um (PM2.5 microns), 10um (PM10 microns), and all particles greater than 0.3um (PM03 microns).</b>
    </div>
);

export const EPA_Citations= (
    <>
        [1] American Lung Association. (n.d.). Air quality index.
        <a href="https://www.lung.org/clean-air/outdoors/air-quality-index"
            target="_blank">
            https://www.lung.org/clean-air/outdoors/air-quality-index
        </a>
        <br/>
        [2] U.S. Environmental Protection Agency. (n.d.). AQI basics. AirNow.
        <a href="https://www.airnow.gov/aqi/aqi-basics/"
            target="_blank">
            https://www.airnow.gov/aqi/aqi-basics/
        </a>
        <br/>
        [3] U.S. Environmental Protection Agency. (2025, May 23). Patient exposure and the air quality index.
        <a href="https://www.epa.gov/pmcourse/patient-exposure-and-air-quality-index"
            target="_blank">
            https://www.epa.gov/pmcourse/patient-exposure-and-air-quality-index
        </a>
    </>
);