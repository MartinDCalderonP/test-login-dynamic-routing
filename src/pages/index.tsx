import { Inter } from "next/font/google"
import Login from "@/components/Login"

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
  return (
    <main
      className={
        inter.className +
        " flex flex-col items-center justify-center min-h-screen py-2"
      }
    >
      <Login />
    </main>
  )
}

export default Home
