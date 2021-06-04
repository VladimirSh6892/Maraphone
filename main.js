const player1 = {
    name: 'Kitana',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['weapon1', 'weapon2'],
    attack: function () {
        console.log(this.name + 'Fight');
    }
};

const player2 = {
    name: 'Sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['weapon1', 'weapon2'],
    attack() {
        console.log(this.name + 'Fight');
    },
};

function createPlayer(name, obj) {
    const $arenas = document.querySelector('.arenas');
    const $player = document.createElement('div');
    $player.classList.add(name);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${obj.hp}%`;
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerHTML = obj.name;
    $progressbar.appendChild($name);

    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = obj.img;
    $character.appendChild($img);

    $player.appendChild($character);
    $arenas.appendChild($player);

};

createPlayer('player1', player1);
createPlayer('player2', player2);