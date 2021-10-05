const apikey='pk.eyJ1IjoiZWxpLXNoYW1vdXQiLCJhIjoiY2t0bzFydjEzMDhmcDJybDRqOWQ2NW4xOCJ9.BOhDGTM6J1cBUPFfH5RvjQ';

const mymap = L.map('mapid').setView([35.060749963350126, 36.69460558542579], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apikey
}).addTo(mymap);


let team=[
    {
        id:0,
        name:"Eile",
        location:[35.060749963350126, 36.69460558542579],
        phone:949727174,
        email:"Eile@gmail.com"
    },
    {
        id:1,
        name:"Sipua",
        location:[35.14075073360393, 36.72810452094248],
        phone:956450107,
        email:"Sipua@gmail.com"
    },
    {
        id:2,
        name:"Abdalrhman",
        location:[35.12991517911833, 36.735547085159524],
        phone:934619443,
        email:"Abdalrhman@gmail.com"
    },
];

team.forEach((ele)=>{
    const marker=L.marker([ele.location[0], ele.location[1]]).addTo(mymap);
    let message=`
        <div style='text-align:center' class="items" id='item-${ele.id}'>
            <div style='font-size:20px;'>${ele.name}</div>
            <div style='font-size:16px;'>0${ele.phone}</div>
            <div style='font-size:16px;'>${ele.email}</div>
        </div>
    `;
    marker.bindPopup(message);
})

let items=document.querySelectorAll('.team-item');
items.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        mymap.flyTo([team[i].location[0], team[i].location[1]]);
    })
});