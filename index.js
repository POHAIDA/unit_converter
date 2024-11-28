/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input_el")
const convertBtn = document.getElementById("convert_button")
const results = document.querySelectorAll(".result")

const units = [
    [3.281, "meters", "feets"],
    [0.264, "liters", "gallons"],
    [2.204, "kilos", "pounds"]
]

const multiplyUnits = (unit1, unit2) => {
    return (unit1 * unit2).toFixed(3);
}
const divisionUnits = (unit1, unit2) => {
    return (unit1 / unit2).toFixed(3);
}


function convertUnits() {
    const value = inputEl.value
    if(value === ''){
        alert("Enter value")
    }else{ 
        for (let i = 0; i < units.length; i++) {
            results[i].innerHTML = `
            ${value} ${units[i][1]} = ${multiplyUnits(value, units[i][0])} ${units[i][2]} | 
            ${value} ${units[i][2]} = ${divisionUnits(value, units[i][0])} ${units[i][1]}
            `
        }
    }
}

convertBtn.addEventListener("click", () => {
    convertUnits()
})