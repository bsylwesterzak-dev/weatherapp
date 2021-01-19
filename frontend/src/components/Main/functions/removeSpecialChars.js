module.exports.removeSpecialChars = (str) => {
    str = str.replace(/\u0142/g, "l").replace(/\u0141/g, "L")
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}