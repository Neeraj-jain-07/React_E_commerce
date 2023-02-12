import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageNavigation = (props) => {
  return (
    <Wrapper>
     <p className='pageNavheading'> <Link to='/'>Home</Link> / {props.name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .pageNavheading{
    font-size:25px;
    background: #fbfbfb;
    padding: 10px 0px 10px 8px;

  }
`

export default PageNavigation
