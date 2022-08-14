const App = ()=> {
    return(
        <div>
            <Tweet username = "FM0220" 
                    name = "Franklyn"
                    message = "First Tweet"
                    date = "08/03/2022"/>
            
            <Tweet username = "LM0220" 
                    name = "Laura"
                    message = "Second Tweet"
                    date = "08/03/2022"/>
            <Tweet username = "MB0220" 
                name = "Mio"
                message = "Third Tweet"
                date = "08/03/2022"/>
            

        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))