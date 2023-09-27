import styled from "styled-components"
import {BsSun} from "react-icons/bs"
const Body = () => {
    return (
        <div>
            <Container>
                <Top>
                    <Day>
                        <Holder>
                        <Icon><BsSun /></Icon>
                        <h3>My Day</h3>
                        <p>Wednesday, September 20</p>
                        </Holder>
                    </Day>
                </Top>
            </Container>
        </div>
    )
}
export default Body
const Holder = styled.div`
    display: flex;
    h3{
        margin-left: 5px;
    }
`
const Icon = styled.div`
    font-size: 17px;
`
const Day = styled.div`
 display: flex;

`
const Top = styled.div`
    width: 100%;
    display: flex;
`
const Container = styled.div`
    width: calc(100vw - 350px);
    display: flex;
    background-color: #e5e5e5;
`
