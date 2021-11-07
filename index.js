// Write your solution in this file!
const employee = {
    name: "Sean",
    streetAddress: "815 Herbert St.",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj,
    [key]: value
}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}

destructivelyDeleteFromEmployeeByKey(employee, "name");

deleteFromEmployeeByKey(employee, "name");

// updateEmployeeWithKeyAndValue(employee, "name", "Peter");
// console.log(updateEmployeeWithKeyAndValue(employee, "name2", "Peter"))
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Fort Washington"))