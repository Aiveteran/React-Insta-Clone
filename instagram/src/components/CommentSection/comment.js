import './comment.css';



 const commentContainer = (props) => {
    return (
        <div className = 'comment'>
           {props.comment.map( comment => {
               return (
                   <div>
                       <p>{comment.username}</p>
                   </div>
               )
           })}
        </div>
    )
    render () {
        return(
            <div>
                <p>somthing</p>
            </div>
        )
    }
}

export default commentContainer;