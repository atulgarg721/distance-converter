(function(){
    "use strict";

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('.container p');
    const answerDiv = document.querySelector('#answer');
    const form = document.querySelector('#convert');
    window.addEventListener('keydown', (event) => {
        if(event.key === 'K'){
            convertType = 'kilometers';
            heading.innerHTML = 'KILOMETERS TO MILES CONVERTER';
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to kilometers.            '
        } else if (event.key === 'M'){
            convertType = 'miles';
            heading.innerHTML = 'MILES TO KILOMETERS CONVERTER';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.            '
        }
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const dist = parseFloat(document.querySelector('#distance').value);
        //here as soon as innerHTML is called all elements in answerDiv tag are erased and new data is stored so no need to removeChild.
        if(dist ){
            if(convertType === 'miles') {
                answerDiv.innerHTML = `<h2>${dist} Miles Converts to ${(dist * 1.609344).toFixed(3)} Kilometers</h2>`;
                document.getElementById('distance').value = '';
            } else if( convertType === 'kilometers') {
                answerDiv.innerHTML = `<h2>${dist} Kilometers Converts to ${(dist / 1.609344).toFixed(3)} Miles </h2>`;
                document.getElementById('distance').value = '';
            } 
        } else {
            answerDiv.innerHTML = "<h2>Please Enter a Number</h2>"
        }
    });

})();