// EmployeeList.ts
import { Employee } from './Employee';

// Class for managing the list of employees
export class EmployeeList {
  private employees: Employee[] = [];  // Array of employees

  // Add an employee to the list
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  // Get an employee by ID
  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  // Update employee information by ID
  updateEmployee(id: number, updatedEmployee: Partial<Employee>): boolean {
    const employee = this.getEmployeeById(id);
    if (employee) {
      Object.assign(employee, updatedEmployee);  // Update only the provided properties
      return true;
    }
    return false;
  }

  // Remove an employee by ID
  removeEmployee(id: number): boolean {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);  // Remove from array
      return true;
    }
    return false;
  }

  // Get the average salary of all employees
  getAverageSalary(): number {
    const totalSalary = this.employees.reduce((sum, emp) => sum + emp.salary, 0);
    return totalSalary / this.employees.length;
  }

  // Generate a salary report for employees
  generateSalaryReport(): void {
    this.employees.forEach(employee => {
      console.log(`${employee.name} (${employee.position}): $${employee.salary}`);
    });
  }
}
