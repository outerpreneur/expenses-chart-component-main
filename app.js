(async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    const chart = document.querySelector("#chart");
    const date = new Date();
    const dayOfWeek = date.getDay()
    let counter = 0


data.forEach(day => {
    let chartDiv = document.createElement('div');
    chartDiv.classList.add(counter++);
    console.log(counter)

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


})();