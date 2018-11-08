
function Persons () {
    let firstPerson = 'Dima';
    let SecondPerson = 'Inna';

    function ChangePersonsId() {
    firstPerson = NewFirstPerson
    }
    this.getPrivetFirstName = function() {
        return firstPerson
    };
    this.ChangePersonsId2= function () {
        SecondPerson = NewSecondPerson
    }
};

let person = new Persons ();
console.log(person.getPrivetFirstName());


