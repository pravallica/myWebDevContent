// creating a module
let myApp = angular.module("MyApp",[]);

//creating a controller
let myController = function($scope){
    $scope.message = "Hello World";
}

// binding to App
myApp.controller("MyController", myController)

// with JSON

let JSONController = function($scope){
// create JSON object
let Student = {
        firstName: "Sri",
        lastName: "Mamidibathula",
        Email: "s533493@nwmissouri.edu"
    }
    // binding to scope object
    $scope.Student = Student;
}
myApp.controller("Student", JSONController);