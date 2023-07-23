var ctx = document.getElementById("my-graph1").getContext('2d')

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [20, ' ', 25, ' ', 30, ' ', 35, ' ', 40, ' ', 60, ' ', 65],
    datasets: [{
      label: 'Employer: K 73,500',
      backgroundColor: "rgb(11, 11, 89)",
      barThickness: 15,
      data: [26, 30, 33, 36, 40, 50, 56, 63, 73, 83, 90, 93, 106],
      stack: 'Stack 1'
    },
    {
      label: "Employee: 52,500",
      backgroundColor: "#3535f3",
      barThickness: 15,
      data: [26, 30, 33, 36, 40, 50, 56, 63, 73, 83, 90, 93, 106],
      stack: 'Stack 1'
    },
    {
      label: "Total Interest: K 244,313",
      backgroundColor: "rgba(83, 82, 237, 0.5)",
      barThickness: 15,
      data: [26, 30, 33, 36, 40, 50, 56, 63, 73, 83, 90, 93, 106],
      stack: 'Stack 1'
    }]
  },
  options:{
    plugins: {
      legend: false
    },
    scales: {
      yAxes: {
        ticks: {
          stepSize: 100,
          callback: function (value){
            return '$' + value;
          }
        }
      }
    }
  }
})
// =================================================================
var ctx = document.getElementById("my-graph2").getContext('2d')

var Mdata = {
  labels: [20, 25, 30, 35, 40, 60, 65],
  datasets: [{
    label: 'Employer: K 73,500',
    backgroundColor: "rgb(11, 11, 89)",
    barThickness: 15,
    data: [26, 33, 40, 56, 73, 90, 106],
    stack: 'Stack 1'
  },
  {
    label: "Employee: 52,500",
    backgroundColor: "rgb(83, 82, 237)",
    barThickness: 15,
    data: [26, 33, 40, 56, 73, 90, 106],
    stack: 'Stack 1'
  },
  {
    label: "Total Interest: K 244,313",
    backgroundColor: "rgba(83, 82, 237, 0.5)",
    barThickness: 15,
    data: [26, 33, 40, 56, 73, 90, 106],
    stack: 'Stack 1'
  }]
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: Mdata,
  options: {
    responsive: true,
  maintainAspectRatio: false,
    plugins: {
      legend: false
    },
    scales: {
      yAxes: {
        ticks: {
          stepSize: 100,
          callback: function (value){
            return '$' + value;
          }
        }
      }
    }
  }
})
// =================================================================
let slOne = document.querySelector(".slider-one")
let slTwo = document.querySelector(".slider-two")
let percent = document.querySelector("#percentage")
let ageValue = document.querySelector("#age")

slOne.value = 12
slTwo.value = 65

slOne.addEventListener("input", function () {
  percent.innerText = slOne.value;
})
slTwo.addEventListener("input", function () {
  ageValue.innerText = slTwo.value;
})

// =====================================================================

var data1 = {
  labels: ['Dark', 'Light'],
  datasets: [{
    data: [78, 22],
    backgroundColor: ['#3DED97', '#cffad9'],
    hoverBackgroundColor: ['#3DED97', '#cffad9'],
  }]
};

var opt1 = {
  responsive: true,
  maintainAspectRatio: true,
  borderWidth: 0,
  cutout: '75%',
  plugins: {
    legend: false,
    doughnutlabel: {
      labels: [
        {
          text: "78%",
          font: {
            size: "24",
            weight: "bold",
          },
          color: "#000000",
        },
      ],
    },
  },
};

var ctx = document.getElementById('doughnutChart1').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data1,
  options: opt1,
});

// ====================================================================

var data2 = {
  labels: ['Dark', 'Light'],
  datasets: [{
    data: [95, 5],
    backgroundColor: ['#3DED97', '#cffad9'],
    hoverBackgroundColor: ['#3DED97', '#cffad9'],
  }]
};

var opt2 = {
  responsive: true, 
  maintainAspectRatio: true,
  borderWidth: 0,
  cutout: '75%',
  plugins: {
    legend: false, 
    doughnutlabel: {
      labels: [
        {
          text: "95%",
          font: {
            size: "24",
            weight: "bold",
          },
          color: "#000000", 
        },
      ],
    },
  },
};

var ctx = document.getElementById('doughnutChart2').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data2,
  options: opt2,
});

// ===========================================================

var data3 = {
  labels: ['Dark', 'Light'],
  datasets: [{
    data: [59, 41],
    backgroundColor: ['#3DED97', '#cffad9'],
    hoverBackgroundColor: ['#3DED97', '#cffad9'],
  }]
};

var opt3 = {
  responsive: true,
  maintainAspectRatio: true,
  borderWidth: 0,
  cutout: '75%',
  plugins: {
    legend: false,
    doughnutlabel: {
      labels: [
        {
          text: "78%",
          font: {
            size: "15",
            weight: "bold",
          },
          color: "#000000",
        },
      ],
    },
  },
};

var ctx = document.getElementById('doughnutChart3').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data3,
  options: opt3,
});