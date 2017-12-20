$(document).ready(function(){
    $("#cityname").keypress(function(event) {
        if(event.keyCode == "13") {
            $("#submit").trigger("click");
        }
    });

    $("#submit").click(function(){           
        var city = $("#cityname").val();           
        var weatherData = {
            cityname: city,
            key: "a248f6fc6630295acd8a0ac76e6c0e8c",
        };

        $.get('/weather', weatherData, function(data){
        var html = "";
        html += "<h2 class='title'>今日天气:</h2><br><ul class='list-group'>";
        $.each(data.result.today, function(key, val) {
            if (typeof val !== "object"){
                html += "<li class='list-group-item list-group-item-success'>" + key + " : " + val +"</li>";
            }
        })
        html += "</ul><h2 class='title'>未来天气：</h2><br>";
        $.each(data.result.future, function(key, val){
            html += "<h4 class='future'>" + key + "</h4><ul class='list-group'>";
            $.each(data.result.future[key], function(key, val) {
                if (typeof val !== "object"){
                    html += "<li class='list-group-item list-group-item-success'>" + key + " : " + val +"</li>";
                }
            });
            html += "</ul>";   
            
        });
        html = html.replace(/city/g, "城市").replace(/weather/g, "天气").replace(/week/g, "星期")
        .replace(/temperature/g, "温度").replace(/wind/g, "风向").replace(/date(_y)?/g, "日期")
        .replace(/dressing_index/g, "天气指数").replace(/dressing_advice/g, "穿衣建议")
        .replace(/uv_index/g, "紫外线指数").replace(/comfort_index/g, "舒适指数")
        .replace(/wash_index/g, "洗衣").replace(/travel_index/g, "旅行").replace(/exercise_index/g, "锻炼")
        .replace(/drying_index/g, "干燥指数");
        $("#weather").html(html);
        console.log(data);
        console.log(html);
});
});
});