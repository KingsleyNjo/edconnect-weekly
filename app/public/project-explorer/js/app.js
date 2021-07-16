let currentPage = window.location.href;
window.onload = function(){
    if(currentPage.includes('register.html')){
        register()
    }
    if(currentPage.includes('index.html')){
        index()
    }
    if(currentPage.includes('login.html')){
        loginHtml ()
    }
    if(currentPage.includes('createproject.html')){
        createProject()
    }
    if(currentPage.includes('viewproject.html')){
        viewProject()
    }
}

let register = function () { 
        document.getElementById('inputState');
        fetch('/api/programs', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(function (response) {
                for (let i = 0; i < response.length; i++) {
                    let programList = document.createElement('option');
                    programList.innerHTML = response[i];
                    document.getElementById('inputState').appendChild(programList);
                }
            })
        let inputYear = document.getElementById('Year');
        fetch('/api/graduationYears', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(function (response) {
                for (let i = 0; i < response.length; i++) {
                    let yearList = document.createElement('option');
                    yearList.innerHTML = response[i];
                    inputYear.appendChild(yearList);
                }
            })
    
    const signupForm = document.getElementById("signupForm")
    const error_Alert = document.getElementById("errormsg")
    error_Alert.style.display = "none"; // hide the div display 
    function postData(event) {  // form submit handler
        event.preventDefault();
        let info = {
            firstname: document.getElementsByName("firstName")[0].value,
            lastname: document.getElementsByName("lastName")[0].value,
            email: document.getElementsByName("email")[0].value,
            password: document.getElementsByName("password")[0].value,
            matricNumber: document.getElementsByName("matricNumber")[0].value,
            program: document.getElementsByName("program")[0].value,
            graduationYear: document.getElementsByName("graduationYear")[0].value,
        }
        console.log(info);
        fetch("/api/register", {
            method: 'POST',
            body: JSON.stringify(info),        // All form data // turn values to json format
            headers: {
                'Content-Type': 'application/json',
            },
        })

            .then(response => response.json())
            .then(response => {
                if (response.status === "ok") {
                    // storing the id in a cookie with the name uid.
                    document.cookie = `uid=${response.data.id}; path=/`;

                    console.log(document.cookie);
                    window.location.replace('index.html');

                    // windows.location.replace('index.html'); 

                } else if (response.status !== "ok") {
                    console.log(response.errors);
                    let errors = response.errors.map(error => error);


                    errors.forEach(error => {
                        //loop through returned array, append answer to error div
                        error_Alert.innerHTML += `<strong>${error}</strong><br>`
                    })
                    error_Alert.style.display = "block";
                }
                
            })
             
    }
    signupForm.addEventListener("submit", postData) 
}
