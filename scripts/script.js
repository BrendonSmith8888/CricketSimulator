let listItems = document.querySelectorAll("ul li");
let homeTeam = "";
let awayTeam = "";

listItems.forEach(function(item) {
  item.onclick = function(e) {
    if(document.getElementById('HomeTeamSelection').innerText===""){
        document.getElementById('HomeTeamSelection').innerText = this.innerText;
        homeTeam = document.getElementById('HomeTeamSelection').innerText;
    }
    else if(document.getElementById('AwayTeamSelection').innerText===document.getElementById('HomeTeamSelection').innerText){
        document.getElementById('AwayTeamSelection').innerText="";
    }
    else if(document.getElementById('AwayTeamSelection').innerText===""){
        document.getElementById('AwayTeamSelection').innerText = this.innerText;
        awayTeam = document.getElementById('AwayTeamSelection').innerText;
        if(document.getElementById('AwayTeamSelection').innerText===document.getElementById('HomeTeamSelection').innerText){
            document.getElementById('AwayTeamSelection').innerText="";
            window.alert("Please select a different team.");
        }
    }
    else{
        window.alert("Teams are selected.  Please either click on the Player Selection button or Change Teams button.");
    }
  }
  
  
});

function changeTeams(){
    document.getElementById('HomeTeamSelection').innerText="";
    document.getElementById('AwayTeamSelection').innerText="";
}

function playerSelectionPanel(){
    if(homeTeam ==="" || awayTeam ===""){
        window.alert("Please make sure you have selected both teams");
    }
}