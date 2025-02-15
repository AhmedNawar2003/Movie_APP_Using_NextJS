import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ${styles.navbarUl}`}>
              <li className="nav-item">
                <a className={`nav-link active ${styles.navLink}`} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link  ${styles.navLink}`} href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link  ${styles.navLink}`} href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
