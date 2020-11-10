//UC1
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

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


    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}

let contact = new Contact("Seema","Dutta","181 Housing","Pune","MH",423111,9999999999,"seemaD@gmail.com");
console.log(contact.toString());