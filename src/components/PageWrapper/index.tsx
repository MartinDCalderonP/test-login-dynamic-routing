import { ReactNode } from "react"
import SignOut from "../SignOut"

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="flex justify-center items-center gap-5">
      {children}
      <SignOut />
    </div>
  )
}

export default PageWrapper
