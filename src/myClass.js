class MyClass {
    constructor(){
        console.log("constructor");
    }

    sayHello (){
        console.log("Hello");
    }

    add (num1, num2){
        let result = num1 + num2;
        return result;
    }

    callAnotherMethod (arg1,arg2) {
        this.sayHello();
        var result = this.add(arg1,arg2)
        return result
    }

    callTheCallback (callback) {
        callback();
    }

    testPromise(){
        return new Promise ( function (resolve,reject){
            setTimeout(function(){
                resolve(5)
            },4000)
        }).then(function(result){
            return result *2
        })
    }
}

module.exports = MyClass