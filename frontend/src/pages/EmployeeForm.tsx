import { type FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import type { EmployeeFormData } from "../types"
import { createEmployee, getEmployee, updateEmployee } from "../api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card, CardHeader, CardTitle, CardContent, CardFooter,
} from "@/components/ui/card"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

function EmployeeForm() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState<EmployeeFormData>({
    name: "",
    email: "",
    position: "",
    department: "",
    hire_date: "",
    salary: "",
    is_active: true,
  })

  useEffect(() => {
    if (id) {
      getEmployee(Number(id)).then((emp) =>
        setForm({
          name: emp.name,
          email: emp.email,
          position: emp.position,
          department: emp.department,
          hire_date: emp.hire_date,
          salary: emp.salary,
          is_active: emp.is_active,
        })
      )
    }
  }, [id])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isEdit) {
      await updateEmployee(Number(id), form)
    } else {
      await createEmployee(form)
    }
    navigate("/")
  }

  return (
    <div className="mx-auto max-w-lg p-6">
      <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate("/")}>
        <ArrowLeft /> Back
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{isEdit ? "Edit" : "New"} Employee</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="position">Position</Label>
              <Input id="position" value={form.position} onChange={(e) => setForm((p) => ({ ...p, position: e.target.value }))} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="department">Department</Label>
              <Input id="department" value={form.department} onChange={(e) => setForm((p) => ({ ...p, department: e.target.value }))} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="hire_date">Hire Date</Label>
              <Input id="hire_date" type="date" value={form.hire_date} onChange={(e) => setForm((p) => ({ ...p, hire_date: e.target.value }))} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" type="number" step="0.01" value={form.salary} onChange={(e) => setForm((p) => ({ ...p, salary: e.target.value }))} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="is_active">Active</Label>
              <Select
                value={form.is_active ? "true" : "false"}
                onValueChange={(v) => setForm((p) => ({ ...p, is_active: v === "true" }))}
              >
                <SelectTrigger className="w-full" id="is_active">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => navigate("/")}>Cancel</Button>
            <Button type="submit">{isEdit ? "Update" : "Create"}</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default EmployeeForm
