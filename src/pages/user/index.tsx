import PrivateUserRoute from "@/components/PrivateUserRoute"
import PageWrapper from "@/components/PageWrapper"

const UserPage = () => {
  return (
    <PrivateUserRoute>
      <PageWrapper>User Page</PageWrapper>
    </PrivateUserRoute>
  )
}

export default UserPage
