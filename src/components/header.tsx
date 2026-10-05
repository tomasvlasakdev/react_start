import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
        <Link to="/">
          <div>O mně</div>
        </Link>
        <Link to="blog">
          <div>Blog</div>
        </Link>
        <Link to="contact">
          <div>Kontakt</div>
        </Link>
      </header>
    )
}