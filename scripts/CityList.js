import { getCities } from "./database.js" //getWalkers, getWalkerCities removed

// const walkers = getWalkers()
const cities = getCities()
// const walkerCities = getWalkerCities


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const currentcity of cities) {
        citiesHTML += `<li>${currentcity.name}</li>`
    }
    // where is the current city array coming from? 

    citiesHTML += "</ul>"

    return citiesHTML
}

// const findCity = (city, allCities) => {
//     let walkerCity = null

//     for (const city  of allCities) {
//         if (walkerCity.cityId === city.id) {
//             walkerCity = city
//         }
//     }

//     return walkerCity 
// }