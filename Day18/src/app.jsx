function App(props){
    console.log(props.col)
    return (
       
        // <div class="comp">
            <div class ="Box" style = {{backgroundColor : (props.col %2 == 0 ? 'black' : 'wheat'  ) }}></div>
            /* <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
             <div class ="Box"></div>        
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>        
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>        
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>        
            <div class ="Box1"></div>
            <div class ="Box1"></div>        
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>
             <div class ="Box"></div>        
            <div class ="Box"></div>
            <div class ="Box"></div>
            <div class ="Box"></div>        
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>        
            <div class ="Box1"></div>
            <div class ="Box1"></div>
            <div class ="Box1"></div>        
            <div class ="Box1"></div>
            <div class ="Box1"></div>       */
            //  </div>
    )
}
export default App