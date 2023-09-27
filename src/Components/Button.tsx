import React from "react"
import { styled } from "styled-components"

import {IconType} from "react-icons"

type Props = {
    text: string
    icon: IconType
}
 const Button = ({text, icon: Icon}:Props)=>{
    return<>
    <Container>
        <Icons>
           <Icon/>  
        </Icons>
       
        <Content>{text}</Content>
    </Container>
    </>
}
export default Button

const Container = styled.button`
    padding: 10px 25px;
    background-color: cyan;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 4px;
`

const Icons = styled.div`
font-size: 30px;
color: blue;
`
const Content = styled.div`
    margin:0 5px;
    font-size: 18px;
`