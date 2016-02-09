//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer  IN order to specify context of certain commands, like methods inside of objects or certain closures that require more specificity than a variable name.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer 1) When contained in a global scope, the value of this will be the window object. This just means that without any other parent function, this will refer to the window. 2) Whenever a function is called by a preceding dot, the object before that dot is this. This just means that this is used to call the function that is to the left of the dot. Just as you would call a method with a var. 3) Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. This means that this will refer to the specific object created by the constructor. 4) Whenever JavaScript’s call or apply method is used, this is explicitly defined. You can use call or apply to put this into a different context than what would have been used as default.
  // 3) What is the difference between call and apply?

      //Answer

  // 4) What does .bind do?

      //Answer We use it to set the value for this, and to curry functions.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "BigBoi12",
  email: "Hotmama99@hotmail.com",
  getUsername: function() {
    return this.username;
  }
};

    //Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  var Car = function Car(Brand, Model, Year) {
    var newCar = {
      carBrand: Brand,
      carModel: Model,
      carYear: Year,
      move: 10,
      moveCar: function() {
        return this.move + 10;
      }
    };
    return newCar;
  };


  var prius = new Car('Toyota', 'Prius', 2011);
  var mustang = new Car('Ford', 'Mustang', 2013);

  prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
  mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

  //Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



  //Continuation of previous problem

  var getYear = function(){
    return this.carYear;
  };
  getYear.apply(mustang);
  getYear.apply(prius);

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com',
  getMyUsername: function(){
  console.log(this.username);
  }
};

var boundGetMyUsername = myUser.getMyUsername.bind(myUser);

setTimeout(boundGetMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here After five seconds the username of whatever this is called to will be logged to console.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here The window.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
