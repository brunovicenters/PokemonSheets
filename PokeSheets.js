//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const dexCase = document.querySelector('#dexCase')

// for(let i = 1; i<=151;i++){
//    const pokeImg = document.createElement('img')
//    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//    pokedex.append(pokeImg)
// }

for(let i = 1; i<=151;i++){
    const celPoke = document.createElement('td')
    celPoke.classList.add('pokeBlock')
    dexCase.append(celPoke)

   
    celPoke.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"><br>#${i}`
}   