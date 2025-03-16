import { Outlet } from "react-router-dom"
export const MainLayout: React.FC = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto p-4 '>
        <Outlet />
      </div>
    </div>
  )
}
