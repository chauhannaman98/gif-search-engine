/* 1. Grab the input value */

var button = document.querySelector(".js-go");
button.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);
});

/* 2. do the data stuff with the API */



/* 3. Show me the GIFs */
function pushToDOM(input)    {
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}