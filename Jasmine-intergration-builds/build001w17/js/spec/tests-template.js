describe('Calculator', function() {
    //Numbers from 1-100, 5 round of test
    for (var i=2; i>0; i--) {
        var number1 = Math.floor((Math.random() * 100) + 1),
            number2 = Math.floor((Math.random() * 100) + 1);
        
        it('should add ' + number1 + ' plus ' + number2 + ' and be equals to ' + (number1 + number2), function() {
            expect(Calculator.add(number1, number2)).toBe(number1 + number2);
        });
        
        it('should subtract ' + number1 + ' from ' +number2 + ' and be equals to ' + (number1 - number2), function () {
            expect(Calculator.sub(number1, number2)).toBe(number1 - number2);
        });

        it('should multiply ' +number1 + 'x' + number2 + ' and be equals to ' + (number1*number2), function () {
           expect(Calculator.mul(number1, number2)).toBe(number1 * number2);
        });

        it('should divide ' + number1 + '/' + number2 + ' and be equals to ' + (number2 && number1/number2), function () {
            expect(Calculator.div(number1, number2)).toBe(number2 && number1/number2);
        });
        
    }
});

describe('Hello World!', function() {
    var names = ["Daniel","John","David","Matt","Samantha","Daniella","Tom","Ben","James","Abby"];
    for (var i=0; i<names.length; i++) {
        it('Designed to return "Hello World, ' + (names[i]) + '!" for every name in a list.', function() {
            expect(HelloWorld.print(names[i])).toBe("Hello World, " + names[i] + "!");
        });
    }
});