import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFormAPI } from '../utils/fetchFormAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([])

  const { id } = useParams();
  console.log(ChannelDetail, videos);

  useEffect(()=>{
    console.log("into the channel detail page")
  },[])
  useEffect(() => {
    fetchFormAPI(`channels?part=snippet&id=${id}`)
     .then((data) =>setChannelDetail(data.items[0]));
    console.log(channelDetail)
    fetchFormAPI(`search?channelId=${id}&part=snippet&order=date`)
     .then((data) => setVideos(data.items));
     console.log("videos",videos)
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(214,153,105,100) 100%, rgba(0,212,255,1) 100%)',zIndex:10, height:'300px'}}
         
         />
         <ChannelCard channelDetail= {channelDetail} marginTop="-110px"/>
       </Box>
       <Box display="flex" p="2">
        <Box sx={{mr:{sm:'150px'}}}/>
          <Videos videos={videos} />

       </Box>
    </Box>
  )
}

export default ChannelDetail