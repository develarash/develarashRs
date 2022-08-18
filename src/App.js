import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./Components/Home/About";
import Projects from "./Components/Projects";
import Exprience from "./Components/Exprience";
import Educatios from "./Components/Educatios";
import Navigation from "./Components/Navigation";
import Questions from "./Components/Question";
import Footer from "./Components/Footer";
import Blog from "./Components/blog/Blog";
import { useEffect, useState } from "react";
import SingleBlog from "./Components/blog/SingleBlog";
import NotFound from "./Components/NotFound";
import InserBlog from "./Components/dashboard/InserBlog";
import Login from "./Components/dashboard/login";
import Bloglist from "./Components/dashboard/bloglist";
import UpdateBlog from "./Components/dashboard/updataBlog";
import Skills from "./Components/screenSkills";

import Register from "./Components/dashboard/register";
import axios from "axios";
import {Getdata}from "./context/getdatacntx"
import Authorized from "./Components/401";

function App() {
  const [bgdata,setbgdata]=useState();
  const getblogall=()=>{
    axios.get('https://nodejs-arash.chabk.ir/api/blogs').then((res)=>{
      // console.log(res)
      setbgdata(res.data)
      
    }).catch((err)=>{
      console.log(err)
    })
  }
 useEffect(() => {
  getblogall()
 }, []);
  return (
    <Getdata.Provider value={{
      // setSingleblg: data
}}>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/Exprience" element={<Exprience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Educatios" element={<Educatios />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/blog" element={<Blog    />} />
        <Route exact path="/blog/:id" element={<SingleBlog />} />
        <Route path="404" element={<NotFound />} />
        <Route path="401" element={<Authorized />} />
      
        <Route path="Skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
        {/* dashboard */}
        <Route path="adm/insertblog" element={<InserBlog />} />
        <Route path="adm/listblog" element={<Bloglist />} />
        <Route path="adm/updateblog/:id" element={<UpdateBlog />} />
        {/* <Route path="adm/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer  bgdata={bgdata}/>
    </div>
    </Getdata.Provider>
  );
}

export default App;
