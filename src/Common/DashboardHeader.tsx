// import {useState} from "react"
import styled from "styled-components"
import logo from "../Assets/logo.svg"
import Swith from "../Assets/swicth.svg"
const Header = () => {
    
    return (
        <div>
            <Container>
               <Wrapper>
                   <Logo>
                      <Img src={logo} />
                   </Logo>
                   <Close>
                    <Img1 src={Swith} />
                   </Close>
               </Wrapper>
            </Container>
        </div>
    )
}
export default Header
const Img1 = styled.img`
    height: 70px;
    width: 60px;
`
const Img = styled.img`
    height: 50px;
    width: 30px;
    color: black;
`
const Close = styled.div`
width: 50px;
height: 50px;
/* background: green; */
margin-left: 20px;

`
const Logo = styled.div`
    width: 60px;
    height: 50px;
    /* background: blue; */
    margin-right: 20px;
`
const Wrapper = styled.div`
width: 90%;
height: 50px;
/* background: #fff; */
display: flex;
align-items: center;
justify-content: space-between;

`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 94px;
    background: #d6d2d290;
    display: flex;

    @media screen and (max-width: 789px){
        width: 100%;
        height: 90px
    }
    /* position: fixed; */
`