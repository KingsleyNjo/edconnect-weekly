class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        let gettId = this.data.find(e => e.id === id)
        if(!gettId){
            return null;
        }else{
            return gettId;
        }

    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        let elementIndex=this.data.find(element => element.id == id);
        if(!elementIndex){
            return false;
        }
        for(let key in obj){
            elementIndex[key]=obj[key];
        }

        return true;

    }

    delete(id) {
        let user = this.data.find(item => item.id === id);
        let index= this.data.indexOf(user);
        if(user){
            this.data.splice(index,1);
            return true;
        }else{
            return false;
        }


    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;