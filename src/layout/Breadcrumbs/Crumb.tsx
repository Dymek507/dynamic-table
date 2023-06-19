import { Link } from "react-router-dom"
import { cutString } from "../../utils/cutString"

const Crumb = ({ name, path, isLast }: { name: string, path: string, isLast: boolean }) => {
  const slicedName = cutString(name, 30);

  const pathWithoutPlus = slicedName.replace(/\+/g, " ");

  return (
    <Link
      to={path}
    >
      <p className="capitalize"
        style={{ color: isLast ? "black" : "" }}
      >
        {pathWithoutPlus}
      </p>
    </Link >
  )
}

export default Crumb
