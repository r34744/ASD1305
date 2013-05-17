// Gregory Koenig
// ASD 1305


// use .on() instead of .bind()
//


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addTeams').on('pageinit', function(){
    var defaultFillData= function (){
        for ( var n in json){
            var id = Math.floor(Math.random()*100000000);
            localStorage.setItem(id, JSON.stringify(json[n]));
        };
    };
    
    $("#loaddefault").click(defaultFillData());
    
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
            var id;
            if(!key) {
                id = Math.floor(Math.random()*100000000);
                //if same set it as the old.
            }else{
                id = key;
            }
            //parseForm(data);
            localStorage.setItem(id, JSON.stringify(data));
            
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
    
    return false;
    
    
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

