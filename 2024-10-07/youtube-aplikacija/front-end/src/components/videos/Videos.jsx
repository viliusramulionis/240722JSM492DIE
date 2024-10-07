import user from '../../../../back-end/models/user';
import { formatTimeAgo } from '../../utils/common';
import { IMAGES_URL } from '../../utils/config';
import { Link } from "react-router-dom";

const Videos = ({ data }) => {
    return (
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
                        {typeof el.user === 'object' &&
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
                        }
                        <div>
                            <h6 className="m-0">
                                <Link to={'/single-video/' + el._id}>
                                    {el.title}
                                </Link>
                            </h6>
                            {typeof el.user === 'object' &&
                                <div>
                                    <Link to={'/channel/' + el.user._id}>
                                        {el.user.name}
                                    </Link>
                                </div>
                            }
                            <div className="d-flex gap-3">
                                <span>{el.views} views</span>
                                <span>{formatTimeAgo(el.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Videos;