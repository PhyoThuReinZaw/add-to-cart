import ListPage from "@/components/ListPage";
import { icecreamList } from "@/constants/app";
import Layout from "@/layouts/Layout";
import React from "react";
function IceCreamPage(){
      return <Layout title={"IceCream"}>
           <div className="mt-4">
                  <h1 className="text-3xl font-bold border-b-2 pb-4 mt-10 font-serif">Ice-Cream Menu</h1>
                  <ListPage list={icecreamList}/>
            </div>
      </Layout>
}
export default IceCreamPage;