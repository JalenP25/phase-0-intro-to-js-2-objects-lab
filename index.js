// Write your solution in this file!
const employee = { 
    name: 'Tim',
    streetAddress: '53 Broadway'
};

  function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
  
    return newEmployee;
  };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = [delete {...employee}.key];
    
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    
    delete employee[key];
    delete newEmployee[key];

    return employee;
}
