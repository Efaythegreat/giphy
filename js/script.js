// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$(".search-button").click(function(){
  
  let userInp = $(".search-term").val()
  var url = "https://api.giphy.com/v1/gifs/search?q="+userInp+"&rating=pg&api_key=0QWo251rlBvxhbXSYfmIZPQt6jKo0HIZ"


  fetch(url)

  .then(function(response){
    return response.json()
    
  })
  .then(function(data){
    console.log(data.data)
    
    let rng = Math.floor(Math.random() * data.data.length )
    
    
  $(".main").append("<img src="+data.data[rng].images.original.url+">")

  })
  
});

