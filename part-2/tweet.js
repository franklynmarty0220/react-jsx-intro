const Tweet = ({props}) => {
    return (
        <div>
            <span>{props.username}</span>
                <h2>{props.name} </h2>
                <p>{props.message}</p>
                <span>{props.date}</span>
        </div>

    )
}