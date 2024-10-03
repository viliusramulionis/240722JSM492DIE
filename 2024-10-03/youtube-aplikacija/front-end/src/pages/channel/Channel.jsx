import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, IMAGES_URL } from '../../utils/config';
import { nl2br } from '../../utils/common.jsx';
import axios from 'axios';

const Channel = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(BASE_URL + '/api/user/' + id)
        .then(resp => setData(resp.data));
    }, []);

    return data && (
        <div className="container">
            <h1>Channel</h1>
            <img src={IMAGES_URL + data.coverPhoto} />
        </div>
    );
}

export default Channel;