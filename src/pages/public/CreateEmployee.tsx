import { Title } from "@/components/Title"
import { NavLink } from "@/components/NavLink"
import { EmployeeForm } from "@/components/EmployeeForm"

const CreateEmployee: React.FC = () => {
  return (
    <>
      <Title text='HRNet' level={1} className='text-amber-500' />
      <NavLink to='/current-employees' label='Current Employees' />
      <Title text='Create Employee' level={2} className='text-pink-500' />
      <div className='flex flex-col items-center py-4 '>
        <EmployeeForm />
      </div>
      <div></div>
    </>
  )
}
export default CreateEmployee
