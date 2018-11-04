let tamagochi = {
    health: 100, //здоровье
    happiness: 100, //счастье
    satiety: 100, // сытость
    cheerfulness: 100, //бодрость
    thirst: 100, //жажда
    playfulness: 100, // игривость

    name: 'Dog',
    wantToEat: function (satiety) {
        if (satiety <= 50) {
            alert('feed me')
        }
    },
    death: function (health) {
        if (health <= 0) {
            alert('Dog died')
        }
    },
    wantToDrink: function (thirst) {
        if (thirst <= 50) {
            alert('give me some water')
        }
    },
    wantToPlay: function (playfulness) {
        if (playfulness <= 50) {
            alert('play with me')
        }
    },

    wantToSleep: function (cheerfulness) {
        if (cheerfulness <= 50) {
            alert('I need rest')
        }
    },

    imSoHappy: function (happiness) {
        if (happiness <= 50) {
            alert('im so Happy!!!')
        }
    }

    }


