import Body1 from "./body1"
import Body2 from "./body2"
import Body3 from "./body3"
import Footer from "./footer"
import './landingpg.scss'
import './body1.scss'
import './body2.scss'
import './body3.scss'
import './footer.scss'
const Header=()=>{
   return(
    <div className="maindiv">
        <div className="header">
            <div className="headerHead">
                <div className="inner">
                    <h3>Blogr</h3>
                   <div className="links">
                    <p></p>
                     <nav>
                         <a href="#">Product</a>
                         <a href="#">Company</a>
                         <a href="#">Connect</a>
                      </nav>
                   </div>
                </div>
                <img src="./assets/icon-hamburger.svg" alt="" />
                <div className="buttons">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>

            </div>
            <div>
                <h1>
                    A modern publishing platform
                </h1>
            </div>
            <div>
                <p>Grow your audience and build your online brand</p>
            </div >
            <div className="FooteButton">
                <button className="button3">Start for free</button>
                <button className="button4">Learn more</button>
            </div>

        </div>
        <Body1/>
        <Body2/>
        <Body3/>
        <Footer/>
    </div>
    
   )
}
export default Header