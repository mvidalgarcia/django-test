export interface Employee {
  id: number
  name: string
  email: string
  position: string
  department: string
  hire_date: string
  salary: string
  is_active: boolean
}

export type EmployeeFormData = Omit<Employee, "id">
