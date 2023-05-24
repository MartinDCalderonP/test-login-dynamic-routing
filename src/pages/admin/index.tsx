import PrivateAdminRoute from "@/components/PrivateAdminRoute"

const AdminPage = () => {
  return (
    <PrivateAdminRoute>
      <div>Admin Page</div>
    </PrivateAdminRoute>
  )
}

export default AdminPage
