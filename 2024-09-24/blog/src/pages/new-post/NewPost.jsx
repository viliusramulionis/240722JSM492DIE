import { Link, useNavigate } from 'react-router-dom';
import { extractFormData } from "../../helpers/helpers";

const NewPost = ({ setData }) => {
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();

        const formData = extractFormData(e.target);

        formData.date = new Date();

        setData(prev => {
            const newData = [...prev, formData];

            localStorage.setItem('data', JSON.stringify(newData));

            return newData;
        });

        // Peradresavimo (redirect) formavimas

        navigate('/');
    }

    return (
        <>
            <div className="mb-4">
                <h1>New Post</h1>
            </div>
            <form
                style={{
                    maxWidth: 768,
                    margin: '0 auto'
                }}
                onSubmit={handleForm}
            >
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Title"
                        name="title"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Category"
                        name="category"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Image"
                        name="image"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Excerpt"
                        name="excerpt"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Post Content"
                        name="content"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Author"
                        name="author"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Author Role"
                        name="author_role"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Author Image"
                        name="author_image"
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default NewPost;