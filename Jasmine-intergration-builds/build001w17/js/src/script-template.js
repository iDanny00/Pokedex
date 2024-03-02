var Calculator = {
    add: function (addend1, addend2) {
        return addend1 + addend2; //Sum
    },

    sub: function (minuend, subtracend) {
        return minuend - subtracend; //Difference
    },

    div: function (dividend, divisor) {
        return dividend / divisor; //Quotient
    },

    mul: function (multiplicand, multiplier) {
        return multiplicand * multiplier; //Product
    }
};

var HelloWorld = {
    print : function (name) {
        return ("Hello World, " + name + "!")
    }
};