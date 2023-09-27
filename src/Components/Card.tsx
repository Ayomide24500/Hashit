import { IconType } from "react-icons/lib";
import styled from "styled-components" 
import Img from "../Assets/iu.jpg"
import {AiFillStar} from "react-icons/ai"

interface iprops{
    img?: string | undefined;
    title: string;
    h1: number;
    h2: number;
    icon?: IconType
}
export default function CardTwo({img, title, h1, h2}:iprops){
    return(
        <div>
            <Container>
                <ImageWrap>
                   <Image src ={Img}>
                    </Image>
                    <Smallbox>
                        12%
                    </Smallbox>
                </ImageWrap>
                <Hold>
                   <Title>{title}</Title>
                   <H1>#{h1}</H1>
                   <H2>#{h2}</H2>
                </Hold>
            </Container>
            <Container>
                <IconWrap>
                   <IconComp><AiFillStar/></IconComp>
                </IconWrap>
                <Hold>
                   <Title>{title}</Title>
                   <H1>#{h1}</H1>
                   <H2>#{h2}</H2>
                </Hold>
            </Container>
        </div>
    )
}
const Smallbox = styled.div`
    width: 50px;
    height: 50px;
    background: pink;
    position: relative;
    bottom: 160px;
    left: 190px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`
const IconComp = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #d1cccc;
    color: #fff;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
`
const IconWrap = styled.div`
    height: 195px;
    width: 100%;
    display: flex;
    background: #80808060;
    align-items: center;
    justify-content: center;
    display: flex;
`
const Hold = styled.div`
    height: 75px;
    width: 100%;
    /* background: pink; */
    text-align: left;
`
const H2 = styled.h2`
font-size: 13px;
font-weight: 400;
color: #000;
text-decoration: line-through;

`
const H1 = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: #000;

`
const Title = styled.div`
font-size: 14px;
font-weight: 400;
color: #000;
`
const Image = styled.img`
height: 195px;
object-fit: cover;
`
const ImageWrap = styled.div`
    height: 195px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: gray;
    /* Img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    } */
`
const Container = styled.div`
    width: 250px;
    height: 270px;
    display: flex;
    background: #fff;
    margin: 20px 10px 10px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.443); */
    /* transition: ; */
    &:hover{
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.4);
    }
`
