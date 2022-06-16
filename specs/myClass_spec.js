var MyClass = require ('../src/myClass.js');
const sinon = require ('sinon')
const chaiaspromised = require('chai-as-promised')
const chai = require('chai')
const expect = require('chai').expect;
chai.use(chaiaspromised)
var myobj = new MyClass();

describe.skip('myClass test suite', function(){

    it("test the add method",function(){
        expect(myobj.add(2,3)).to.be.equal(5)
    })

    it("should spy add method",function(){
        var spy = sinon.spy(myobj, "add")

        myobj.callAnotherMethod(10,20)

        //sinon.assert.calledOnce(spy)
        expect(spy.calledOnce).to.be.true
        expect(spy.calledWith(10,20)).to.be.true
    })

    it('spy the callback method', function () {
        var callback = sinon.spy();
        myobj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true
    })

    it('mock the sayHello method',function(){
        var mock = sinon.mock(myobj);
        var expectation = mock.expects('sayHello')
        myobj.callAnotherMethod(10,20)
        mock.verify;
    })
})

describe.skip("test the promise", function(){
    it("test the promise", function (done){
        this.timeout(0)
        myobj.testPromise().then(function(result){
            expect(result).to.be.equal(10)
            done()
        });
    })
})

describe.skip("test the promise by chaiaspromised", function(){
    it("test the promise", function (){
        this.timeout(0);
        return expect(myobj.testPromise()).to.eventually.equal(10)
    })
})

describe.skip("test the promise by async await", function(){
    it("test the promise", async function (){
        this.timeout(0);
        var result = await  myobj.testPromise();
        expect(result).to.be.equal(10)
    })
})

describe('stubs testing', function(){

    it('stub the add method',function(){

        var stub= sinon.stub(myobj,"add")

        stub.withArgs(10,20).returns(100);

        expect(myobj.callAnotherMethod(10,20)).to.be.equal(100)
    })

})