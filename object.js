let person = {
    name: "sanjay",
    age: 21,
    occupation: "student"};
  console.log(person.name);
  console.log(person.age);
  console.log(person.occupation);
  person.location = "hyderabad";
  console.log(person.location);
  person.age = 32;
  console.log(person.age);
  delete person.occupation;
  console.log(person.occupation); 
  if ('name' in person) {
    console.log("Name exists in person object.");
  } else {
    console.log("Name does not exist in person object.");
  }
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }