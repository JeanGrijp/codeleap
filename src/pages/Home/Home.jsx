import { HomeContainer } from "./Home.style"
import logo from '../../assets/SVG/logo.svg'

export const Home = () => {
  return (
    <HomeContainer>
      <img src={logo} alt="codeleap" />
    </HomeContainer>
  )
}