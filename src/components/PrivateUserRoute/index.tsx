import { ReactNode, useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "@/context/UserContext"

interface PrivateUserRouteProps {
  children: ReactNode
}

const PrivateUserRoute = ({ children }: PrivateUserRouteProps) => {
  const router = useRouter()
  const { state } = useUser()
  const isUser = state.user?.email === "user"

  useEffect(() => {
    if (!isUser) router.push("/")
  }, [router, isUser])

  return isUser ? <>{children}</> : null
}

export default PrivateUserRoute
