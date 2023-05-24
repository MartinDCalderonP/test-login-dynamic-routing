import { useUser } from "@/context/UserContext"
import { actionTypes } from "@/context/reducer"

const SignOut = () => {
  const { dispatch } = useUser()

  const handleSignOut = () => {
    dispatch({ type: actionTypes.REMOVE_USER })
    window.localStorage.removeItem("user")
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  )
}

export default SignOut
