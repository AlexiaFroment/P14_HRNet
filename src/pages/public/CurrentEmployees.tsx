import { Title } from "@/components/Title"
import { NavLink } from "@/components/NavLink"
import { TableComponent } from "@/components/TableComponent"
import employees from "@/data/employees.json"

const CurrentEmployees: React.FC = () => {
  return (
    <>
      <Title
        text='Current Employees'
        level={1}
        align='center'
        className='text-green-600'
      />

      <TableComponent data={employees} />

      <NavLink to='/create-employee' label='Create Employee' />
    </>
  )
}
export default CurrentEmployees
