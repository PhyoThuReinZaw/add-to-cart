import React, { children } from "react";
import Navbar from "./Navbar";
import { APP_BG_COLOR, APP_NAME } from "@/constants/app";
import useTitle from "@/layouts/hooks/useTitle";

function Layout({children,title}){
      useTitle( `${title} | ${APP_NAME}`)
      return(
            <div>
                  <Navbar />
                  <div className={`w-full min-h-screen max-h-full flex flex-col px-40 pt-4 pb-20 ${APP_BG_COLOR}`}>
                        {children}
                  </div>
            </div>
      )
}
export default Layout;