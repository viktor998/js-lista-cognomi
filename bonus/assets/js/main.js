var cognomi = [ "Giammario", "Aron", "Mastrobattista", "Barone", "Lodigiani", ""];
var myList = document.getElementById("List");
var cognomiFirst= 0;
var cognomiSecond= 0;
var len = cognomi.length;
var cognomeUtente =prompt("Inserisci il tuo cognome") ;
var humanOrder;
if(isNaN){
    cognomi.push(cognomeUtente);
    cognomi.sort();
}

for (var i = 0; i < len; i++) {
    for(var j = 0 ; j < len - 1 ; j++){
        cognomiFirst = Array.from(cognomi[j]);
        cognomiSecond = Array.from(cognomi[j+ 1]);
        
        if(cognomiFirst[0] > cognomiSecond[0]){
            
            var temp = cognomi[j];
            cognomi[j] = cognomi[j +1];
            cognomi[j + 1]= temp;
        }   
    }   
}

for (var i = 1; i < cognomi.length ; i++) {
    humanOrder = cognomi.indexOf(cognomi[i]);
    console.log(humanOrder + " " + cognomi[i]);
    myList.innerHTML += "<li>"+ humanOrder + "  " + cognomi[i]+"</li>";
}

console.log(cognomi);