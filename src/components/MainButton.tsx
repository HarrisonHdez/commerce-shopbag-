import { Link } from "react-scroll";

interface MainButtonProps {
  value: string;
  href: string; // Nueva prop para la ruta
}

const MainButton: React.FC<MainButtonProps> = ({ value, href }) => {
  return (
    <Link
      activeClass="active"
      to="products"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="main__button"
    > {value}</Link>
  );
};

export default MainButton;
