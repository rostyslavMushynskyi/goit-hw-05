Account.prototype.getInfo = function () {
  console.log(`Login: ${this.data.login}, Email: ${this.data.email}`);
};

console.log(Account.prototype.getInfo); // function

function Account(data) {
  this.data = data;
}

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

Account.prototype.getInfo;
