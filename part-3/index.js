const App = ()=> {
    return(
        <div>
            <Voter 
                    name = "Franklyn"
                    age = {30}
                    hobbies = {["Bass", "Monster Hunting"]}/>
            
            <Voter 
                    name = "Laura"
                    age = {16}
                    hobbies = {["Makeup", "League"]}/>
            <Voter  
                name = "Mio"
                age = {50}
                hobbies = {["Bomba", "Yoga"]}/>
            

        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))