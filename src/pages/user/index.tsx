import PrivateUserRoute from "@/components/PrivateUserRoute"

const UserPage = () => {
  return (
    <PrivateUserRoute>
      <div>User Page</div>
    </PrivateUserRoute>
  )
}

export default UserPage
