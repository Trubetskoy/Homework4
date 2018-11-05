function Tamagochi(name) {
    this.name = name;
    this.health = 100;
    this.happiness = 100;
    this.hunger = 100;
    this.cheerfulness = 100;
    this.playfulness = 100;
    this.thirst = 100;

    this.FeedTamagochi = function () {
        this.hunger += 5;
        this.health -= 5;
        this.thirst -= 5;
        this.playfulness -= 5;
        LiveOrNot();
        Statistics();
    };

    this.HealMe = function () {
        this.health += 10;
        this.happiness -= 5;
        LiveOrNot();
        Statistics();
    };

    this.PlayWithMe = function () {
        this.hunger -= 15;
        this.health -= 5;
        this.thirst -= 15;
        this.playfulness += 15;
        this.happiness += 15;
        LiveOrNot();
        Statistics();
    };

    this.WhantToDrink = function () {
        this.hunger -= 5;
        this.health += 2;
        this.thirst += 15;
        this.playfulness += 5;
        this.happiness += 5;
        LiveOrNot();
        Statistics();
    };

    this.MakeMeHappier = function () {
        this.hunger -= 15;
        this.health -= 10;
        this.thirst -= 15;
        this.playfulness += 15;
        this.happiness += 15;
        LiveOrNot();
        Statistics();
    };

    this.WhantToSleep = function () {
        this.hunger -= 15;
        this.thirst -= 15;
        this.cheerfulness += 15;
        this.happiness += 15;
        LiveOrNot();
        Statistics();
    };

    LiveOrNot = LiveOrNot.bind(this);

    function LiveOrNot() {
        if (this.health <= 0 || this.happiness <= 0 || this.hunger <= 0 || this.cheerfulness <= 0 || this.playfulness <= 0 || this.thirst <= 0) {
            console.log('Game Over')
        } else if (this.health >= 150 || this.happiness >= 150 || this.hunger >= 150 || this.cheerfulness >= 150 || this.playfulness >= 150 || this.thirst >= 150) {
            console.log('He run away')
        }
    }

    Statistics = Statistics.bind(this);

    function Statistics() {
        console.log(name, 'health', this.health);
        console.log(name, 'happiness', this.happiness);
        console.log(name, 'hunger', this.hunger);
        console.log(name, 'cheerfulness', this.cheerfulness);
        console.log(name, 'playfulness', this.playfulness);
        console.log(name, 'thirst', this.thirst);
    }

}

var Game = new Tamagochi('Inna');

//Game.FeedTamagochi();
//Game.HealMe();
//Game.PlayWithMe();
//Game.WhantToDrink();
//Game.MakeMeHappier ();
//Game.WhantToSleep ();

Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();
Game.FeedTamagochi();


