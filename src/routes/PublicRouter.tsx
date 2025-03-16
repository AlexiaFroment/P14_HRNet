import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { Loader } from "@/components/Loader"

const Page1 = React.lazy(() => import("@/pages/public/Page1"))
const CurrentEmployees = React.lazy(
  () => import("@/pages/public/CurrentEmployees")
)
const CreateEmployee = React.lazy(() => import("@/pages/public/CreateEmployee"))
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
          <Route path='/page1' element={<Page1 />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          <Route path='/current-employees' element={<CurrentEmployees />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default PublicRouter
