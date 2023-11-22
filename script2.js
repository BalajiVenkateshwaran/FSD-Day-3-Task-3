var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    //By Using REST Countries API We Can Display All The Country Flags In Console
    for (i=0;i<=result.length-1;i++){
        console.log(result[i].flags); // Flags (png.file) Will Display In Console
}
}