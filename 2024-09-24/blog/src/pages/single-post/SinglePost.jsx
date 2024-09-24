import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const [data, setData] = useState();
    const { irasoID } = useParams();

    useEffect(() => {
        // const postData = JSON.parse(localStorage.getItem('data')).find((value, index) => index == irasoID);
        // const postData = JSON.parse(localStorage.getItem('data'))[irasoID];
        console.log(JSON.parse(localStorage.getItem('data'))[irasoID]);
        setData(JSON.parse(localStorage.getItem('data'))[irasoID]);
    }, []);

    const nl2br = (text) => {
        return text.split('\n').map((line, index) => 
            <span key={index}>
                {line}<br />
            </span>
        )
    }

    return data && (
        <>
            <div className="text-center container" style={{
                maxWidth: 880
            }}>
                <div>
                    <img 
                        src={data.author_image}
                        className="rounded-circle"
                        style={{
                            maxWidth: 70
                        }}
                    />
                    <div>{data.author}</div>
                    <div>{new Date(data.date).toLocaleDateString()}</div>
                </div>
                <h1 className="mt-4">{data.title}</h1>
                <p className="fs-4">{data.excerpt}</p>
                
                <div className="text-start mt-4">
                    <img 
                        src={data.image}
                        className="mb-4"
                    />
                    <div>
                        {nl2br(data.content)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePost;