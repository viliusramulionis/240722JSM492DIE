import VideoPlayer from './components/video-player/VideoPlayer.jsx';
import './App.css'

const App = () => {
  return (
    <>
      <VideoPlayer 
        params={{
          start: 60,
          end: 62,
          loop: 1,
          controls: 0
        }} 
      />
      <VideoPlayer 
        videoId="8YaqEO6W1eI" 
        params={{
          start: 60,
          end: 62,
          loop: 1,
          controls: 0
        }} 
      />
      <VideoPlayer 
        videoId="8YaqEO6W1eI" 
        thumbnail="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
        params={{
          start: 60,
          end: 62,
          loop: 1,
          controls: 0
        }} 
      />
      
    </>
  );
}

export default App;
