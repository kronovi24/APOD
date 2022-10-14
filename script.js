


var apod = document.querySelector("#apod");



const get_date = () => {
    let x = document.getElementById("datePicker").value;
    document.getElementById("dateGet").innerHTML = x;

    var date = new Date(x);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (year < 1995 || year > 2022) {
        alert("Input date must be between 16-05-1995 and 09-06-2022")
    } else {

        fetch(`https://api.nasa.gov/planetary/apod?api_key=fwBu9eEqs5xyXcfnaa74E8TqDJEZ1dVmkI2noMiP&date=${x}`)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    console.log(response)
                }
            })
            .then(function (data) {
                console.log(data)
                document.getElementById("mainrow").style.transform = "translate(0,20vh)";
                apod.style.opacity = 0;
                apod.src = data.url;

                document.getElementById("title").innerHTML = data.title;
                document.getElementById("explanation").innerHTML = data.explanation;



                apod.onload = function () {
                    document.getElementById("mainrow").style.transform = "translate(0,0)";
                    apod.style.opacity = 1;
                }

            })
    }
}



