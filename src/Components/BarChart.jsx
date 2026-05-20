import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function BarChart({title, data}) {
    var chartData = [];
    var max = 0;

    for(var i=0;i<data.length;i++) {
        if(data[i].device_quality!=0) {
            chartData.push({
                label: data[i].device_name,
                y: data[i].device_quality
            })
        } else if (data[i].device_quality===0 && data[i].particle_03um!=0) {
            chartData.push({
                label: data[i].device_name,
                y: data[i].particle_03um
            })
        }
        max=Math.max(max, data[i].device_quality)
    }

    const options = {
            backgroundColor: "#fdfaf6",
            animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
            style: {},
			title:{
				text: title,
                fontColor: "#312e81",  
                textAlign: "center",
                padding: 10,
                margin: 15,
                //backgroundColor: "#879bdd",
                borderThickness: 1,
                cornerRadius: 5,
			},
			axisY: {
				includeZero: true,
                maximum: max+100,
                interval: 50,
                stripLines: [
                    { startValue: 0,   endValue: 50,  color: "#00E400", opacity: 0.125, label: "Good", labelPlacement: "outside", labelFontColor: "#101828",},
                    { startValue: 50,  endValue: 100, color: "#FFFF00", opacity: 0.125, label: "Moderate", labelPlacement: "outside", labelFontColor: "#101828",},
                    { startValue: 100, endValue: 150, color: "#FF7E00", opacity: 0.125, label: "Unhealthy (Sensitive)", labelPlacement: "outside", labelFontColor: "#101828",},
                    { startValue: 150, endValue: 200, color: "#FF0000", opacity: 0.125, label: "Unhealthy",labelPlacement: "outside", labelFontColor: "#101828",},
                    { startValue: 200, endValue: 300, color: "#8F3F97", opacity: 0.125, label: "Very Unhealthy", labelPlacement: "outside", labelFontColor: "#101828",},
                    { startValue: 300, endValue: 500, color: "#7E0023", opacity: 0.125, label: "Hazardous", labelPlacement: "outside", labelFontColor: "#101828",}
                ]
			},
            axisX: {
                interval: 1,
                labelAngle: -45
            },
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
                xValueFormatString: "",
                yValueFormatString: "#",
                dataPoints: chartData
			}]
    }
    
    return (
        <>
        <div style={{ display:'flex', borderRadius: '50%', justifyContent: 'center', width: '80%', margin: '0 auto',}}>
            <CanvasJSChart options={options}/>
        </div>
        </>
    )
};

export default BarChart;