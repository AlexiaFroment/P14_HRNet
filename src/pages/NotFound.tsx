import { Title } from "@/components/Title"
import { NavLink } from "@/components/NavLink"

const NotFound: React.FC = () => {
  return (
    <>
      <Title
        text='🚧 Cette page est en cours de construction 🚧'
        level={1}
        className='text-red-500'
      />
      <div className='text-center text-red-500'>
        Retrouvez la liste des employés{" "}
        <NavLink to='/current-employees' label='ici' />.
      </div>
    </>
  )
}
export default NotFound
