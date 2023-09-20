const RotationEncryptor = {
  message: '',
  rotation: 0,

  encrypt: function () {
    let splitArray = this.message.split(''); // array가 된 것
    let mappedArray = splitArray.map(e =>
      String.fromCharCode(e.charCodeAt(0) + this.rotation),
    );
    return mappedArray.join('');
  },

  setMessage: function (message) {
    this.message = message;
  },

  setRotation: function (rotation) {
    this.rotation = rotation;
  },
};

const App = () => {
  const encryptButton = document.getElementById("encrypt-button");
  const input = document.getElementById("message");
  const result = document.getElementById("result");

  encryptButton.addEventListener("click", () => {
    RotationEncryptor.setMessage(input.value);
    RotationEncryptor.setRotation(10);
    result.innerHTML = `결과 : ${RotationEncryptor.encrypt()}`;
  });
};

const run = () => {
  window.addEventListener("DOMContentLoaded", () => {
    App();
  });
};

run();
