import styled from "styled-components";


const Contact = () => {
  const Wrapper = styled.section`
    
    text-align: center;
    .heading{
       font-size:30px;
       font-weight:500;
       padding: 45px 30px 30px;
    }
    
    .form{
      display:flex;
      flex-direction:column;
      gap:20px;
      width:500px;
      margin:30px auto;
    }

    button{
      width: 100px;
      outline: none;
      border: none;
      background: blue;
      color: white;
      padding: 4px 3px;
      cursor: pointer;
      transition:0.5s;
    }

    button:hover{
      background: #4b82d5;
    }
  `;

  return (
    <Wrapper>
      <h3 className="heading">Contact us</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1842360.6943601319!2d78.58898358714669!3d23.95231440068263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675957677137!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="MainOffice"></iframe>

    <div className="form">
        <form action="https://formspree.io/f/mjvdywdy" method="POST" className="form">
        <input type="text" name="username" id="" placeholder="username"/>
        <input type="email" name="email" id="" placeholder="email"/>
        <textarea name="Message" placeholder="Enter message" cols="30" rows="5"></textarea>
        <button type="submit">Send</button>
        </form>
    </div>
    </Wrapper>);
};

export default Contact;
