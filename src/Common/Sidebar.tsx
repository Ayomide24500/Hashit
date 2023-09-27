import React from 'react'
import styled from 'styled-components'
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {GoHome} from "react-icons/go"
import {BsPerson} from "react-icons/bs"
import {BsCalendar4Week} from "react-icons/bs"
import {AiOutlineStar} from "react-icons/ai"
import {BiSun} from "react-icons/bi"
import {CgFileAdd} from "react-icons/cg"

const Sidebar = () => {
  return (
    <div>
        <MainSidebar>
            <Hamburger>
              <Menu>
                <AiOutlineMenu/>
              </Menu>
            </Hamburger>
            <Nav1>
              <Nwrapp>
                <Icon>
                  <BiSun/>
                </Icon>
                <Text>
                  My Day
                </Text> 
              </Nwrapp>
            </Nav1>
            <Nav2>
              <Nwrapp2>
                <Icon>
                  <AiOutlineStar/>
                </Icon>
                <Text>
                  Important
                </Text> 
              </Nwrapp2>
            </Nav2>
            <Nav3>
              <Nwrapp3>
                <Icon>
                  <BsCalendar4Week/>
                </Icon>
                <Text>
                  Planned
                </Text> 
              </Nwrapp3>
            </Nav3>
            <Nav4>
              <Nwrapp4>
                <Icon>
                  <BsPerson/>
                </Icon>
                <Text>
                  Assigned to me
                </Text>   
              </Nwrapp4>
            </Nav4>
            <Nav5>
              <Nwrapp5>
                <Icon>
                  <GoHome/>
                </Icon>
                <Text>
                  Tasks
                </Text>   
              </Nwrapp5>
            </Nav5>
            <Nav6>
              <Nwrapp6>
                <Icon style={{color: "blue"}}>
                  <AiOutlinePlus/>
                </Icon>
                <Text style={{color: "blue"}}>
                  New list
                </Text>
                <CgFileAdd style={{marginLeft:"180px", color: "blue"}}/> 
              </Nwrapp6>
            </Nav6>
        </MainSidebar>
    </div>
  )
}

export default Sidebar

const Text = styled.div`
margin-left: 20px;
`
const Icon = styled.div`
font-size: 22px;
`
const Nwrapp6 = styled.div`
height: 50px;
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
`
const Nwrapp5 = styled.div`
height: 50px;
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: 1px solid grey
`
const Nwrapp4 = styled.div`
height: 50px;
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
`
const Nwrapp3 = styled.div`
height: 50px;
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
`
const Nwrapp2 = styled.div`
height: 50px;
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
`
const Nwrapp = styled.div`
height: 50px;
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
`
const Nav6 = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Nav5 = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Nav4 = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Nav3 = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Nav2 = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Nav1 = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Menu = styled.div`
height: 50px;
width: 100%;
/* background-color: blue; */
padding-left: 20px;
font-size: 22px;
`
const Hamburger = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-end;
`
const MainSidebar = styled.div`
height: 100%;
width: 350px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background-color: white;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
`