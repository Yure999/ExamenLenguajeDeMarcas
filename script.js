let containerElement = document.querySelector('.row');

const apiURL = "https://randomuser.me/api/?results=8";

function fetchData(url) {
    console.log(url);
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(request.response);
            const response = request.response;
            addCard(response);
        }
    };
    request.send();
}

fetchData(apiURL);

function addCard(response) {
    let result = response.results;
    for (let i = 0; i < result.length; i++) {
        let name = result[i].name;
        let completeName = name.title + " " + name.first + " " + name.last;
        let image = result[i].picture.medium;
        let phoneNumber = result[i].phone;
        let userName = result[i].login.username;
        let email = result[i].email;
        let date = result[i].dob.date;
        let finalDate =(date.substring(8,10) + "-" + date.substring(5,7) + "-" + date.substring(0,4));
        let location = result[i].location;
        let street = location.street.number + " " + location.street.name;
        let completeLocation = street + " " + location.city + " " + location.state;

        containerElement.innerHTML += `
            <div class="col-12 col-md-6 userCard">
                <div class="imageContainer">
                   <img src="${image}" class="image">
                </div>
                <div class="infoContainer">
                    <div class="name">${completeName}</div>
                    <div class="phoneAndUser">
                        <div class="phone"><i class="fas fa-phone"></i> ${phoneNumber}</div>
                        <div class="userName"><i class="fas fa-user"></i> ${userName}</div>
                    </div>
                    <div class="email"><i class="fas fa-envelope"></i> ${email}</div>
                    <div class="dob"><i class="fas fa-birthday-cake"></i> ${finalDate}</div>
                    <div class="completeLocation"><i class="fas fa-map-marked-alt"></i> ${completeLocation}</div>
                </div>
        </div>
        `
    }
}