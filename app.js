function sayWhat(evt) {
    const text = document.querySelector('#thetext');
    if (text.innerText == "") {
            text.innerText = "Chicken Butt";

    }
    else {
            text.innerText = "";

    }
}


document.querySelector('#Guess').addEventListener('click', sayWhat);