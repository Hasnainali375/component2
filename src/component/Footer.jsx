import "./Footer.css";
const Footer = ({ greet }) => {
  return (
    <div>
      <div>hello {greet}</div>
      <div className="container">this is footer </div>
    </div>
  );
};
export default Footer;
