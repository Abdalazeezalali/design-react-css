import Brand from "./components/brand/Brand"
import CTA from "./components/cta/CTA"
import Navbar from "./components/navbar/Navbar"
import Blog from "./containers/blog/Blog"
import Features from "./containers/features/Features"
import Footer from "./containers/footer/Footer"
import Header from "./containers/header/Header"
import Possibility from "./containers/possibility/Possibility"
import WhatGpt3 from "./containers/whatGpt3/WhatGpt3"
import "./app.css"
export default function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGpt3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}