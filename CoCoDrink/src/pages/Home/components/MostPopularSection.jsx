import ListPage from "@/components/ListPage";
import { drinkList, icecreamList } from "@/constants/app";
import React from "react";
function MostPopularSection(){
      const drinkArr=drinkList.slice(0,5);
      const icecreamArr=icecreamList.slice(0,5);
      return(
            <div className="mt-4">
                  <h1 className="text-3xl font-bold border-b-2 pb-4 mt-10 font-serif">Most Popular</h1>
                  <ListPage list={drinkArr}/>
                  <ListPage list={icecreamArr}/>
            </div>
      );
}
export default MostPopularSection;