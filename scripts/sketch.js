$(document).ready(function(){

var pixCounts;

var initial = prompt("how detailed ya wanna get here?","1-200");
    pixCount = initial;
	runCalc();

function reset(){
	var newNumber = prompt("how detailed ya wanna get here?","1-200");
    pixCount = newNumber;
    $('.row').css({'background-color':'#002D62'})
    $('.row').remove();
    runCalc();
};


function runCalc(){
			var rowNum = $('.row').length;
		var addRow = function(number){
			$('#container').append('<div class="row"></div>')
		}
		for(; rowNum < pixCount * pixCount; rowNum++){
			addRow();
		};

	var divWidth = 450 / pixCount;

	$(".row").css({"width": divWidth, "height": divWidth});

	$(".row").mouseenter(function(){
		$(this).css({'background-color':'#FFFFFF'})
	});
};
	





$('button').click(reset);

});
