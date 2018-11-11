function Persons() {
    let FirstPerson = 'Dima';
    let SecondPerson = 'Inna';

    this.getPrivetFirstName = function () {
        return FirstPerson
    };
    this.getPrivetSecondName = function () {
        return SecondPerson
    };

    this.secChangeName = function (password, newName) {
        if (password === 2) {
            ChangeFirstPersonName(newName)
        }
    };

    function ChangeFirstPersonName(newName) {
        FirstPerson = newName
    }
}

let person = new Persons();
console.log(person.getPrivetFirstName());
console.log(person.getPrivetSecondName());

person.secChangeName(2, 'Buba');

console.log(person.getPrivetFirstName());

