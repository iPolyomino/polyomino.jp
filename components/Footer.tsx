import ContentsCard from "./ContentsCard";

const Footer = () => {
  return (
    <footer>
      <ContentsCard>&copy; {new Date().getFullYear()} Hagi</ContentsCard>
    </footer>
  );
};

export default Footer;
