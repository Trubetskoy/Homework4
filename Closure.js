function Persons() {
    let FirstPerson = 'Dima';
    let SecondPerson = 'Inna';

    this.getPrivetFirstName = function () {
        return FirstPerson
    };
    this.getPrivetSecondName = function () {
        return SecondPerson
    };
    ChangeFirstPersonName = ChangeFirstPersonName.bind(this);

    function ChangeFirstPersonName() {
        this.FirstPerson = 'Artem'
    };

    ChangeSecondPersonName = ChangeSecondPersonName.bind(this);

    function ChangeSecondPersonName() {
        this.SecondPerson = 'Sofiya'
    };
}

let person = new Persons();
console.log(person.getPrivetFirstName());
console.log(person.getPrivetSecondName());

person.ChangeFirstPersonName();

