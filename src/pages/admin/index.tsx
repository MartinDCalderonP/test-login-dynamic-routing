import PrivateAdminRoute from "@/components/PrivateAdminRoute"
import PageWrapper from "@/components/PageWrapper"

const AdminPage = () => {
  return (
    <PrivateAdminRoute>
      <PageWrapper>
        Admin Page
      </PageWrapper>
    </PrivateAdminRoute>
  )
}

export default AdminPage
