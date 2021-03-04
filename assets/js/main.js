var cognomi = ["Giammario", "Mastrobattista", "Lodigiani" , ""];

var cognomeUtente =prompt("Inserisci il tuo cognome") ;

var myList = document.getElementById("List");

if(isNaN){
    cognomi.push(cognomeUtente);
    cognomi.sort();
}

var humanOrder;

for (var i = 1; i < cognomi.length ; i++) {
    humanOrder = cognomi.indexOf(cognomi[i]);
    console.log(humanOrder + " " + cognomi[i]);
    myList.innerHTML += "<li>"+ humanOrder + "  " + cognomi[i]+"</li>";
}
