import { Loader } from "@/components/Loader"
const Page1: React.FC = () => {
  return (
    <>
      <h1 className='text-3xl text-amber-500'>Hello world</h1>
      <br />
      <button className='inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'>
        Button
      </button>
      <button className='btn btn-primary'>Button</button>
      <Loader />
    </>
  )
}
export default Page1
