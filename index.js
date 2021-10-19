// Write your solution in this file!
const employee = {
    name: "Sean",
    streetAdrdress: "815 Herbert St.",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployees = {...employee};

    newEmployees[key] = value;

    return newEmployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newList = {...employee};
    delete newList.name;
    return newList;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}