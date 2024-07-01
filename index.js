// Write your solution in this file!
const employee={ name:"sam" };


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee= {...employee,[key]:value}
    return newemployee
}
updateEmployeeWithKeyAndValue(employee,'streetAddress','11 broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee2= employee
    newemployee2.streetAddress='12 Broadway'
    return newemployee2

}
destructivelyUpdateEmployeeWithKeyAndValue()

function deleteFromEmployeeByKey(employee, key){
    let newEmployee= {...employee}
    delete newEmployee[key]
    return newEmployee
  

}
deleteFromEmployeeByKey(employee,'name')

function destructivelyDeleteFromEmployeeByKey(employee, key){
    let employeenew = employee
    delete employeenew[key]
    return employeenew

}
destructivelyDeleteFromEmployeeByKey(employee, key)