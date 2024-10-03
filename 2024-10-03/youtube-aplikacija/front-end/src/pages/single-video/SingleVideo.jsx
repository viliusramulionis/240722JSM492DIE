import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { nl2br, formatDate } from '../../utils/common.jsx';
import axios from 'axios';

const SingleVideo = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(BASE_URL + '/api/video/' + id)
        .then(resp => setData(resp.data));
    }, []);


    return data && (
        <div className="container">
            <iframe 
                width="100%" 
                height="650" 
                src={'https://www.youtube.com/embed/' + data.videoId} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-3"
            ></iframe>
            <div className="py-2">
                <h3>{data.title}</h3>
            </div>
            <div className="p-3 bg-secondary-subtle rounded-3">
                <div className="d-flex gap-2">
                    <strong>{data.views} views</strong>
                    <strong>{formatDate(data.createdAt)}</strong>
                </div>
                <div>
                    {nl2br(data.description)}
                </div>
            </div>
        </div>
    );
}

export default SingleVideo;