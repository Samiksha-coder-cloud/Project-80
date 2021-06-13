var Guest_Array = [];

function Submit() {
    var guest_Name = document.getElementById("enter_Name").value;
    Guest_Array.push(guest_Name);
    document.getElementById("display_Names").innerHTML=Guest_Array;
    console.log(Guest_Array);
    var length_of_Array = Guest_Array.length;
    console.log(length_of_Array);
}

function show_List() {
    var i = Guest_Array.join("<br>");
    console.log(Guest_Array);
    document.getElementById("show_Names").innerHTML = i.toString();
}

function sort_List() {
    Guest_Array.sort();
    var i = Guest_Array.join("<br>");
    console.log(Guest_Array);
    document.getElementById("sort_Names").innerHTML = i.toString();
}

function search() {
    var j = document.getElementById("search_Names").value;
    var found = 0;
    var k;
    for (k = 0; k < Guest_Array.length; k++) {
        
        if (j==Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("search_Names").innerHTML = "Name Found"  + found +  "Time/s";
    console.log("Found Name" +found+ "Time/s");
}
