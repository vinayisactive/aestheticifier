import { ReactNode } from "react"

const MaxWitdhWrapper = ({children, className} : {
    children : ReactNode, 
    className?: string 
}) => {
  return (
    <div className={`h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20 ${className}`}>
      {children}
    </div>
  )
}

export default MaxWitdhWrapper
