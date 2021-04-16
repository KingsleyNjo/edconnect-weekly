const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.password=password;
        this.matricNumber=matricNumber;
        this.program=program;
        this.graduationYear=graduationYear;

    }

    getFullName() {
        let fullname = (`${this.firstname} ${this.lastname}`);
        return fullname;


    }
}

class Users extends DataModel {
    authenticate(email, password) {
        let authenticatedUser = this.data.find(e => e.email === email && e.password === password);
        return (authenticatedUser ? true:false);


    }

    getByEmail(email) {
        let getEmail= this.data.find(e => e.email === email);
        return getEmail ? getEmail:null;


    }

    getByMatricNumber(matricNumber) {
        let getMatric = this.data.find(e => e.matricNumber === matricNumber)
        return getMatric ? getMatric:null;

    }

    validate(obj) {
        let value = true;
        for(let prop in obj){
            if(obj[prop]===null){
                value=false;
            }
        }

        let validEmail = this.data.find(e => e.email === obj.email);
        let validMatric = this.data.find(e => e.matricNumber === obj.matricNumber);
        let validPassword = obj.password.length>=7;
        return value && validPassword && !validEmail && !validMatric;


    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};