import ThemeTogglerButton from '../../components/ThemeToggler'
import { ThemeContext } from '../../contexts/theme-context'

import Ninja from '../../img/ninja.svg'
import Github from '../../assets/Github'

import './styles.scss'

const Home = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div className="home">
        <div className="filter" />

        <div className="content">
          <h1 className="title">Svyat Kovtun</h1>
          <h2 className="text">React.JS Engineer <span className="nowrap">@ <a href="https://crowdbotics.com/" target="_blank" rel="noreferrer">Crowdbotics</a></span></h2>

          <img className="emoji" src={Ninja} width="156" alt="🐱‍👤" />
          <p className="text text--sm">Reach me: <a href="mailto:svyat.kovtun@gmail.com?subject=Hello!">svyat.kovtun@gmail.com</a></p>
        </div>

        <div className="header">
          <ThemeTogglerButton />

          <a className="header__link" title="GitHub" href="https://github.com/svyatik" target="_blank" rel="noreferrer">
            <Github color={theme === 'dark' ? '#fff' : '#000'} width={24} />
          </a>
        </div>
      </div>
  )}
  </ThemeContext.Consumer>
)

export default Home
