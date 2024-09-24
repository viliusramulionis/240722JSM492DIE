import { Link } from 'react-router-dom';
import Post from '../../components/post/Post';

const Posts = ({ data }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Posts</h1>
                <Link 
                    to="/new-post"
                    className="btn btn-primary"
                >New Post</Link>
            </div>
            <div className="row mb-5">
                {data.map((value, index) =>
                    <Post 
                        data={value} 
                        index={index}
                        key={index} 
                    />  
                )}
            </div>
        </>
    );
}

export default Posts;