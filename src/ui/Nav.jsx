export default function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="#hero">
        <span className="mark">A</span>
        <span className="who">
          <b>ABEL</b>
          <span>software eng · ★ 21</span>
        </span>
      </a>

      <ul>
        <li>
          <a href="#about">
            <i>01</i> About
          </a>
        </li>
        <li>
          <a href="#stack">
            <i>02</i> Stack
          </a>
        </li>
        <li>
          <a href="#github">
            <i>03</i> GitHub
          </a>
        </li>
        <li>
          <a href="#work">
            <i>04</i> Work
          </a>
        </li>
        <li>
          <a href="#contact">
            <i>05</i> Contact
          </a>
        </li>
      </ul>

      <div className="status">
        <span className="blip" />
        open for work
      </div>
    </nav>
  )
}
