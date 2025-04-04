// Employee.ts

// Interface for an employee
export interface Employee {
  readonly id: number;        // Unique identifier
  readonly name: string;      // Employee name
  position: string;           // Job position
  salary: number;             // Salary
  city?: string;              // City of residence (optional property)
}

// Interface for a manager, extending the Employee interface
export interface Manager extends Employee {
  teamSize: number;           // Team size
}
