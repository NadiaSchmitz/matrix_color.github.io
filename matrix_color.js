var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)"];
var color_number;
var color;
;

$(document).ready(function() {
    var i = 1;
    while (i <= 16) {
        color_number = Math.round(Math.random() * 3);
        $("." + i).css("background-color", colors[color_number]);
        i++;
    }
    colorStatistic();
});

function colorStatistic() {
    var j = 1;
    var red_number = 0;
    var green_number = 0;
    var blue_number = 0;
    var yellow_number = 0
    while (j <= 16) {
        if ($("." + j).css("background-color") == "rgb(255, 0, 0)" ) {
            red_number++;
        } else if ($("." + j).css("background-color") == "rgb(0, 255, 0)") {
            green_number++;
        } else if ($("." + j).css("background-color") == "rgb(0, 0, 255)") {
            blue_number++;
        } else if ($("." + j).css("background-color") == "rgb(255, 255, 0)") {
            yellow_number++;
        }
        j++;
    }
    $(".red_number").html(red_number);
    $(".green_number").html(green_number);
    $(".blue_number").html(blue_number);
    $(".yellow_number").html(yellow_number);
};

$(function () {
    $(".matrix_color_block").click(function(evt) {
        var block_color;
        var radio_i = 0;
        while(radio_i < 4) {
            if($("input:checked")) {
                block_color = $("input:checked").prop("value");
                $(evt.target).css("background-color", block_color);
                
            }
            radio_i++;
        }
        colorStatistic()
    })
});


 