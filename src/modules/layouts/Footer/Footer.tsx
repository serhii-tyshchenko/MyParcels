import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content wrapper">
      <a href={process.env.REACT_APP_AUTHOR_URL}>
        © {process.env.REACT_APP_AUTHOR_NAME}
      </a>
    </div>
  </footer>
);

export { Footer };
