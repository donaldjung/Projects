
import ReactPlayer from "react-player";
const MyVideo = () => {
    return (
      <ReactPlayer 
      url='https://www.youtube.com/watch?v=2KjwV3T_u04'
      playing={false}
      volume={0.25}
      
      />
    );
    }

export default MyVideo;
