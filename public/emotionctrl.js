app.controller('ctrl1' ,function($scope,$http)
{     
         var name=$scope.name;
         console.log(name);
         var res = {
         method : 'POST',
         url : '/sample4',
         headers: 
         {
            'Content-Type': 'Application/json'
         },
         data: 
         {
            name: name,
         }
}
$http(res).then(function(response){
$scope.names = response.data;
    
    CanvasJS.addColorSet("greenShades",
    [
        "#3498db",
        "#e74c3c",
        "#9b59b6",
        "#f1c40f",
        "#2ecc71"
        
        
    ]);
                         
var chart = new CanvasJS.Chart("chartContainer", 
{
	backgroundColor:"transparent",
    colorSet:"greenShades",
        title:
		{
          text: "emotions",
           fontColor:"black"
          
          
          
        },
        animationEnabled: true,
        theme: "theme1",
        dataPointMaxWidth: 10,
        data: [
        {
            type: "doughnut",
            indexLabelFontFamily: "Garamond",
            indexLabelFontSize: 20,
            startAngle: 0,
            indexLabelFontColor: "black",
            indexLabelLineColor: "darkgrey",
            toolTipContent: "{y} %",
            dataPointMaxWidth: 60,
            dataPoints: [
              { y: $scope.names.sadness, indexLabel: "sadness " },
			  { y: $scope.names.anger, indexLabel: "anger" },
              { y:$scope. names.fear, indexLabel: "fear" },
			  { y: $scope.names.joy, indexLabel: "joy " },
              { y: $scope.names.disgust, indexLabel: "disgust" },
              
            ]
          }
        ]
});

chart.render();
})
})


		 