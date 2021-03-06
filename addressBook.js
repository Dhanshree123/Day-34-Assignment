const prompt=require('prompt-sync')();
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
function getContact(firstName,lastName){
let contact;
    addressBookArray.forEach(c=>{
        if(c.firstName==firstName && c.lastName==lastName)
            contact=c;
    });
    return contact;
}
function editContactDetails(firstName,lastName){
    let contact;
    addressBookArray.forEach(c=>{
        if(c.firstName==firstName && c.lastName==lastName)
            contact=c;
    });
    console.log("Contact to edit "+contact);
    address=prompt("Enter the new Address:- ");
    contact.address=address;

}
function isPersonInCity(firstName,lastName,city){
    listByCity = addressBookArray.filter(contact=> contact.city==city && contact.firstName==firstName && contact.lastName==lastName);
    if(listByCity.length > 0)
     return true;
 
    else
     return false;
 }
 
 function isPersonInState(firstName,lastName,state){
     listByState = addressBookArray.filter(contact=> contact.state==state && contact.firstName==firstName && contact.lastName==lastName);
     if(listByState.length > 0)
      return true;
  
     else
      return false;
  }

  function viewByCity(city){
    return addressBookArray.filter(contact=> contact.city==city);
  }

  function viewByState(state){
    return addressBookArray.filter(contact=> contact.state==state);
  }
  function countByCity(city){
    cityList=addressBookArray.filter(contact=> contact.city==city);
    return cityList.reduce(count=> count+1,0);
}

 function countByState(state){
    stateList=addressBookArray.filter(contact=> contact.state==state);
    return stateList.reduce(count=> count+1,0);
}
let addressBookArray = new Array();
let contactOne = new Contact("Seema","Dutta","181 Housing","Pune","Maharashtra",423111,9999999999,"seemaD@gmail.com");
if(getContact(contactOne.firstName,contactOne.lastName) == null)
     addressBookArray.push(contactOne);
else
   console.log("Duplicate Entry");

let contactTwo = new Contact("Reema","Singh","183 Housing","Pune","Maharashtra",423111,8899999999,"reemaS@gmail.com");
if(getContact(contactTwo.firstName,contactTwo.lastName) == null)
     addressBookArray.push(contactTwo);
else
   console.log("Duplicate Entry");
console.log(addressBookArray);

let contactThree = new Contact("Reema","Singh","183 Housing","Pune","Maharashtra",423111,8899999999,"reemaS@gmail.com");
if(getContact(contactThree.firstName,contactThree.lastName) == null)
     addressBookArray.push(contactThree);
else
   console.log("Duplicate Entry");
console.log(addressBookArray);

let contactFour = new Contact("Jiya","Singh","183 Housing","Surat","Gujrat",923111,8899999999,"reemaS@gmail.com");
if(getContact(contactFour.firstName,contactFour.lastName) == null)
     addressBookArray.push(contactFour);
else
   console.log("Duplicate Entry");
console.log(addressBookArray);

editContactDetails("Seema","Dutta");
console.log(addressBookArray);

console.log('delete contact :-');
let indexToDelete;
addressBookArray.forEach(c=> {
    if(c.firstName=="Reema" && c.lastName=="Singh")   
     indexToDelete = addressBookArray.indexOf(c);
});


addressBookArray.splice(indexToDelete, 1);
console.log(addressBookArray);
console.log("Number of contacts is "+addressBookArray.reduce(count=> count+1,0));
console.log(isPersonInCity("Seema","Singh","Pune"));
console.log(isPersonInState("Seema","Dutta","Maharashtra"));
console.log(viewByCity("Pune"));
console.log(viewByState("Maharashtra"));
console.log("Number of contacts in Pune "+countByCity("Pune"));
console.log("Number of contacts in Maharashtra "+countByState("Maharashtra"));
addressBookArray.sort((contact1, contact2) => contact1.firstName.localeCompare(contact2.firstName));
console.log(addressBookArray);
addressBookArray.sort((contact1, contact2) => contact1.zip-contact2.zip);
console.log(addressBookArray);