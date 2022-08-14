const Voter= (props) => {
    let vote;
    if(props.age < 18){
        vote = "Sorry you cant vote yet "
    } else {
        vote = "Go Vote!"
    }

    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    
    

    return (
        <div>
            <p>
                Learn more about <b>{props.name}</b>
            </p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies: 
                    {hobbies}
                </ul>
            </ul>
            <p>Are you allowed to vote? <b>{vote}</b></p>
        </div>
    )
}