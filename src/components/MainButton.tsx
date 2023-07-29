import Link from 'next/link';

interface MainButtonProps {
  value: string;
  href: string; // Nueva prop para la ruta
}

const MainButton: React.FC<MainButtonProps> = ({ value, href }) => {
  return (
    <Link href={href} className="main__button">
      {value}
    </Link>
  );
};

export default MainButton;
