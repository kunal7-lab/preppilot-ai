import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#1b1919] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">PrepPilot AI</h1>
      <Link
        to="/auth"
        className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Go to Auth
      </Link>
    </div>
  )
}

export default Home
