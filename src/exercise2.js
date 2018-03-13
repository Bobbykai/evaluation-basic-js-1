var mapCustomer = function(customer) {
  var input = {};
  Object.defineProperty(input, 'property1' , {
    firstname: 'John',
    lastname: 'Doe',
    products: [],
    moneySpent: 0
  });


console.log(input.property1);



module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
