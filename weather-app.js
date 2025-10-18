// http://api.weatherapi.com/v1/current.json?key=0c01f5a6c9644114842155832251010&q=srinagar&aqi=no

let targetLocation = 'jammu'

const fetchDetails = async(targetLocation) =>{
let url = `http://api.weatherapi.com/v1/current.json?key=0c01f5a6c9644114842155832251010&q=${targetLocation}&aqi=no
`
const res = await fetch(url)

const data = await res.json()

console.log(data);

let locationName = data.location.name
let time = data.location.localtime

let temp = data.current.temp_c

let conditon = data.current.conditon.text

}

fetchDetails(targetLocation) 

