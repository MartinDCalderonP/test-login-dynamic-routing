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
  return (
    <form className="flex flex-col space-y-4">
      {fields.map((field) => (
        <input
          className="border border-gray-300 rounded-md p-2 text-gray-700"
          key={field.name}
          {...field}
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
