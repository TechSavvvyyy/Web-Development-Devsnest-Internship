function App1(props){
    console.log(props)
    return (
        <div className ="Box">
        <div className ="Image">
            <img src = {props.img}  alt ="image not found" ></img>
        </div>
        <div className = "Name"> {props.name}</div>
       <div className = "Chat">{props.chat}</div>
        </div>
    );
}
export default App1