// Add a circle object definition

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    //method named as "circumference"
    circumference: function () {
        // calculate circumference by using formula of 2 * pi * r
        // here, "r" is accessed from outside
        let circumferenceVar = 2 * Math.PI * r;

        //return calculated circumferenceVar circumference
        return circumferenceVar;
    },

    //method named as "area"
    area: function () {
        //calculate area by using formula of pi * r * r
        // here, "r" is also accessed from outside
        let arCircleVar = Math.PI * r * r;

        // return calculated arCircleVar area
        return arCircleVar;
    },
};

console.log(`Its circumference is ${circle.circumference()}`);

console.log(`Its area is ${circle.area()}`);