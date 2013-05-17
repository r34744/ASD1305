// Gregory Koenig
// ASD 1305


// use .on() instead of .bind()
//


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addTeams').on('pageinit', function(){
    
    var parseForm = function(data) {
    console.log(data);   
    }
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
            //html += '<li>' + "Good Job!" + '</li>';
            //$("#saved").html(html);
        }
        
    });
    
    var clearLocal = function(){
        localStorage.clear();
        return false;
    };
    
    
});

$('#Race').on('pageinit', function(){
	$("#race1").prepend('<button id="team6" data-role="button" data-inline="true"></button>');
	$("#race1").prepend('<button id="team5" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team4" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team3" data-role="button" data-inline="true"></button>');
	$("#race1").prepend('<button id="team2" data-role="button" data-inline="true"></button>');
    $("#race1").prepend('<button id="team1" data-role="button" data-inline="true"></button>');
    
    for (var i=0, j=localStorage.length; i<j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
    };
    
    console.log(object[0].value);
    
    var Team1 = "TEEM";
    

    $('button#team1').text(Team1);
    $("button#team2").text("Team2");
    
    
    
        

    
    
    
    
    
});	



