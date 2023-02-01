(async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    const chart = document.querySelector("#chart");
    const date = new Date();
    const dayOfWeek = date.getDay()
    console.log(dayOfWeek)
    let counter = 1


data.forEach(day => {
    let chartDiv = document.createElement('div');
    chartDiv.classList.add(counter++);

    let percentageElement = document.createElement("span");
    percentageElement.classList.add("percentage-data");
    percentageElement.textContent = `${day.amount}`;
    percentageElement.style.visibility = "hidden";
    chartDiv.append(percentageElement);
    

    let chartData = document.createElement('span');
    chartData.classList.add("chart-data");
    chartData.style.height = `${day.amount}%`;
    chartDiv.append(chartData);

    let weekDaysElement = document.createElement('span');
    weekDaysElement.classList.add("week-days");
    weekDaysElement.textContent = day.day;
    chartDiv.append(weekDaysElement);

    chart.append(chartDiv);

});

// adding a variable for all the children elements within the chart
const chartNodes = chart.childNodes
// show the chart active color depending on day of the week
for (let i = 0; i < chartNodes.length; i++) {
    if (dayOfWeek == chartNodes[i].classList) {
        chartNodes[i].children[1].classList.add("active")
        break
    }
}

// add variable name to new created element= chartData
const chartData = document.querySelectorAll(".chart-data")
// changing visibility so it shows percentage divs on hover
chart.addEventListener('mouseover', e => {
    for (let i = 0; i < chartData.length; i++ ) {
        if (e.target == chartData[i]) {
            chartData[i].previousSibling.style.visibility = "visible"
        }
    }
})

chart.addEventListener("mouseout", e => {
    for( let i = 0; i < chartData.length; i++ ) {
        if(e.target == chartData[i]) {
            chartData[i].previousSibling.style.visibility = "hidden"
        }
    }
})




})();