import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Pencil, Trash2, Plus } from "lucide-react"
import type { Employee } from "../types"
import { getEmployees, deleteEmployee } from "../api"
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getEmployees().then(setEmployees)
  }, [])

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return
    await deleteEmployee(id)
    setEmployees((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Employees</CardTitle>
            <Button asChild>
              <Link to="/employees/new">
                <Plus /> New Employee
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Hire Date</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Active</TableHead>
                <TableHead className="w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((e) => (
                <TableRow key={e.id}>
                  <TableCell className="font-medium">{e.name}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>{e.position}</TableCell>
                  <TableCell>{e.department}</TableCell>
                  <TableCell>{e.hire_date}</TableCell>
                  <TableCell>{e.salary}</TableCell>
                  <TableCell>{e.is_active ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="icon-xs" onClick={() => navigate(`/employees/${e.id}/edit`)}>
                        <Pencil />
                      </Button>
                      <Button variant="destructive" size="icon-xs" onClick={() => handleDelete(e.id)}>
                        <Trash2 />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {employees.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground">
                    No employees yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmployeeList
