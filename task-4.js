class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    let a = this._value.split("");
    a.push(str);
    let b = a.join("");
    this._value = b;
  }

  prepend(str) {
    let a = this._value.split("");
    a.unshift(str);
    let b = a.join("");
    this._value = b;
  }

  pad(str) {
    let a = this._value.split("");
    a.unshift(str);
    a.push(str);
    let b = a.join("");
    this._value = b;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
