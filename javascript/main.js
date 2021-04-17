/* 1. Grab the input value */

var button = document.querySelector(".js-go");
button.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    searchGIF(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    var input = document.querySelector("input").value;

    // if the key ENTER is pressed ...
    if(e.which === 13)    {
        searchGIF(input);
    }
});

/* 2. do the data stuff with the API */

function searchGIF(input)   {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=y9awkI9u1AaJ3uoCQsMKTr88q9zo4o19&q="+input;

    // AJAX request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(e){
        var data = e.target.response;
        pushToDOM(data);
    });
}

/* 3. Show me the GIFs */
function pushToDOM(input)    {
    // clear old gifs
    var container = document.querySelector(".js-container");
    container.innerHTML = "";

    var response = JSON.parse(input);

    var imageURLs = response.data;

    imageURLs.forEach(function(image){
        var src = image.images.fixed_height.url;
        // console.log(src);
    
        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
}