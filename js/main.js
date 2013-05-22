// Gregory Koenig
// ASD 1305


// use .on() instead of .bind()
//


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addTeams').on('pageinit', function(){
    
    var defaultFillData= function (){
        $("#addTeams").innerHTML = "";
        var id = Math.floor(Math.random()*100000000);
            localStorage.setItem(id, JSON.stringify(json));
        for (var i=0, j=localStorage.length; i<j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
        };
        var Team1 = object[0].value;
        var Team2 = object[1].value;
        var Team3 = object[2].value;
        var Team4 = object[3].value;
        var Team5 = object[4].value;
        var Team6 = object[5].value;
        
        $('#team1').val(Team1);
        $('#team2').val(Team2);
        $('#team3').val(Team3);
        $('#team4').val(Team4);
        $('#team5').val(Team5);
        $('#team6').val(Team6);
    
    };
    
    
    
    $("#loaddefault").on('click',defaultFillData);
    
    var parseForm = function(data) {
    console.log(data);   
    };
    var errorlink = $('#errorlink');
    var savedlink = $('#savedlink');
    var teamNamesForm = $("#teamNamesForm");
    
    teamNamesForm.validate({
        invalidHandler: function(form, validator){
            var html='';
            for (var key in validator.submitted){
                var label = $('label[for^="' + key +'"]').not('[generated]');
                var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldName = legend.length ? legend.text() : label.text();
                html += '<li>' + fieldName + '</li>';
            };
           
        },
        submitHandler: function(key){
            var data= teamNamesForm.serializeArray();
            var html='';
            
            if(!key) {
                var id = Math.floor(Math.random()*100000000);
                //if same set it as the old.
                localStorage.setItem(id, JSON.stringify(data));
            }else{
                var id = key;
                localStorage.setItem(id, JSON.stringify(data));
            }
            //parseForm(data);
            alert("Teams are saved");
            
        }
        
    });
    
    var clearLocal = function(){
        localStorage.clear();
        return false;
    };
    
    
});

$('#Race').on('pageinit', function(){
	$("#race1").prepend('<button id="team6finish" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race1").prepend('<button id="team5finish" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team4finish" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team3finish" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race1").prepend('<button id="team2finish" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team1finish" class="racebutton" data-role="button" data-inline="true"></button>');
    
    for (var i=0, j=localStorage.length; i<j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
    };
    
    var Team1 = object[0].value;
    var Team2 = object[1].value;
    var Team3 = object[2].value;
    var Team4 = object[3].value;
    var Team5 = object[4].value;
    var Team6 = object[5].value;
    
    
    $('button#team1finish').text(Team1);
    $('button#team2finish').text(Team2);
    $('button#team3finish').text(Team3);
    $('button#team4finish').text(Team4);
    $('button#team5finish').text(Team5);
    $('button#team6finish').text(Team6);
    
    var place = 0;
    var score = 0;
    var getScore = function(){
        
        if(place === 0){
            score = 10;
            place = 1;
        }else    
            if(place === 1){
                score = 9;
                place = 2;
            }else    
                if(place === 2){
                    score = 8;
                    place = 3;
                }else    
                    if(place === 3){
                        score = 7;
                        place = 4;
                    }else    
                        if(place === 4){
                            score = 6;
                            place = 5;
                        }else    
                            if(place === 5){
                            score = 5;
                            place = 6;
                        }
        return score;
        return place;
        console.log(score);
        console.log(place);
    }; 
    
    $("#team1finish,#team2finish,#team3finish,#team4finish,#team5finish,#team6finish").button(getScore);
    
  
});

$('#Race2').on('pageinit', function(){
	$("#race2").prepend('<button id="team6finish" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race2").prepend('<button id="team5finish" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race2").prepend('<button id="team4finish" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race2").prepend('<button id="team3finish" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race2").prepend('<button id="team2finish" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race2").prepend('<button id="team1finish" class="racebutton" data-role="button" data-inline="true"></button>');
    
    for (var i=0, j=localStorage.length; i<j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
    };
    
    var Team1 = object[0].value;
    var Team2 = object[1].value;
    var Team3 = object[2].value;
    var Team4 = object[3].value;
    var Team5 = object[4].value;
    var Team6 = object[5].value;
    

    $('button#team1finish').text(Team1);
    $('button#team2finish').text(Team2);
    $('button#team3finish').text(Team3);
    $('button#team4finish').text(Team4);
    $('button#team5finish').text(Team5);
    $('button#team6finish').text(Team6);
    
    return false;
    
    
});	

