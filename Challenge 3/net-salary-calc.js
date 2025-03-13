function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    // PAYE Tax Calculation
    function calculatePAYE(salary) {
        let tax = 0;
        if (salary > 800000) tax += (salary - 800000) * 0.35, salary = 800000;
        if (salary > 500000) tax += (salary - 500000) * 0.325, salary = 500000;
        if (salary > 32333) tax += (salary - 32333) * 0.30, salary = 32333;
        if (salary > 24000) tax += (salary - 24000) * 0.25, salary = 24000;
        if (salary > 0) tax += salary * 0.10;
        
        return Math.max(0, tax - 2400); // Deduct personal relief
    }
    
    // NSSF Contributions
    function calculateNSSF(salary) {
        const tier1 = Math.min(salary, 8000) * 0.06;
        const tier2 = salary > 8000 ? Math.min(salary - 8000, 64000) * 0.06 : 0;
        return tier1 + tier2;
    }
    
    // SHIF Contributions (2.75% of gross salary)
    function calculateSHIF(salary) {
        return salary * 0.0275;
    }
    
    // Housing Levy (1.5% of gross salary)
    function calculateHousingLevy(salary) {
        return salary * 0.015;
    }
    
    // Calculate deductions
    const payee = calculatePAYE(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const shif = calculateSHIF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);
    
    // Calculate net salary
    const netSalary = grossSalary - (payee + nssf + shif + housingLevy);
    
    return {
        grossSalary,
        payee,
        nssf,
        shif,
        housingLevy,
        netSalary
    };
}

// Example usage
const salaryDetails = calculateNetSalary(50000, 0);
console.log(salaryDetails);