import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useUser } from "@/context/UserContext"
import { actionTypes } from "@/context/reducer"

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    required: true
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    required: true
  }
]

const Login = () => {
  const router = useRouter()
  const { state, dispatch } = useUser()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: actionTypes.SET_USER, payload: user })
  }

  useEffect(() => {
    if (!state.user?.email) return
    router.push(`/${state.user.email.split("@")[0]}`)
  }, [router, state.user])

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleFormSubmit}
      noValidate
    >
      {fields.map((field) => (
        <input
          className="border border-gray-300 rounded-md p-2 text-gray-700"
          key={field.name}
          {...field}
          value={user[field.name as keyof typeof user]}
          onChange={handleChange}
        />
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
        type="submit"
      >
        Login
      </button>
    </form>
  )
}

export default Login
