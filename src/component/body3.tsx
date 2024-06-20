import image3 from '../assets/illustration-laptop-desktop.svg'
const Body3=()=>{
    return(
        <div className="mainBody3">
            <img src={image3} alt=""/>
            <div className="main3">
                
                <div className="p1">
                    <h3>Free, open, simple</h3>
                    <p>
                      Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                      features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                      and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </div>
                <div className="p2">
                    <h2>
                        Powerful tooling
                    </h2>
                    <p>
                      Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                      capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Body3