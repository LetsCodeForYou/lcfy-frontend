import Logo from "./../utility/logo.png"


function NavWithLogin(){
    

    const styles = {
        utilFlexLayout : {
            display : "flex",
            alignItems : "center",
            justifyContent : "space-between",
            gap : "1.6rem"
        }
        ,
        img : {
            width : "9.6rem"
        }
        ,
        pad : {
            padding : "1.6rem"
        }
        ,
        top_nav : {
            height : "10vh",
            backgroundColor : "#190482"
        }
        ,
        list : {
            listStyle : "none",
            gap : "4.8rem"
        }
        ,
        link : {
            textDecoration : "none",
            color : "#fff",
            fontSize : "1.4rem",
            fontWeight : "600"
        }
        ,
        linkLast : {
            padding : "1rem 2rem",
            backgroundColor : "#C2D9FF",
            borderRadius : "1rem",
            color : "#000"


        }
        
    }

    return (
        <div classname="top-nav" style={{...styles.top_nav,...styles.pad,...styles.utilFlexLayout}}>
            <div classname="logo">
                <img src={Logo} alt="company logo" style={styles.img}/>
            </div>
            <div classname="list_of_opt">
                <ul style = {{...styles.utilFlexLayout, ...styles.list}}>
                    <li>
                        <a style={{...styles.link}} href='/'>Our services</a>
                    </li>
                    <li>
                        <a style={{...styles.link}} href='/'>See projects</a>
                    </li>
                    <li>
                        <a style={{...styles.link}} href='/'>Schedule meeting</a>
                    </li>
                    <li>
                        <a style={{...styles.link, ...styles.linkLast}} href='/'>Signup / Login</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavWithLogin