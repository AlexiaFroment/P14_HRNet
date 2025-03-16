import type { TableProps } from "antd"
import { DataType } from "@/interface/interfaces"

export const columns: TableProps<DataType>["columns"] = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.lastname.localeCompare(b.lastname),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "StartDate",
    dataIndex: "startdate",
    key: "startdate",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => {
      const dateA = new Date(a.startdate.split("/").reverse().join("-")) // Convertir en format ISO (YYYY-MM-DD)
      const dateB = new Date(b.startdate.split("/").reverse().join("-"))
      return dateA.getTime() - dateB.getTime()
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Department",
    key: "department",
    dataIndex: "department",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.department.localeCompare(b.department),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Date of Birth",
    key: "dateofbirth",
    dataIndex: "dateofbirth",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => {
      const dateA = new Date(a.dateofbirth.split("/").reverse().join("-")) // Convertir en format ISO (YYYY-MM-DD)
      const dateB = new Date(b.dateofbirth.split("/").reverse().join("-"))
      return dateA.getTime() - dateB.getTime()
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Street",
    key: "street",
    dataIndex: "street",
    render: (text) => <a>{text}</a>,
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
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.state.localeCompare(b.state),
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
