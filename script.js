
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            response.json()
                .then(function (json) {
                    console.log(json);
                    const div = document.getElementById("container");
                    // Add HTML that includes the JSON data
                    for (let i=0; i<json.length; i++){
                        div.innerHTML += `
                        <div class="astronaut">
                        <div class="bio">
                           <h3>Mae Jemison</h3>
                           <ul>
                              <li>Hours in space: 190</li>
                              <li>Active: false</li>
                              <li>Skills: Physician, Chemical Engineer</li>
                           </ul>
                        </div>
                        <img class="avatar" src="images/mae-jemison.jpg">
                     </div>
                        `; 
                    }
                   
                });
        });
});
