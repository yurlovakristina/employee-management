// index.ts
// index.ts
import { EmployeeList } from './EmployeeList';
import { Employee, Manager } from './Employee';


// Создаем сотрудников
const employee1: Employee = {
  id: 1,
  name: "Alice",
  position: "Developer",
  salary: 5000,
  city: "New York"
};

const manager1: Manager = {
  id: 2,
  name: "Bob",
  position: "Manager",
  salary: 7000,
  city: "San Francisco",
  teamSize: 5
};

// Создаем список сотрудников
const employeeList = new EmployeeList();

// Добавляем сотрудников в список
employeeList.addEmployee(employee1);
employeeList.addEmployee(manager1);

// Выводим сотрудника по ID
console.log(employeeList.getEmployeeById(1)); // Alice
console.log(employeeList.getEmployeeById(2)); // Bob

// Обновляем информацию о сотруднике
employeeList.updateEmployee(1, { salary: 5500 });
console.log(employeeList.getEmployeeById(1)); // Alice с обновленной зарплатой

// Вычисляем среднюю зарплату
console.log(`Средняя зарплата: $${employeeList.getAverageSalary()}`);

// Генерируем отчет о зарплатах сотрудников
employeeList.generateSalaryReport();

// Удаляем сотрудника
employeeList.removeEmployee(1);
console.log(employeeList.getEmployeeById(1)); // undefined, так как сотрудник удален
