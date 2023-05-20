// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');

for (let i = 0; i < 151; i++) {
    let div = document.createElement('div');
    div.style.display = "inline-block"
    div.style.textAlign = "center"
    container.append(div);
    let img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
    img.style.display = "block"
    img.style.margin = "0"
    div.appendChild(img);
    div.append(`#${i + 1}`)
}