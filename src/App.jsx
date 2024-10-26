//@ts-nocheck
import { useMemo } from "react";
import "./App.css";
import Posts from "./components/hoc/Posts"
import Users from "./components/hoc/Users";
// import NameComp from "./components/useMemo/NameComp";
// import ResultComp from "./components/useMemo/ResultComp";
import Todo from "./components/useCallback/Todo";
import Counter from "./components/useCallback/Counter";
import Parent from "./components/liftStateUp/Parent";
import Appx from "./components/dragNdrop/Appx"
import Component1 from "./components/childrenProps/Component1";
import Component2 from "./components/childrenProps/Component2";
import ParentComponent from "./components/childrenProps/ParentComponent";
import Main from "./components/contextAPI/Main";
import Todolist from "./components/useReducer/Todolist";
import Calculate from "./components/useMemo/Calculate";
import FetchData from "./components/customHook/FetchData";
import Form from "./components/customHook/Form";
import Forms from "./components/form/Forms";
import SearchItemFromList from "./components/searchItem/SearchItemFromList";
import SortItemFromList from "./components/sortItemFromList/SortItemFromList";
import Fetch from "./components/fetchDataFromAPI/Fetch";
import BarChart from "./components/charts/BarChart";
import DoughnutChart from "./components/charts/DoughnutChart";
import DynamicBarChartWithAPI from "./components/charts/BarChartFromAPI";
import AppRouter from "./components/browserRouterPractice/AppRouter";

function App() {
  // const data = useMemo(() => ({
  //   fname: "sjhgkjsdhgkjsdh",
  //   lname: "gjh"
  // }));



  return (
    <>
      {/* HOC */}
      {/* <Users/> */}
      {/* <Posts/> */}

      {/* usememo */}
      {/* <NameComp fname={"sauav"} lname={"kakade"} />

      <ResultComp marks={66} subject={"jdhjgjhgjhk"} /> */}
      {/* <Calculate/> */}


      {/* useCallback */}
      {/* <Todo/> */}
      {/* <Counter/> */}

      {/* LiftStateUp */}
      {/* <Parent/> */}

      {/*DragDrop  */}
       {/* <Appx></Appx> */}


       {/* props.children example */}
       {/* <Component1/> */}
       {/* <ParentComponent/> */}
       


       {/* contextAPI example */}
       {/* <Main/> */}

       {/* useReducer example */}
       {/* <Todolist/> */}


          {/* custom hook example */}
          {/* <FetchData/>   */}
          {/* <Form/> */}

          {/* react-hook-Form */}
          {/* <Forms/> */}



          {/* search item from list */}
          {/* <SearchItemFromList/> */}
       
          {/* Sort item from list */}
          {/* <SortItemFromList/> */}

          {/* fetch data from Api */}
          {/* <Fetch/> */}

          {/* charts */}
          {/* <BarChart/> */}
          {/* <DoughnutChart/> */}
          {/* <DynamicBarChartWithAPI/> */}

        {/* BrowserRouter practice */}
        <AppRouter/>
        


    </>
  );
}
//! to see the virtual dom
// const h1_virtual=<h1>kdfhgvkjshdkzjghlufhaseig</h1>
// console.log(h1_virtual);
// const h1_real=document.createElement("h1")
// h1_real.innerText="hello"
// console.log(h1_real);



export default App;
