import styled from "styled-components"
import img from "../Assets/img12.png"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"
import { BiLogoLinkedinSquare } from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import imag from "../Assets/img1.svg"
import imag1 from "../Assets/flight.svg"

const Hero = () => {
  return (
    <div>
      <Container>
        <Holder>
         <H1><Img1 src={imag1}/>Supercharge Your<br />
         Mobile Life with <span>HashIT!</span>
         <Img1 src={imag}/></H1>
         <ImageHolder>
         <Image src={img} />
         </ImageHolder>
         <p style={{fontSize: "18px", fontWeight: "bold", color: "#fff"}}>Level up your mobile experience with Hashit! Send money, buy airtime, pay utilities, save, earn, learn, connect<br />
          with friends, explore our vibrant marketplace, advertise your biz, and win exciting giveaways - all in one place.</p>
        </Holder>
        <Wrapper2>
          <H3>Join the waitlist for <span>HashIT!</span></H3>
          <Box>
          <Input type="text" placeholder="FullName"/>
          <Input type="text" placeholder="Email"/>
          <Button>Get Notify when Hashit is online</Button>
          <Icon>
              <BiLogoFacebookCircle />
              <AiFillInstagram />
              <BiLogoLinkedinSquare />
              <AiOutlineTwitter />
          </Icon>
          </Box>
        </Wrapper2>
        <Last>2023 HashIT App Ltd. Allrights reserved.</Last>
      </Container>
    </div>
  )
}
export default Hero
const Img1 = styled.img`
@media screen and (max-width: 1024px){
    width: 19px;
    height: 19px;
  }
`
const Icon = styled.div`
  width: 200px;
  height: 90px;
  font-size: 19px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const Last = styled.div`
  width: 100%;
  height: 90px;
  background: #6b696962;
  display: flex;
  align-items: center;
  justify-content: center;
    `
const Button = styled.button`
width: 290px;
height: 43px;
background: black;
color: #fff;
border: none;
cursor: pointer
`
const H3 = styled.h3`
  font-size: 27px;

  @media screen and (max-width: 1024px){
    font-size: 19px;
  }

  span{
    color:#ec5824;
  }
`
const Input = styled.input`
width: 290px;
height: 40px;
border: none;
border:1px solid #ec5824;

::placeholder{
  color: grey;
}
`
const Box = styled.div`
  width: 30%;
  height: 500px;
  /* background: black; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  `
const Wrapper2 = styled.div`
  width: 100%;
  height: 400px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `
const ImageHolder = styled.div`
  width: 90%;
  height: 300px;
  /* background: blue; */
  margin-bottom: 10px;
  position: relative;
  bottom: 20px;

  @media screen and (max-width: 1024px){
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  position: relative;
    bottom: 10px;


    @media screen and (max-width: 320px){
    width: 300px;
    height: 200px;
  }
  }
`
const Image = styled.img`
  width: 790px;
  height: 300px;
  object-fit: contain;
  margin-top: -40px;

  @media screen and (max-width: 1024px){
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 320px){
    width: 300px;
    height: 200px;
  }
`
const H1 = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  padding-top: 19px;

  @media screen and (max-width: 1024px){
    font-size: 35px;
  }
  @media screen and (max-width: 320px){
    font-size: 19px;
    padding-bottom: 12px;
  }

  span{
    color:#ec5824;
  }
`
const Holder = styled.div`
width: 100%;
height: 550px;
display: flex;
align-items: center;
justify-content: center;
/* background: wheat; */
text-align: center;
flex-direction: column;
p{
  padding-bottom: 50px;

  @media screen and (max-width: 1024px){
    font-size: 16px;
  }
}
/* margin-top: 70px; */
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: grey;

  @media screen and (max-width: 320px){
    width: 100%;
  }
`