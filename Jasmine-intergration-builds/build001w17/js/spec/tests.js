describe('Calculator', function() {
    //Numbers from 1-100, 5 round of test
    for (var i=2; i>0; i--) {
        var number1 = Math.floor((Math.random() * 100) + 1),
            number2 = Math.floor((Math.random() * 100) + 1);
        it('should add ' + number1 + ' plus ' + number2 + ' and be equals to ' + (number1 + number2), function() {
            expect(Calculator.add(number1, number2)).toBe(number1 + number2);
        });

        it('Body which holds website content should be created.', function() {
            expect(index.cbody('body')).toBe('body');
        });
    }
});
