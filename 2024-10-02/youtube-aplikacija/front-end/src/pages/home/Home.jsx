import axios from 'axios';
import { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/api/video/')
        .then(resp => {
            if(resp.data.length === 0)
                return setMessage({
                    data: 'There are no videos yet uploaded',
                    status: 'warning'
                });
            console.log(resp.data);
            setData(resp.data)
        });
    }, []);

    const formatTimeAgo = (date) => {
        // console.log('Iraso laikas: ', Date.parse(date));
        // console.log('Dabartinis laikas: ', Date.now());
        // console.log('Skirtumas:', Date.now() - Date.parse(date));
        
        let difference = Date.now() - Date.parse(date);

        let daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24
  
        let hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60
  
        let minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60

        if(daysDifference > 0)
            return daysDifference + ' days ago';

        if(hoursDifference > 0)
            return hoursDifference + ' hours ago';

        if(minutesDifference > 0)
            return minutesDifference + ' minutes ago';

        return 'just now';
    }

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
                        <img src={'http://localhost:3000/photos/' + el.thumbnail} />
                        <h5 className="mt-3">{el.title}</h5>
                        <div className="d-flex gap-3">
                            <span>{el.views} views</span>   
                            <span>{formatTimeAgo(el.createdAt)}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;