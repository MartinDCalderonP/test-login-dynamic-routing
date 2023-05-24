import { ReactNode, useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "@/context/UserContext"

interface PrivateAdminRouteProps {
  children: ReactNode
}

const PrivateAdminRoute = ({ children }: PrivateAdminRouteProps) => {
  const router = useRouter()
  const { state } = useUser()
  const isAdmin = state.user?.email === "admin"

  useEffect(() => {
    if (!state.user || !isAdmin) router.push("/")
  }, [router, state.user, isAdmin])

  return isAdmin ? <>{children}</> : null
}

export default PrivateAdminRoute
