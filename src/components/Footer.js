import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} itemClass={"footer-link"}/>
      <SocialLinks parentClass={"footer-icons"} itemClass={"footer-icon"}/>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{year}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer