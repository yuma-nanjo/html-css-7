import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }

  return (
    <>
      <Head>
        <title>Football Game</title>
      </Head>
      <div className="body">
        <header className="header">
          <div className="container">
            <div className="site">
              <img src="/img/logo.svg" alt="" />
              Football Game
            </div>

            <button className="navbtn" onClick={navFunc}>
              <span className="navbtn-bar"></span>
              <span className="sr-only">MENU</span>
            </button>

            <nav className="nav">
              <ul className="nav-menu">
                <li>
                  <Link href="/">
                    <a>
                      Next Showdown <span> 次の対戦 </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Tables &amp; Standings <span> 順位表 </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Teams <span> チーム </span>
                    </a>
                  </Link>
                </li>
              </ul>

              <ul className="nav-sns">
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-twitter.svg" alt="Twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-facebook.svg" alt="facebook" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-instagram.svg" alt="instagram" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-youtube.svg" alt="youtube" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-discord.svg" alt="discord" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-twitch.svg" alt="twitch" />
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="hero">
          <div
            className="hero-placeholder"
            style={{
              backgroundImage: `url(
                "data:image/jpeg;base64,/9j/4QQ0RXhpZgAATU0AKgAAAAgADAEAAAMAAAABBkAAAAEBAAMAAAABBBgAAAECAAMAAAADAAAAngEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAABAAAApAEbAAUAAAABAAAArAEoAAMAAAABAAIAAAExAAIAAAAfAAAAtAEyAAIAAAAUAAAA04dpAAQAAAABAAAA6AAAASAACAAIAAgACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpADIwMjE6MDQ6MTggMjM6Mjc6MDEAAAAEkAAABwAAAAQwMjMxoAEAAwAAAAH//wAAoAIABAAAAAEAAAAUoAMABAAAAAEAAAANAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAW4BGwAFAAAAAQAAAXYBKAADAAAAAQACAAACAQAEAAAAAQAAAX4CAgAEAAAAAQAAAq4AAAAAAAAASAAAAAEAAABIAAAAAf/Y/+0ADEFkb2JlX0NNAAL/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAANABQDASIAAhEBAxEB/90ABAAC/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dnd4eXp7fH/9oADAMBAAIRAxEAPwDkOmdMyH2Mtbl/Z6SC42NMvEf8GCPd+6ive++4/anMzXF8suvaWvj9yx7f5xzv5ar4Bt+zM9EHf7t5nl3+BnT6Cgz7ZLvX2Eazu093/nS6EZRwioT4fKRcuWORyG5wv9ADhjP7f5xu/sjL3fafsVfpbd23cyNs7foT9FJKepfZvo/o9niZ5/qpI+7i7S/xP/QWPg5nvDtvP+b/APDPmf/Z/+0L5lBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAgAAAgAAADhCSU0EJQAAAAAAEM3P+n2ox74JBXB2rq8Fw044QklNBDoAAAAAAQEAAAAQAAAAAQAAAAAAC3ByaW50T3V0cHV0AAAABQAAAABQc3RTYm9vbAEAAAAASW50ZWVudW0AAAAASW50ZQAAAABJbWcgAAAAD3ByaW50U2l4dGVlbkJpdGJvb2wAAAAAC3ByaW50ZXJOYW1lVEVYVAAAABYATgBFAEMAIABNAHUAbAB0AGkAVwByAGkAdABlAHIAIAA1ADcANQAwAEMAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAABWgha2OKLVuaAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANHAAAABgAAAAAAAAAAAAAADQAAABQAAAAJAHMAaABvAHcALQA0ADAAcAB4AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAUAAAADQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAADQAAAABSZ2h0bG9uZwAAABQAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAA0AAAAAUmdodGxvbmcAAAAUAAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQRAAAAAAABAQA4QklNBBQAAAAAAAQAAAABOEJJTQQMAAAAAALKAAAAAQAAABQAAAANAAAAPAAAAwwAAAKuABgAAf/Y/+0ADEFkb2JlX0NNAAL/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAANABQDASIAAhEBAxEB/90ABAAC/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dnd4eXp7fH/9oADAMBAAIRAxEAPwDkOmdMyH2Mtbl/Z6SC42NMvEf8GCPd+6ive++4/anMzXF8suvaWvj9yx7f5xzv5ar4Bt+zM9EHf7t5nl3+BnT6Cgz7ZLvX2Eazu093/nS6EZRwioT4fKRcuWORyG5wv9ADhjP7f5xu/sjL3fafsVfpbd23cyNs7foT9FJKepfZvo/o9niZ5/qpI+7i7S/xP/QWPg5nvDtvP+b/APDPmf/ZOEJJTQQhAAAAAABXAAAAAQEAAAAPAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwAAAAFABBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAgADIAMAAyADEAAAABADhCSU0EBgAAAAAABwACAAEAAQEA/+ENvWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU4YWVlYWJiLTgzMTYtNjI0ZS05MTkxLTRhOGMyN2NmNGQzMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0OGMwMjM4NC01ZmJmLTcwNGQtOTQwMy1kNjUxOWQyNjNhYmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iM0NBQkEyN0YzMkQ2QzgwODI4M0UyMEM3RTk3MjhFRTAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMTdUMTU6NDU6MzYrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTE4VDIzOjI3OjAxKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTE4VDIzOjI3OjAxKzA5OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2FjNjYzMWEtZmFhYy1mMzQ0LTkyMzMtZjUyOTlkN2NmMDBhIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE4VDIzOjIzOjM0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4YzAyMzg0LTVmYmYtNzA0ZC05NDAzLWQ2NTE5ZDI2M2FiYSIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0xOFQyMzoyNzowMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGSAAAAAAf/bAIQACAYGBgYGCAYGCAwIBwgMDgoICAoOEA0NDg0NEBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAEJCAgJCgkLCQkLDgsNCw4RDg4ODhERDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgADQAUAwEiAAIRAQMRAf/dAAQAAv/EAHsAAAIDAQAAAAAAAAAAAAAAAAADAQQFBwEAAwEAAAAAAAAAAAAAAAAAAQMFBhAAAAUBBgUFAQAAAAAAAAAAARECEgMAISITBBQFMTJCohWhUmJyI0MRAAECAwYHAQAAAAAAAAAAAAECAwARMSFREjITM2GRoSJSopME/9oADAMBAAIRAxEAPwDnOy7Lm5ZY50bgGUywgKxmQJypbaWGAheHp6afJJJm5x164tyWMhx5jNoFEggHRItNsilfNzKp7YM+ji06RGW/iifFf8TArEAHd7aXF5By9UEYpNRgowv+trq2AfSECTTmG2oURxlZSIS2lF1WJ1uZHYBhSvnue0afgc+/XeMhwGYmG+NrHNNh8vc29RUHvGj5fxw+LlHx+pUUdZi5VZ7fTLCdL9vk1dVe39M0f//Z"
              )`,
            }}
          ></div>
          <div
            className="hero-main"
            style={{ backgroundImage: `url(/img/hero.jpg)` }}
          ></div>

          <div className="contents container">
            <figure>
              <img src="/img/field.svg" alt="" width="151" height="245" />
            </figure>
            <div className="text">
              <h1>
                <span className="title01">
                  <span>eSports</span>
                </span>
                <span className="title02">
                  <span>Football Game</span>
                </span>
                <span className="title03">
                  <span>
                    2025
                    <img src="/img/logo.svg" alt="" width="62" height="62" />
                  </span>
                </span>
              </h1>
              <p>
                今年も世界各地で開催されているフットボールゲームのリーグ戦。ここでは対戦予定や結果、順位などのデータと最新情報を配信しています。
              </p>
            </div>
          </div>
        </div>

        <main className="container">
          <section className="showdown">
            <h2>Next Showdown</h2>
            <p>次の対戦</p>

            <div className="teams">
              <div className="team home">
                <img src="/img-team/battle-gear.svg" alt="" />
                Battle Gear
              </div>

              <div className="kickoff">
                <span className="date">Tomorrow</span>
                <span className="time">20:00</span>
                <span className="timezone">SGT (UTF+8)</span>
              </div>

              <div className="team away">
                <img src="/img-team/mecha-mask.svg" alt="" />
                Mecha Mask
              </div>
            </div>
          </section>

          <section className="standings">
            <h2>Tables &amp; Standings</h2>
            <p>順位表</p>

            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>順位</th>
                    <th>チーム</th>
                    <th>
                      <span>勝点</span>
                    </th>
                    <th>
                      <span>試合数</span>
                    </th>
                    <th>
                      <span>勝</span>
                    </th>
                    <th>
                      <span>分</span>
                    </th>
                    <th>
                      <span>負</span>
                    </th>
                    <th>
                      <span>得点</span>
                    </th>
                    <th>
                      <span>失点</span>
                    </th>
                    <th>
                      <span>得失点</span>
                    </th>
                    <th>直近5試合</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/all4one.svg" alt="" />
                          ALL4ONE
                        </a>
                      </Link>
                    </th>
                    <td>31</td>
                    <td>11</td>
                    <td>10</td>
                    <td>1</td>
                    <td>0</td>
                    <td>29</td>
                    <td>7</td>
                    <td>2</td>
                    <td>
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/battle-gear.svg" alt="" />
                          Battle Gear
                        </a>
                      </Link>
                    </th>
                    <td>26</td>
                    <td>10</td>
                    <td>8</td>
                    <td>2</td>
                    <td>0</td>
                    <td>13</td>
                    <td>1</td>
                    <td>12</td>
                    <td>
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/elf-helmet.svg" alt="" />
                          Elf Warrior
                        </a>
                      </Link>
                    </th>
                    <td>18</td>
                    <td>9</td>
                    <td>5</td>
                    <td>3</td>
                    <td>1</td>
                    <td>14</td>
                    <td>9</td>
                    <td>5</td>
                    <td>
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                    </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/sea-serpent.svg" alt="" />
                          Sea Serpent
                        </a>
                      </Link>
                    </th>
                    <td>17</td>
                    <td>10</td>
                    <td>5</td>
                    <td>2</td>
                    <td>3</td>
                    <td>13</td>
                    <td>3</td>
                    <td>10</td>
                    <td>
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/chess-queen.svg" alt="" />
                          Chess Queen
                        </a>
                      </Link>
                    </th>
                    <td>17</td>
                    <td>11</td>
                    <td>5</td>
                    <td>2</td>
                    <td>4</td>
                    <td>17</td>
                    <td>13</td>
                    <td>4</td>
                    <td>
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/campfire.svg" alt="" />
                          CampFire
                        </a>
                      </Link>
                    </th>
                    <td>16</td>
                    <td>10</td>
                    <td>4</td>
                    <td>4</td>
                    <td>2</td>
                    <td>14</td>
                    <td>9</td>
                    <td>5</td>
                    <td>
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/mecha-mask.svg" alt="" />
                          Mecha Mask
                        </a>
                      </Link>
                    </th>
                    <td>15</td>
                    <td>8</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                    <td>12</td>
                    <td>7</td>
                    <td>5</td>
                    <td>
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                    </td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/pharoah.svg" alt="" />
                          Pharoah
                        </a>
                      </Link>
                    </th>
                    <td>15</td>
                    <td>9</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2</td>
                    <td>16</td>
                    <td>15</td>
                    <td>1</td>
                    <td>
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/war-axe.svg" alt="" />
                          War AXE
                        </a>
                      </Link>
                    </th>
                    <td>14</td>
                    <td>10</td>
                    <td>4</td>
                    <td>2</td>
                    <td>4</td>
                    <td>11</td>
                    <td>10</td>
                    <td>1</td>
                    <td>
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/brutal-helmet.svg" alt="" />
                          Brutal Helmet
                        </a>
                      </Link>
                    </th>
                    <td>14</td>
                    <td>9</td>
                    <td>4</td>
                    <td>2</td>
                    <td>3</td>
                    <td>8</td>
                    <td>12</td>
                    <td>-4</td>
                    <td>
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/scorpion.svg" alt="" />
                          Scorpion
                        </a>
                      </Link>
                    </th>
                    <td>10</td>
                    <td>10</td>
                    <td>2</td>
                    <td>4</td>
                    <td>4</td>
                    <td>11</td>
                    <td>15</td>
                    <td>-4</td>
                    <td>
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/wind-hole.svg" alt="" />
                          Wind Hole
                        </a>
                      </Link>
                    </th>
                    <td>9</td>
                    <td>9</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>9</td>
                    <td>11</td>
                    <td>-2</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/colombian-statue.svg" alt="" />
                          Colombian Statue
                        </a>
                      </Link>
                    </th>
                    <td>9</td>
                    <td>9</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>9</td>
                    <td>13</td>
                    <td>-4</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                    </td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/bull-horns.svg" alt="" />
                          Bull Horns
                        </a>
                      </Link>
                    </th>
                    <td>8</td>
                    <td>8</td>
                    <td>2</td>
                    <td>2</td>
                    <td>4</td>
                    <td>14</td>
                    <td>13</td>
                    <td>1</td>
                    <td>
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                    </td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/metal-boot.svg" alt="" />
                          Metal Boot
                        </a>
                      </Link>
                    </th>
                    <td>8</td>
                    <td>8</td>
                    <td>2</td>
                    <td>2</td>
                    <td>4</td>
                    <td>10</td>
                    <td>12</td>
                    <td>-2</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                      <img src="/img/draw.svg" alt="分け" />
                    </td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/snake-totem.svg" alt="" />
                          Snake Totem
                        </a>
                      </Link>
                    </th>
                    <td>7</td>
                    <td>9</td>
                    <td>2</td>
                    <td>1</td>
                    <td>6</td>
                    <td>6</td>
                    <td>12</td>
                    <td>-6</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/volcano.svg" alt="" />
                          Volcano
                        </a>
                      </Link>
                    </th>
                    <td>5</td>
                    <td>5</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2</td>
                    <td>-1</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/win.svg" alt="勝ち" />
                    </td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/magic-trident.svg" alt="" />
                          Magic Trident
                        </a>
                      </Link>
                    </th>
                    <td>5</td>
                    <td>8</td>
                    <td>1</td>
                    <td>2</td>
                    <td>5</td>
                    <td>5</td>
                    <td>13</td>
                    <td>-8</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/laurel-crown.svg" alt="" />
                          Laurel Crown
                        </a>
                      </Link>
                    </th>
                    <td>2</td>
                    <td>8</td>
                    <td>0</td>
                    <td>2</td>
                    <td>6</td>
                    <td>4</td>
                    <td>19</td>
                    <td>-15</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                    </td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <th>
                      <Link href="/">
                        <a>
                          <img src="/img-team/horned-armor.svg" alt="" />
                          Horned Armor
                        </a>
                      </Link>
                    </th>
                    <td>1</td>
                    <td>9</td>
                    <td>0</td>
                    <td>1</td>
                    <td>8</td>
                    <td>5</td>
                    <td>25</td>
                    <td>-20</td>
                    <td>
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/draw.svg" alt="分け" />
                      <img src="/img/lose.svg" alt="負け" />
                      <img src="/img/lose.svg" alt="負け" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer className="footer container">
          <nav className="menus">
            <div className="menu-text">
              <h3>EVENTS</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>リーグ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ウィンターカップ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>リージョンステージ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ワールドファイナル</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu-text">
              <h3>ABOUT</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>プロジェクト</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>スポンサー</a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>チーム</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu-text">
              <h3>REGION</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>東京</a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>アジア</a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>アメリカ</a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>ヨーロッパ</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu-sns">
              <h3>JOIN</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-twitter.svg" alt="Twitter" />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-facebook.svg" alt="Facebook" />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-instagram.svg" alt="Instagram" />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-youtube.svg" alt="Youtube" />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-discord.svg" alt="Discord" />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a>
                      <img src="/img-sns/logo-twitch.svg" alt="Twitch" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="attribution">
            <div>
              <div className="site">
                <img src="/img/logo.svg" alt="" />
                Football Game
              </div>
              <div className="copyright">&copy; Football Game</div>
            </div>
            <div className="teamlogo">
              The icons used as the team logo made by Skoll,
              <br />
              Delapouite, Kier Heyl, Lorc, Carl Olsen. Available <br />
              on{" "}
              <Link href="https://game-icons.net">
                <a>https://game-icons.net</a>
              </Link>
            </div>
          </div>

          <img src="/img/logo.svg" alt="" className="footer-deco" />
        </footer>
      </div>
    </>
  );
}
