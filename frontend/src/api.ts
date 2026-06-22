import type { Employee, EmployeeFormData } from "./types"

const BASE = "/api/employees"

export async function getEmployees(): Promise<Employee[]> {
  const res = await fetch(`${BASE}/`)
  if (!res.ok) throw new Error("Failed to fetch employees")
  return res.json()
}

export async function getEmployee(id: number): Promise<Employee> {
  const res = await fetch(`${BASE}/${id}/`)
  if (!res.ok) throw new Error("Failed to fetch employee")
  return res.json()
}

export async function createEmployee(data: EmployeeFormData): Promise<Employee> {
  const res = await fetch(`${BASE}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Failed to create employee")
  return res.json()
}

export async function updateEmployee(id: number, data: EmployeeFormData): Promise<Employee> {
  const res = await fetch(`${BASE}/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Failed to update employee")
  return res.json()
}

export async function deleteEmployee(id: number): Promise<void> {
  const res = await fetch(`${BASE}/${id}/`, { method: "DELETE" })
  if (!res.ok) throw new Error("Failed to delete employee")
}
