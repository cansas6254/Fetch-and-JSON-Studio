
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            return response.json();
        }).then(function (json) {



            let sortedAstronauts = response.sort(function (a, b) { return a.hoursInSpace })
            //console.log(json);


            let myContainer = document.getElementById('container');

            let allMyHtml = "";
            sortedAstronauts.forEach(function (astronaut) {
                let allMyHtml = `
                    < div class="astronaut" >
                            <div class="bio">`
                    < h3 > ${ astronaut, firstName } ${ astronaut, lastName }</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace</li>
                            <li>${astronaut.active ? "class="green-text" ' : ''}>Active: ${astronaut.active}</li>/li>
                            <li>Skills: Physician, Chemical Engineer</li>
                        </ul>
                        </div >
                    <img class="avatar" src="images/mae-jemison.jpg">
                    </div>
                    ;
            }
                   
                });
});
