class Contact{

    constructor(...parameter)
    {
        this.firstName = parameter[0];
        this.lastName = parameter[1];
        this.address = parameter[2];
        this.city = parameter[3];
        this.state = parameter[4];
        this.zip = parameter[5];
        this.phone = parameter[6];
        this.email = parameter[7];
    }

    set firstName(firstName){
        let firstNameRegexPattern = RegExp('^[A-Z][a-z]{2,}$')
        if(firstNameRegexPattern.test(firstName))
            this._firstName=firstName;
        else throw "invalid first name ";
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(lastName){
        let lastNameRegexPattern = RegExp('^[A-Z][a-z]{2,}$')
        if(lastNameRegexPattern.test(lastName))
            this._lastName=lastName;
        else throw "invalid last name";
    }
    get lastName(){
        return this._lastName;
    }
    set address(address){
        let addressRegexPattern = RegExp('^[A-Za-z\\s0-9]{4,}$')
        if(addressRegexPattern.test(address))
            this._address=address;
        else throw "invalid address";
    }
    get address(){
        return this._address;
    }
    set city(city){
        let cityRegexPattern = RegExp('^[A-Za-z]{4,}$')
        if(cityRegexPattern.test(city))
            this._city=city;
        else throw "invalid city name";
    }
    get city(){
        return this._city;
    }
    set state(state){
        let stateRegexPattern = RegExp('^[A-Za-z\\s]{4,}$')
        if(stateRegexPattern.test(state))
            this._state=state;
        else throw "invalid state";
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        let zipRegexPattern = RegExp('^[0-9]{6}$');
        if(zipRegexPattern.test(zip))
            this._zip=zip;
        else throw "invalid zip code";
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        let phoneRegexPattern = RegExp('^[1-9][0-9]{9}$');
        if(phoneRegexPattern.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "invalid phone number";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        let emailRegexPattern = RegExp('^[a-zA-Z]+[a-zA-Z_+.-]*[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]{2,}$');
        if(emailRegexPattern.test(email))
            this._email=email;
        else throw "invalid email";
    }
    get email(){
        return this._email;
    }

    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}

let addressBookArray = new Array();
let contactOne = new Contact("Seema","Dutta","181 Housing","Pune","Maharashtra",423111,9999999999,"seemaD@gmail.com");
addressBookArray.push(contactOne);
let contactTwo = new Contact("Reema","Singh","183 Housing","Pune","Maharashtra",423111,8899999999,"reemaS@gmail.com");
addressBookArray.push(contactTwo);
console.log(addressBookArray);