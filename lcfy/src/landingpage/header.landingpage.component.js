import './../landingpage/landing.css'
import './../Utility.css'
import DashboardImg from './../landingpage/dashboard.jpg'

function LandingPageHeader(){
    return (
        <div className = "grid grid-2-col gap96 pad96 cover" >
            <div className="left flex flex-dir gap16">
                <h1 className="primary_heading">Get your dream web application with peak 100% efficiency with <span>"LetsCodeForYou"</span></h1>
                <p className="description">LetsCodeForYou will gives 100% effiecnt and peak performance web application and makes your business more effieint.</p>
                <div className="flex flex-3 gap16">
                    <button className="btn">Schedule Meeting</button>
                    <button className="btn">Learn more</button>
                </div>
            </div>
            <div className="right">
                <img src={DashboardImg} alt="app" className="appImg"/>
            </div>
        </div>
    )
}

export default LandingPageHeader