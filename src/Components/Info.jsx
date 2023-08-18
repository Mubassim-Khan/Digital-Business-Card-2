import githubIcon from "../assets/icons8-github.png"
import profile from "../assets/profile.jpg"

export default function Info() {
  return (
    <>
      <div className="container">

        <div className="header">
          <img className="profile-img" src={profile} />
          <h1>Mubassim Ahmed Khan</h1>
          <h4>Frontend Developer</h4>
          <div className="button-section">
            {/* email */}
            <a href="mailto:mubassimkhan@gmail.com">
              <button className="btn-email">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                  <path d="M0.102406 1.70721L6.50001 4.90561L12.8976 1.70721C12.8739 1.29957 12.6953 0.916403 12.3983 0.636194C12.1012 0.355985 11.7083 0.199937 11.3 0.200012H1.70001C1.29167 0.199937 0.898764 0.355985 0.601748 0.636194C0.304733 0.916403 0.126089 1.29957 0.102406 1.70721Z" fill="#1E1F26" />
                  <path d="M12.9 3.49441L6.50001 6.69441L0.100006 3.49441V8.20001C0.100006 8.62436 0.268577 9.03133 0.568635 9.33138C0.868693 9.63144 1.27566 9.80001 1.70001 9.80001H11.3C11.7244 9.80001 12.1313 9.63144 12.4314 9.33138C12.7314 9.03133 12.9 8.62436 12.9 8.20001V3.49441Z" fill="#1E1F26" />
                </svg>
                <span>Email</span></button>
            </a>
            {/* Github btn */}
            <a
              href="https://www.github.com/Mubassim-Khan"
              rel="noopener"
              target="_blank"
              title="Github">
              <button className="btn-github">

                <svg xmlns="http://www.w3.org/2000/svg" height="16px" version="1.1" viewBox="0 0 16 16" width="16px"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>Github</span></button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}