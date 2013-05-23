// Gregory Koenig
// ASD 1305


// use .on() instead of .bind()
//


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#teams').on('pageinit', function(){
     
     $.ajax({
        "url": "_view/races",
        "dataType": "json",
        "success": function(data) {
           $.each(data.rows,function(index, team){
           var teamName = team.value.teamname;
           var race1 = team.value.Race1;
           var race2 = team.value.Race2;
           $("#teamlist").append(
           	$("<li>").append(
           	$("<a>").attr("href", "#Results")
           		.text(teamName)
           		)
           	);
       	});
       	$("#teamlist").listview("refresh");
       	}
       });
    
    
    
    
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
	$.ajax({
        "url": "_view/races",
        "dataType": "json",
        "success": function(data) {
           $.each(data.rows,function(index, team){
           var teamName = team.value.teamname;
           var race1 = team.value.Race1;
           var race2 = team.value.Race2;
           $("#racebuttons1").append(
           	$("<button>").attr("class", "racebutton").attr("data-role", "button").text(teamName)
           
           	);
       	});
       	$("#racebuttons1").listview("refresh");
       	}
       });
    
  
});

$('#Race2').on('pageinit', function(){
	 
    $.ajax({
        "url": "_view/races",
        "dataType": "json",
        "success": function(data) {
           $.each(data.rows,function(index, team){
           var teamName = team.value.teamname;
           var race1 = team.value.Race1;
           var race2 = team.value.Race2;
           $("#racebuttons2").append(
           	$("<button>").attr("class", "racebutton").attr("data-role", "button").text(teamName)
           
           	);
       	});
       	$("#racebutttons2").listview("refresh");
       	}
       });
    
    
    
    
    
    
});	


$('#Results').on('pageinit', function(){
     
     $.ajax({
        "url": "_view/races",
        "dataType": "json",
        "success": function(data) {
           $.each(data.rows,function(index, team){
           var teamName = team.value.teamname;
           var race1 = team.value.Race1;
           var race2 = team.value.Race2;
           var finalScore = race1+race2;
           $("#teamracelist").append(
           	$("<li>").text(teamName + ": Race #1:" +race1+ " Race #2:" +race2+ " Total:" +finalScore)
           	);
       	});
       	$("#teamracelist").listview("refresh");
       	}
       });
    
    
    
    
});


