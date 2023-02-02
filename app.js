
window.onload = function (e) {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        for (let obj of res) {
          document.querySelector(
            `.bar-${obj.day} > .value`
          ).textContent = `$${obj.amount}`;
  
          document.querySelector(
            `.bar-${obj.day}`
          ).style.height = `calc(${obj.amount} / 100 * 300px)`;
        }
      });
  };