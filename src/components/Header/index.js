import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <nav className="header-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-img"
      />
      <ul className="score-card">
        <li className="score">
          <p>
            Score: <span className="score-value">{score}</span>
          </p>
        </li>
        <li className="timer-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="seconds">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
