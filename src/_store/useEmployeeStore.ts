import { EmployeeFormValues } from "../_interfaces/employee"
import { create } from "zustand"
import dayjs from "dayjs"
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
    set((state) => ({
      employees: [...state.employees, employee],
    }))
    console.log("addEmployee", employee)
  },
}))
