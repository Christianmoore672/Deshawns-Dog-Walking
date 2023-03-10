import { getPets, getWalkers } from "./database.js" //getWalkers added

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
      
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {

            
            const [,petId] = itemClicked.id.split("--")

            // window.alert(`${petObject.name} barks at you`)
            let matchingPet = null
            for (const pet of pets) {
                if (parseInt(petId) === pet.id) {   // parseInt turns a string to an integer when needed
                    matchingPet = pet
                }
            }

            let matchingWalker = null
            for (const walker of walkers) {
                if (matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                }
            }
        }
    }

)
            
 //             for (const petObject of pets) {
//                 if (petObject.id === parseInt(petId)) {
//                window.alert(`${petObject.name} barks at you`)
//                 }
// }              


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        // petHTML += `<li>${pet.name}</li>`
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


//---------------------------------------------------------------------------