import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Button} from './styles/Button'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>404</h1>
        <h3>UH OH! You're lost</h3>
        <p>The page are you looking for does not exist .How you got here is a mystery .But you can click the button below to go back to the homepage</p>
        <Link to='/'>
            <Button>Go Back to Home</Button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 .container{
    text-align: center;
    padding: 8% 40px;
 }
 p{
  margin:12px 3px;
 }
`

export default ErrorPage
