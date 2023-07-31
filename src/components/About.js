import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Series</h2>
            <UserContext.Consumer>
                {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
            </UserContext.Consumer>
            <UserClass name={"Minal (class)"} location={"Banglore"} contact={"minal@gmail.com"}/>
        </div>
    )
}

export default About;