var PieChart = function() {
  var container = document.querySelector("#pie-chart");
  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
       text: "Harry Potter Characters"
    },
    series: [
      {
         name: "Type",
          data: [
            {
                name: "Gryffindor",
                y: 10,
                color: "#B00000",
                 sliced:true
              },
              {
                  name: "Huffelpuff",
                  y: 2,
                  color: "#ffac33",
                   sliced:true
                },
              {
                name: "RavenClaw",
                y: 3,
                color: "#73b7ff",
                 sliced:true
              },
              {
                name: "Slytherin",
                y: 8,
                color: "#00ba2f",
                 sliced:true
              }]
       }]
  });


}
