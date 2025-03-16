import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Loader } from "@/components/Loader"

const PublicRouter = React.lazy(() => import("@/routes/PublicRouter"))
// const AuthRouter = React.lazy(() => import("@/routes/AuthRouter"))

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
          {/* <Route path='/auth/*' element={<AuthRouter />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
