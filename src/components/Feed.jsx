import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";


import { fetchFormAPI } from '../utils/fetchFormAPI';
import { Sidebar, Videos } from './';

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("New");

  // useEffect(() => {
  //     fetchFormAPI(`search?part=snippet&q=${selectedCategory}`)
  //     .then((data) => setVideos(data.items));
  // }, [selectedCategory]);
  const [videos, setVideos] = useState([]);
  const [data,setData] = useState([]);

  const fetchData = async (selectedCategory)=>{
   const fetcheddata= await fetchFormAPI(`search?part=snippet&q=${selectedCategory}`)
   console.log(fetcheddata)
    setData(fetcheddata.items)
  }

   useEffect(() =>  {
    fetchData(selectedCategory)
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection:{ sx:
    "column", md: "row"}}}>
      <Box sx={{ height:{ sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px: { sx: 0, md:2}}}>
        <Sidebar
         selectedCategory=
         {selectedCategory}
         setSelectedCategory=
         {setSelectedCategory}
         />
        <Typography className="copyright" 
        variant="body2" sx={{ mt:1.5,
         color:'#000',}}>
          Copyright 2023 My react Project
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height: '90vh', flex : 2}}>
        <Typography variant="h4"
         fontWeight="bold" mb={2} sx={{
          color:'black'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>
            videos
          </span>
        </Typography>

        <Videos videos={data} />
      </Box>
    </Stack>
  )
}

export default Feed;