import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { Loader } from "@/components/Loader"

const CurrentEmployees = lazy(() => import("@/pages/public/CurrentEmployees"))
const CreateEmployee = lazy(() => import("@/pages/public/CreateEmployee"))
const NotFound = lazy(() => import("@/pages/NotFound"))
const PublicRouter: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className='flex justify-center items-center h-screen'>
          <Loader />
        </div>
      }>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CreateEmployee />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          <Route path='/current-employees' element={<CurrentEmployees />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default PublicRouter
