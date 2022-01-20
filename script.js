const encoder = (() => {

  const secrets = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  }

  // Function to invert an object keys with it's value. Will be
  // used in the decrypting process in order to not need to
  // create manually a inverted object
  const invertObj = (obj) => {
    let vertObj = {};

    for (let key in obj) {
      vertObj[obj[key]] = key;
    }

    return vertObj
  }

  const crypt = (str) => {
    let newString = ''

    for (let i = 0; i < str.length; i++) {
      if (secrets.hasOwnProperty(str[i])) {
        newString += secrets[str[i]]
      } else {
        newString += str[i]
      }
    }
    return newString
  }

  const decrypt = (str) => {

    const regEx = new RegExp(Object.values(secrets).join("|"), "gi");

    let newString = str.replace(regEx, function(matched) {
      return invertObj(secrets)[matched]
    }); 

    return newString

  };

  return {
    crypt,
    decrypt
  }

})();

(function listeners() {

  // Crypt button func
  document.querySelector("#crypt").addEventListener('click', () => {
    if (document.querySelector("#init-translate").value != '') {
      document.querySelector("#end-translate").value = encoder.crypt(document.querySelector("#init-translate").value)
    } else {
      alert("Please type your message")
    }
    document.querySelector("#clipboard-copy").setAttribute('style', 'background-color:#F3F4F6')
  })

  // Decrypt button func
  document.querySelector("#decrypt").addEventListener('click', () => {
    if (document.querySelector("#init-translate").value != '') {
      document.querySelector("#end-translate").value = encoder.decrypt(document.querySelector("#init-translate").value)
    } else {
      alert("Please, type your message.")
    }
    document.querySelector("#clipboard-copy").setAttribute('style', 'background-color:#F3F4F6')
  })

  // Copy to clipboard button func
  document.querySelector("#clipboard-copy").addEventListener('click', () => {
    navigator.clipboard.writeText(document.querySelector("#end-translate").value)

    document.querySelector("#clipboard-copy").setAttribute('style', 'background-color:#66ff66')
  })

  // Clear field button func
  document.querySelector("#clear-fields").addEventListener('click', () => {
    document.querySelector("#init-translate").value = ''
    document.querySelector("#end-translate").value = ''
    document.querySelector("#clipboard-copy").setAttribute('style', 'background-color:#F3F4F6')

  })


})();

