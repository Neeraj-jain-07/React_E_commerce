import styled from 'styled-components'
import { AiOutlinePlus ,AiOutlineMinus } from 'react-icons/ai'

const AddToItem = ({amount , amountDecrease , amountIncrease}) => {
    return (
        <Wrapper>
            <div className="setItemAdd">
                <button onClick={amountDecrease}><AiOutlineMinus className='icon'/></button>
                <p>{amount}</p>
                <button onClick={amountIncrease}><AiOutlinePlus className='icon'/></button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .setItemAdd{
    display:flex;
    gap:20px;
    align-items: center;
    padding: 20px 4px;
  }

  p{
    color:black;
    font-size:20px;
  }
  button{
    height: fit-content;
    border: none;
    outline: none;
    background: none;
    cursor:pointer;
    .icon{
        font-size: 22px;
       
    }
  }
`

export default AddToItem
