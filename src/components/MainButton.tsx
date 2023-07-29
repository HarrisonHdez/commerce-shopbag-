import { Link } from "react-scroll";

interface MainButtonProps {
  value: string;
  href: string;
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
