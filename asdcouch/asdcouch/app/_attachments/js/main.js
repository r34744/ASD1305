// Gregory Koenig
// ASD 1305


// use .on() instead of .bind()
//

$(document).on('pageinit', '#home', function(){
	//code needed for home page goes here
});	
		
$(document).on('pageinit', '#races', function(){
     
     $.couch.db("asdteams").view("app/races", {
        success: function(data) {
           $("#racelist").empty();
           $.each(data.rows,function(index, date){
           var date = (date.key);
            $("#racelist").append(
           	$("<li>").append(
           	$("<a>").attr("href", "pastrace.html?date="+date)
           		.text(date)
           		)
           	);
       	});
       	$("#racelist").listview("refresh");
       	}
       });
   
});


	
	



$(document).on('pageinit', '#pastrace', function(){
		var urlData = $(this).data("url");
		var urlParts = urlData.split("?");
		var urlPairs = urlParts[1].split("&");
		var urlValues = {};
		for (var pair in urlPairs) {
			var keyValue = urlPairs[pair].split("=");
			var key = decodeURIComponent(keyValue[0]);
			var value= decodeURIComponent(keyValue[1]);
			urlValues[key] = value;
		}
		//console.log(urlValues);
	
	var racedate = urlValues["date"];
	//console.log(racedate);
	
	$.couch.db("asdteams").view("app/singlerace", {
        key: racedate,
        success: function(data) {
		$("#pastracecontent").empty();
		//console.log(data);
		 $.each(data.rows,function(index, race){
           var date = (race.key);
          	$("#pastracecontent").append(
           		$("<h1>").text(racedate)
           	);
          	
          	$("#pastracecontent").append(
           		$("<table>").attr("id", "resulttable")
           	);
           $("#resulttable").attr("class", "table-stripe");
           	
           	$("#resulttable").append(
           		$("<thead>").append(
           			$("<tr>").attr("id", "teamtablehead").append(
           				$("<th>").text("School")
           				
           			)
           		)
           	);
            
            $("#teamtablehead").append(
           			$("<th>").text("Race #1")
           	);
           					
           	$("#teamtablehead").append(
           			$("<th>").text("Race #2")
           	);					
            
            
            $("#resulttable").append(
           		$("<tr>").attr("id", "team1table").append(
           			$("<th>").text(race.value.teamname1)
           		)
           	);
            $("#resulttable").append(
           		$("<tr>").attr("id", "team2table").append(
           			$("<th>").text(race.value.teamname2)
           		)
           	);
           	$("#resulttable").append(
           		$("<tr>").attr("id", "team3table").append(
           			$("<th>").text(race.value.teamname3)
           		)
           	);
           $("#resulttable").append(
           		$("<tr>").attr("id", "team4table").append(
           			$("<th>").text(race.value.teamname4)
           		)
           	);
           	$("#resulttable").append(
           		$("<tr>").attr("id", "team5table").append(
           			$("<th>").text(race.value.teamname5)
           		)
           	);
           	$("#resulttable").append(
           		$("<tr>").attr("id", "team6table").append(
           			$("<th>").text(race.value.teamname6)
           		)
           	);
           	
          	$("#team1table").append(
           		$("<td>").text(race.value.team1race1)
           	);
           	$("#team1table").append(
           		$("<td>").text(race.value.team1race2)
           	);
           	
           	$("#team2table").append(
           		$("<td>").text(race.value.team2race1)
           	);
           	$("#team2table").append(
           		$("<td>").text(race.value.team2race2)
           	);
           	
           	$("#team3table").append(
           		$("<td>").text(race.value.team3race1)
           	);
           	$("#team3table").append(
           		$("<td>").text(race.value.team3race2)
           	);
           	
           	$("#team4table").append(
           		$("<td>").text(race.value.team4race1)
           	);
           	$("#team4table").append(
           		$("<td>").text(race.value.team4race2)
           	);
           	
           	$("#team5table").append(
           		$("<td>").text(race.value.team5race1)
           	);
           	$("#team5table").append(
           		$("<td>").text(race.value.team5race2)
           	);
           	
           	$("#team6table").append(
           		$("<td>").text(race.value.team6race1)
           	);
           	$("#team6table").append(
           		$("<td>").text(race.value.team6race2)
           	);
       	});
       	//$("#pastracecontent").listview("refresh");
       	}
       });

});


$(document).on('pageinit', '#newRace', function(){
     
    
    
    
    var errorlink = $('#errorlink');
    var savedlink = $('#savedlink');
    var teamNamesForm = $("#teamNamesForm");
    
    $('#teamNamesForm').submit(function() {
  		var formSerial = $(this).serialize();
  		console.log(formSerial);
  		var splitForm = formSerial.split("&");
  		console.log(splitForm);
		});
        
       
        
        
        
        
    
    
});

$(document).on('pageinit', '#Race', function(){
	$.ajax({
        "url": "_view/races",
        "dataType": "json",
        "success": function(data) {
           $.each(data.rows,function(index, team){
           var teamName = team.value.teamname1;
           var race1 = team.value.team1race1;
           var race2 = team.value.team1race2;
           $("#racebuttons1").append(
           	$("<button>").attr("class", "racebutton").attr("data-role", "button").text(teamName)
           
           	);
       	});
       	$("#racebuttons1").listview("refresh");
       	}
       });
    
  
});

$(document).on('pageinit', '#Race2', function(){
	 
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


$(document).on('pageinit', '#Results', function(){
     
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


