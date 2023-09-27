import {Outlet} from "react-router-dom"
// import styled from "styled-components";
// import DashboardHeaderHeader from "./DashboardHeader";
// import Sidebar from "./Sidebar";

// import Footer from "./Footer";


const Layout = () => {
    return (
        <div>
          {/* <DashboardHeaderHeader /> */}
          {/* <Holder>
          <Sidebar /> */}
          <Outlet />
          {/* </Holder> */}
      {/* <Footer /> */}
        </div>
    )
}
export default Layout;
// const Holder = styled.div`
//     width: 100%;
//     display: flex;
//     height: calc(100vh - 60px);
//     /* background: red; */
// `