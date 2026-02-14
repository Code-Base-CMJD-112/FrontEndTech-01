let value = 5
value = 150
console.log("Value is: ",value)

var newValue = 100
console.log("New value is: ",newValue)

const staticValue = 650
//staticValue = 500;
//TypeError: Assignment to constant variable.
console.log("Constant value is: ",staticValue)

// Diff between var and let
function test(){
    {
        var x = 50
        let y = 20
        console.log("Value of x - Inside block is: ",x)
        console.log("Value of y - Inside block is: ",y)
    }
    console.log("Value of x - Outside block is: ",x)
    // console.log("Value of y - Outside block is: ",y)
}

test();

let customer = {
    name: "Kamal",
    city: "Kalutara",
    email: "kamal@mail.com",
}
console.log(customer)
console.log(customer.city)
customer.city = "Colombo"
console.log(customer.city)
console.log(customer['city'])
console.log(customer['city'] = 'Jaffna')
