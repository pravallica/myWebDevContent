//when creating sign-in form, validating if the user has entered any characters into the field

function Field(value){
this.value = value;
}

Field.prototype.validate = function(){
return this.value.length > 0;
}

var username = new Field("Alesin");
var password = new Field ("Welso8");

// using the traditional method

username.validate() && password.validate()

//using the every helper

var fields = [username, password];

fields.every(function(field){
  return field.validate();
                       });