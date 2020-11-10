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
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(firstNameRegex.test(firstName))
            this._firstName=firstName;
        else throw "invalid first name ";
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(lastNameRegex.test(lastName))
            this._lastName=lastName;
        else throw "invalid last name";
    }
    get lastName(){
        return this._lastName;
    }
    set address(address){
        let addressRegex = RegExp('^[A-Za-z\\s0-9]{4,}$')
        if(addressRegex.test(address))
            this._address=address;
        else throw "invalid address";
    }
    get address(){
        return this._address;
    }
    set city(city){
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if(cityRegex.test(city))
            this._city=city;
        else throw "invalid city name";
    }
    get city(){
        return this._city;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(stateRegex.test(state))
            this._state=state;
        else throw "invalid state";
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
            this._zip=zip;
        else throw "invalid zip code";
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        let phoneRegex = RegExp('^[1-9][0-9]{9}$');
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "invalid phone number";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z_+.-]*[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]{2,}$');
        if(emailRegex.test(email))
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

let contact = new Contact("Seema","Dutta","181 Housing","Pune","Maharashtra",423111,9999999999,"seemaD@gmail.com");
console.log(contact.toString());