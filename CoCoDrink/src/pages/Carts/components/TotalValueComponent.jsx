import React from "react";
function TotalValueComponent({TotalName,TotalValue,last=false}){
      return <div className={`py-4 flex flex-row items-center justify-between font-semibold text-xl ${last ? "text-blue-600" :"border-b-2"} `}>
      <span>{TotalName}</span>
      <span >{TotalValue} {TotalName.includes("Cost") && "$"}</span>
</div>
}
export default TotalValueComponent;