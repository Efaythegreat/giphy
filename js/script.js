// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$(".search-button").click(function(){
  
  let userInp = $(".search-term").val()
  var url = `https://api.giphy.com/v1/gifs/search?q=${userInp}&rating=pg&api_key=dc6zaTOxFJmzC1`


  fetch(url)

  .then(function(response){
    return response.json()
    
  })
  .then(function(data){
    //console.log(data)
    console.log(data)
    
  $(".main").append(`<img src="${data}">`)
    
  })
  
});

