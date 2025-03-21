import { EmployeeFormValues } from "../_interfaces/employee"
import { create } from "zustand"
import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import employeesData from "@/data/employees.json"

type EmployeeStore = {
  employees: EmployeeFormValues[]
  addEmployee: (employee: EmployeeFormValues) => void
}

export const useEmployeeStore = create<EmployeeStore>()((set) => ({
  employees: employeesData.map((employee) => ({
    ...employee,
    dateOfStart: dayjs(employee.dateOfStart, "DD/MM/YYYY"),
    dateOfBirth: dayjs(employee.dateOfBirth, "DD/MM/YYYY"),
  })),
  addEmployee: (employee: EmployeeFormValues) => {
    const newEmployee = { ...employee, key: uuid() }
    set((state) => ({
      employees: [...state.employees, newEmployee],
    }))
    console.log("addEmployee", employee)
  },
}))
