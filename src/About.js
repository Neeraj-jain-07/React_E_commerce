import HeroSection from './components/HeroSection'
import {useProductContext} from './context/ProductContext'

const About = () => {
  const {myName} = useProductContext()
  const data ={
    title:"Thapa Ecommerce"
  }
  return (
    <div>
      <HeroSection data={data} />
      {myName}
    </div>
  )
}

export default About
