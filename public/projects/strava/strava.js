

const auth_link = 'https://www.strava.com/oauth/token'

function getActs(res){
    
    const act_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`

    fetch(act_link)
    .then((res)=>
        res.json()
    )
    .then((data) => {
        displayActs(data)
    })
    .then(function(data){
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    })
}
function displayActs(data){
    const distance=document.getElementById('distance');
    distance.innerHTML = `activities number is: ${data.length}`;
    let distanceCount=0;
    for (let i=0;i<data.length;i++){
        distanceCount+=data[i].distance;
        distance.innerHTML = `total diatance is: ${Math.floor (distanceCount)}`
    }
}


function reAuth(){
    fetch(auth_link,{
        method:'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '65153',
            client_secret: '354c44161cbb85b41681f7967a5c21a92ba6e2e4',
            refresh_token: 'ba11c549a66c9f735703a12a97613c1d5b043662',
            grant_type: 'refresh_token'
        })
    })
    .then(res => res.json())
    .then(data =>{
        getActs(data);
    })
}
reAuth()

