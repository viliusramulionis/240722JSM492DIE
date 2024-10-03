import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL, IMAGES_URL } from '../../utils/config';
import { formatTimeAgo } from '../../utils/common.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get(BASE_URL + '/api/video/')
            .then(resp => {
                if (resp.data.length === 0)
                    return setMessage({
                        data: 'There are no videos yet uploaded',
                        status: 'warning'
                    });
                console.log(resp.data);
                setData(resp.data)
            });
    }, []);

    return (
        <div className="container">
            <h1>Youtube</h1>
            {message &&
                <div className={'alert alert-' + message.status}>
                    {message.data}
                </div>
            }
            <div className="row">
                {data.map(el =>
                    <div key={el._id} className="col-4">
                        <Link to={'/single-video/' + el._id}>
                            <img 
                                src={IMAGES_URL + el.thumbnail} 
                                className="rounded-3"
                            />
                        </Link>
                        <div className="d-flex mt-3 gap-3">
                            <div className="flex-shrink-0">
                                <Link to={'/channel/' + el.user._id}>
                                    <img 
                                        src={IMAGES_URL + el.user?.userThumbnail} 
                                        style={{
                                            width: 36,
                                            height: 36
                                        }}
                                        className="rounded-pill"
                                    />
                                </Link>
                            </div>
                            <div>
                                <h6 className="m-0">
                                    <Link to={'/single-video/' + el._id}>
                                        {el.title}
                                    </Link>
                                </h6>
                                <div>
                                    <Link to={'/channel/' + el.user._id}>
                                        {el.user?.name}
                                    </Link>
                                </div>
                                <div className="d-flex gap-3">
                                    <span>{el.views} views</span>
                                    <span>{formatTimeAgo(el.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;