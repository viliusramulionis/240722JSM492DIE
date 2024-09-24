import { Link } from 'react-router-dom';

const Post = ({ data, index }) => {
    return (
        <div
            className="col-4 mb-5"
        >
            <Link to={"/single-post/" + index}>
                <img
                    src={data.image}
                    className="rounded-2"
                />
            </Link>
            <div className="mt-4 d-flex gap-2">
                <strong>{data.category}</strong>
                <span>{new Date(data.date).toLocaleString()}</span>
            </div>
            <h4>{data.title}</h4>
            <p>{data.excerpt}</p>
            <div className="d-flex gap-3">
                <img
                    src={data.author_image}
                    className="rounded-circle"
                    style={{
                        maxWidth: 45
                    }}
                />
                <div>
                    <div>
                        <strong>{data.author}</strong>
                    </div>
                    <div>{data.author_role}</div>
                </div>
            </div>
        </div>
    );
}

export default Post;