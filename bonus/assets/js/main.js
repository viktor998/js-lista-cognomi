var cognomi = [ "Giammario", "Casubolo", "Aro", "Mastrobattista", "Franco", "Baro"];

var cognomiFirst= 0;
var cognomiSecond= 0;



var len = cognomi.length;

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

console.log(cognomi);







// var cognomeUtente =prompt("Inserisci il tuo cognome") ;

var myList = document.getElementById("List");

// if(isNaN){
//     cognomi.push(cognomeUtente);
//     cognomi.sort();
// }

// var humanOrder;

// for (var i = 1; i < cognomi.length ; i++) {
//     humanOrder = cognomi.indexOf(cognomi[i]);
//     console.log(humanOrder + " " + cognomi[i]);
//     myList.innerHTML += "<li>"+ humanOrder + "  " + cognomi[i]+"</li>";
// }


// function bubble_Sort()

// {
    
//     var n= cognomiFirst.length;
//     do {
//         for (let i = 0; i < n; i++) {
            
//             n--;
//         }
//     } while (sort);
//     return cognomiFirst;
// }
// console.log(bubble_Sort());
