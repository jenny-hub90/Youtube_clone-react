import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    
    return (
        <Card sx={{ width: {xs:'100%', sm:'400px', md:'400px' }, boxShadow: 'none', borderRadius:0}}>
            <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
                <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width:{xs:'100%', sm:'400px', md:'400px'}, height:200, }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#FFFF', height:'106px' }}>
                <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#000">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                    <Typography varaint="subtitle2" fontWeight="bold" color="#E4BE9E">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize:12, color:'#E4BE9E', ml: '5px'}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
  
    )
}

export default VideoCard