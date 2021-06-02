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
