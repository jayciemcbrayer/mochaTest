const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

//results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);
firstNameResult = app.firstName();

describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function(){
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    
    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return type numbers', function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('firstName()', function(){
        it('firstName should return Jaycie', function(){
            //let result = app.sayHello();
            assert.equal(firstNameResult, 'Jaycie');
        });
    
        it('firstName should return type string', function(){
            //let result = app.sayHello();
            assert.typeOf(firstNameResult, 'string');
        });
    });
});