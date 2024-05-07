import { drinkList, icecreamList } from "@/constants/app";
import Layout from "@/layouts/Layout";
import React from "react";
import { APP_COLOR } from "@/constants/app";
import ListPage from "@/components/ListPage";
import MostPopularSection from "@/pages/Home/components/MostPopularSection";
import LatestSection from "./components/LatestSection";
function HomePage(){
      
      return <Layout title={'Home'}>
            <h1 className="w-full text-6xl font-bold border-b-4 pb-8 mt-10 font-serif">Today Recipes</h1>
            <MostPopularSection />
            <LatestSection />
      </Layout>
}
export default HomePage;