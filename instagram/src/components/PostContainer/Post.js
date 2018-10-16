import './Post.css';



 const postContainer = (props) => {
     return (
         <div className = 'post'>
            {props.post.map( post => {
                return (
                    <div>
                        <p>{post.username}</p>
                        <p>Likes {post.likes}</p>
                    </div>
                )
            })
        }
         </div>
     )
 }

export default postContainer;






