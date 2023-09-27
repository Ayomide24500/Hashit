import React from "react"
import styled from "styled-components"
import Card from "../Components/Card"
import data from './data.json'
// import Button from "../Components/Button"
// import {AiFillStar} from "react-icons/ai"
// import Img from "../Assets/iu.jpg"


export default function CardDisplay(){
    return(
        <div>
                <Container>
                    <h1>Choose from Your Stored</h1>
                    <Wrapper>

            {
                data?.map((props) => (
                <Card img={props.Img} title={props.title} h1={props.h1} h2={props.h2}/>
                ))
            }
         </Wrapper>
        </Container>
        </div>
    )
}
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const Container = styled.div`
width: 100%;
height: 100%;
/* background: aqua; */
margin-top: -24px;
color: #000;
`