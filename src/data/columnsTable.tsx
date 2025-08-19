import type { TableProps } from "antd/es/table"
import { EmployeeFormValues } from "@/_interfaces/employee"
import dayjs from "dayjs"

export const columns: TableProps<EmployeeFormValues>["columns"] = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
    render: (text) => (
      <a>{text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}</a>
    ),
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
    render: (text) => <a>{text.toUpperCase()}</a>,
    sorter: (a, b) => a.lastname.localeCompare(b.lastname),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "dateOfStart",
    dataIndex: "dateOfStart",
    key: "dateOfStart",
    render: (text) => <a>{dayjs(text).format("DD/MM/YYYY")}</a>,
    sorter: (a, b) => {
      const dateA = dayjs(a.dateOfStart) // Convertir en format ISO (YYYY-MM-DD)
      const dateB = dayjs(b.dateOfStart)
      return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Department",
    key: "department",
    dataIndex: "department",
    render: (text) => {
      if (Array.isArray(text)) {
        return text.join(", ")
      }
      return <a>{text}</a>
    },
    sorter: (a, b) => {
      const deptA = a.department.join(",")
      const deptB = b.department.join(",")
      return deptA.localeCompare(deptB)
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Date Of Birth",
    key: "dateOfBirth",
    dataIndex: "dateOfBirth",
    render: (text) => <a>{dayjs(text).format("DD/MM/YYYY")}</a>,
    sorter: (a, b) => {
      const dateA = dayjs(a.dateOfBirth) // Convertir en format ISO (YYYY-MM-DD)
      const dateB = dayjs(b.dateOfBirth)
      return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Street",
    key: "street",
    dataIndex: "street",
    render: (text) => <a>{text.toLowerCase()}</a>,
    sorter: (a, b) => a.street.localeCompare(b.street),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "City",
    key: "city",
    dataIndex: "city",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.city.localeCompare(b.city),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "State",
    key: "state",
    dataIndex: "state",
    render: (text) => {
      if (Array.isArray(text)) {
        return text.join(", ")
      }
      return <a>{text}</a>
    },

    sorter: (a, b) => {
      const StateA = a.state.join(",")
      const StateB = b.state.join(",")
      return StateA.localeCompare(StateB)
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Zip Code",
    key: "zipcode",
    dataIndex: "zipcode",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => Number(a.zipcode) - Number(b.zipcode),
    sortDirections: ["ascend", "descend"],
  },
]
