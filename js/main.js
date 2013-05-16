// Gregory Koenig
// ASD 1305


// use .on() instead of .bind()
//

$('#addTeams').on('pageinit', function(){
    
    $(function(){
        var operation = "A"; //"A"=Adding; "E"=Editing
        var selected_index = -1; //Index of the selected list item
        var teamNames = localStorage.getItem("teamNames");//Retrieve the stored data
        teamNames = JSON.parse(teamNames); //Converts string to object
        if(teamNames == null) //If there is no data, initialize an empty array
        teamNames = [];
    });

  
    var addTeams = function(){
        var team = JSON.stringify({
            Race1: 0,
            Race2: 0
        });
        teamNames.push(team);
        localStorage.setItem("teamNames", JSON.stringify(teamNames));
        alert("The data was saved.");
        return true;
    }
    
    var editTeams = function (){
        teamNames[selected_index] = JSON.stringify({
            Race1: 0,
            Race2: 0
        });//Alter the selected item on the table
        localStorage.setItem("teamNames", JSON.stringify(teamNames));
        alert("The data was edited.")
        operation = "A"; //Return to default value
        return true;
    }
    
    var deleteTeams = function (){
        teamNames.splice(selected_index, 1);
        localStorage.setItem("teamNames", JSON.stringify(teamNames));
        alert("teams deleted");
    }

    var listTeams = function (){       
        $("#tblList").html("");
        $("#tblList").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Name</th>"+
        "   <th>Race #1</th>"+
        "   <th>Race #2</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
        for(var i in teamNames){
            var teamN = JSON.parse(teamNames[i]);
            $("#tblList tbody").append("<tr>"+
                                     "  <td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
                                     "  <td>"+teamN.Race1+"</td>" +
                                     "  <td>"+teamN.Race2+"</td>" +
                                     "</tr>");
        }
    }
    
    
});    

