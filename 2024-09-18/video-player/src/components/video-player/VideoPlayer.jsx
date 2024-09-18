const VideoPlayer = (props) => {
    if(props.thumbnail) 
        return <img src={props.thumbnail} />

    if(!props.videoId)
        return <img src="https://picsum.photos/560/315" />;

    let url = new URLSearchParams();
    
    for(const key in props.params) {
        url.append(key, props.params[key]);
        
        if(key === 'loop' && props.params[key] === 1) 
            url.append('playlist', props.videoId);
    }

    url = `https://www.youtube.com/embed/${props.videoId}?${url.toString()}`;

    return (
        <iframe 
            width="560" 
            height="315" 
            src={url} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        ></iframe>
    );
}

export default VideoPlayer;