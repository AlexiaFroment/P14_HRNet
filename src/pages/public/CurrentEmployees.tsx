import { useEmployeeStore } from "@/_store/useEmployeeStore"
import { Title } from "@/components/Title"
import { NavLink } from "@/components/NavLink"
import { TableComponent } from "@/components/TableComponent"

const CurrentEmployees: React.FC = () => {
  const { employees } = useEmployeeStore()

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
