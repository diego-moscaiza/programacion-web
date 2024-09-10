// - Podemos ampliar la funcionalidad de los objetos integrados usando prototipos

String.prototype.padLeft = function (width, char = " ") {
  let result = this;

  if (this.length < width) {
    result = new Array(width - this.length + 1).join(char) + this;
  }

  return result;
};

"hello".padLeft(12, "x"); //?

// - Pero en javascript puedes usar 'padstart' y 'padEnd'

"hello".padEnd(12, "x"); //?
"hello".padStart(12, "x"); //?