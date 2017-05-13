//an interface is like creating contracts for other classes and objects to implement
//we can use them to define custom types without creating classes
//interfaces are NOT compiled to Javascript! It's simply for checking / validate done by ou ts.
var user;
user = { username: 'user', password: 'secret' }; //DOES SATISFY
var myCar = {
    accelerate: function (speed) {
    }
};
