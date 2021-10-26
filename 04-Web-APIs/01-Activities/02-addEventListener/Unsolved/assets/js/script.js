// TODO: Create a variable to hold the count
var count = 0;

// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var countEl = document.querySelector("#count");
var decrementEl = document.getElementById("decrement");
var incrementEl = document.getElementById("increment");

// TODO: Create a function that displays the current count on the page
function setCountText() {
    countEl.textContent = count;
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
var calbackFunc = function(){
    count = count+1
    setCountText()
}
incrementEl.addEventListener('click', calbackFunc)

// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
decrementEl.addEventListener('click', function(){
    if (count > 0) {
        count=count-1;
        setCountText()
    }
})