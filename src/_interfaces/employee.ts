import { Dayjs } from "dayjs"

export interface EmployeeFormValues {
  key: string
  firstname: string
  lastname: string
  dateOfStart: Dayjs | null
  dateOfBirth: Dayjs | null
  street: string
  city: string
  state: string[]
  zipcode: string
  department: string[]
}
