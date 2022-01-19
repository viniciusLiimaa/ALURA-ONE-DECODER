const encoder = (() => {

  const secrets = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
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
    let newString = str.replace(/\b(?:enter|imes|ai|ober|ufat)\b/gi, matched => secrets[matched]);

    console.log(newString)

   

  

    


  }

  return {
    crypt,
    decrypt
  }

})();


encoder.decrypt("enterimesai")