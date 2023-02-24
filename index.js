// Write your solution in this file!
// const employee = {
//     name: 'Fred',
//     streetAddress: 'Stolipin 58'
// }

// function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
//     return {...employee, [key]: value}
// }

const employee = {
    name: "Fred",
    streetAddress: "40 Thayer",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
        [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee    
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const employee3 = {...employee}
    delete employee[key]
    return employee 

}