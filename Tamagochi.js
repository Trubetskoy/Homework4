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
        console.log(this.hunger);
        console.log(this.health);
        LiveOrNot();
    };

    this.HealMe = function () {
        this.health += 10;
        this.happiness -= 5;
        console.log('health', this.health);
        console.log('happiness', this.happiness);
        LiveOrNot();
    };

    this.PlayWithMe = function () {
        this.hunger -= 15;
        this.health -= 5;
        this.thirst -= 15;
        this.playfulness += 15;
        this.happiness += 15;
        console.log(this.hunger);
        LiveOrNot();
    };

    this.WhantToDrink = function () {
        this.hunger -= 5;
        this.health += 2;
        this.thirst += 15;
        this.playfulness += 15;
        this.happiness += 15;
        console.log(this.hunger);
        LiveOrNot();
    };

    this.PlayWithMe = function () {
        this.hunger -=15;
        this.health -= 5;
        this.thirst -=15;
        this.playfulness += 15;
        this.happiness += 15;
        console.log(this.hunger);
        LiveOrNot();
    };

    this.PlayWithMe = function () {
        this.hunger -= 15;
        this.health -= 5;
        this.thirst -= 15;
        this.playfulness += 15;
        this.happiness += 15;
        console.log(this.hunger);
        LiveOrNot();
    };
    LiveOrNot = LiveOrNot.bind(this);

    function LiveOrNot() {
        console.log('health', this.health);
        if (this.health <= 0 || this.happiness <= 0 || this.hunger <= 0 || this.cheerfulness <= 0 || this.playfulness <= 0 || this.thirst <= 0) {
            console.log('Game Over')
        }
    }
}

var Game = new Tamagochi('Ivan');

Game.FeedTamagochi();
Game.HealMe();
Game.PlayWithMe();

