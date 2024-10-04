import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, IMAGES_URL } from '../../utils/config';
import { nl2br } from '../../utils/common.jsx';
import axios from 'axios';
import Videos from '../../components/videos/Videos.jsx';

const Channel = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(BASE_URL + '/api/user/' + id)
        .then(resp => setData(resp.data));
    }, []);

    return data && (
        <div className="container">
            <h1>{data.name} channel</h1>
            <img 
                src={IMAGES_URL + data.coverPhoto} 
                style={{
                    width: '100%',
                    height: 240,
                    objectFit: 'cover'
                }}
            />
            <div className="mt-4">
                <Videos data={data.videos} />
            </div>
        </div>
    );
}

export default Channel;