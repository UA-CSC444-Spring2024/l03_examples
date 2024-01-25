let person = {
  age: 42,
  name: "Josh",
  birthday: function() {
    this.age = this.age+1;
  }
};

function makePerson(a, n) {
  let result = {
    age: a,
    name: n,
    birthday: function() {
      this.age = this.age+1
    }
  };
  return result;
}
