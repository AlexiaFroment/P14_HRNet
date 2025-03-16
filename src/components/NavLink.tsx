import { Link } from "react-router-dom"

type NavLinkProps = {
  to: string
  label: string
  className?: string
}
export const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  className = "",
}) => {
  return (
    <Link
      to={to}
      className={` block text-center  text-blue-500 hover:text-blue-700 ${className}`}>
      {label}
    </Link>
  )
}
