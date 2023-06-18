import { Link } from "react-router-dom"
import { cutString } from "../../utils/cutString"

const Crumb = ({ name, path, isLast }: { name: string, path: string, isLast: boolean }) => {
  const slicedName = cutString(name, 20);
  return (
    <Link
      to={path}
    >
      <p className="capitalize"
        style={{ color: isLast ? "black" : "" }}
      >
        {slicedName}
      </p>
    </Link >
  )
}

export default Crumb
