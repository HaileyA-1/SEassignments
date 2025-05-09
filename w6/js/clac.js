//grab submit button

var submitButton = document.querySelector("#get-age");

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayInfo = document.querySelector("#display-info");

    //Basic Validation
    if(firstName === "", lastName === "", age === ""){
        alert("Please fill in the missing data");
        return;
    }

    var grossp = (Number(grosspay.value) * 2).toFixed();
    var uncleS = (Number(uncleS.value) / 100).toFixed();

    //Output data to the page
    displayInfo.innerHTML = `Here is your info
                            <br>
                            <br>
                            Your grosspay is: ${grossp}
                            <br>
                            Uncle Sam's share is: ${uncleS}`


})