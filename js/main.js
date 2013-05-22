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
        
        $('#team1').value = Team1;
        $('#team2').text(Team2);
        $('#team3').text(Team3);
        $('#team4').text(Team4);
        $('#team5').text(Team5);
        $('#team6').text(Team6);
    
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
	$("#race1").prepend('<button id="team6" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race1").prepend('<button id="team5" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team4" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team3" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race1").prepend('<button id="team2" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team1" class="racebutton" data-role="button" data-inline="true"></button>');
    
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
    
    
    $('button#team1').text(Team1);
    $('button#team2').text(Team2);
    $('button#team3').text(Team3);
    $('button#team4').text(Team4);
    $('button#team5').text(Team5);
    $('button#team6').text(Team6);
    
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
    
    $("#team1,#team2,#team3,#team4,#team5,#team6").button(getScore);
    
  
});

$('#Race2').on('pageinit', function(){
	$("#race2").prepend('<button id="team6" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race2").prepend('<button id="team5" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race2").prepend('<button id="team4" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race2").prepend('<button id="team3" class="racebutton" data-role="button" data-inline="true"></button>');
	$("#race2").prepend('<button id="team2" class="racebutton" data-role="button" data-inline="true"></button>');
    $("#race2").prepend('<button id="team1" class="racebutton" data-role="button" data-inline="true"></button>');
    
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
    

    $('button#team1').text(Team1);
    $('button#team2').text(Team2);
    $('button#team3').text(Team3);
    $('button#team4').text(Team4);
    $('button#team5').text(Team5);
    $('button#team6').text(Team6);
    
    return false;
    
    
});	

