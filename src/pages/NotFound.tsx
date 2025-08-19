import { Title } from "@/components/Title"
import { NavLink } from "@/components/NavLink"

const NotFound: React.FC = () => {
  return (
    <>
      <Title
        text="⛔ Cette page n'existe pas ⛔"
        level={1}
        className='text-red-500'
      />
      <div className='text-center text-red-500'>
        Vous pouvez retrouver la liste des employés{" "}
        <NavLink to='/current-employees' label='ici' />.
      </div>
    </>
  )
}
export default NotFound
