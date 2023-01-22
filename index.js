// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
   const newEmployee = {...employee};
   newEmployee[name] = "Tom";
   newEmployee[streetAddress] = "12 Broadway";
    return newEmployee;
} 