let employees = [
    { name: "John Doe", hourlyRate: 15, hoursWorked: 40 },
    { name: "Jane Smith", hourlyRate: 20, hoursWorked: 35 },
    { name: "Bob Johnson", hourlyRate: 18, hoursWorked: 45 }
];

function calculatedBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours;
    } else {
    }

    Function calculatedOvertimePay(rate, hours) {
        let overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    };
    return (40 * rate) + calculateOvertimePay(rate, hours);
};
let tax = 0.15; 
function calculateTaxes(basePay) {
    return basePay * (1-tax);
};

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let netPay = calculateTaxes(basePay);
    return {
        name: employee.name,
        basePay: employee.hourlyRate * Math.min(employee.hoursWorked, 40),
        overtimePay: basePay - (employee.hourlyRate * Math.min(employee.hoursWorked, 40)),
        grossPay: basePay,
        netPay: netPay
    };
}; 

for (i=0; i < employees.length; i++) {
    let payrollInfo = processPayroll(employees[i]);
    console.log(`Name: ${payrollInfo.name}`);
    console.log(`Base Pay: $${payrollInfo.basePay.toFixed(2)}`);
    console.log(`Overtime Pay: $${payrollInfo.overtimePay.toFixed(2)}`);
    console.log(`Gross Pay: $${payrollInfo.grossPay.toFixed(2)}`);
    console.log(`Net Pay: $${payrollInfo.netPay.toFixed(2)}`);
    console.log('-------------------------');
}; 