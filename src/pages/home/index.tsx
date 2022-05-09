import Ninja from '../../img/ninja.svg'
import './styles.scss'

const Home = () => (
  <div className="home">
    <div className="filter" />
    <div className="content">
      <h1 className="title">Svyat Kovtun</h1>
      <h2 className="text">React.JS Engineer <span className="nowrap">@ <a href="https://crowdbotics.com/" target="_blank" rel="noreferrer">Crowdbotics</a></span></h2>

      <img className="emoji" src={Ninja} width="156" alt="🐱‍👤" />

      <p className="text text--sm">Reach me: <a href="mailto:svyat.kovtun@gmail.com?subject=Hello!">svyat.kovtun@gmail.com</a></p>
    </div>
  </div>
)

export default Home
