import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';

import { fetchFormAPI } from '../utils/fetchFormAPI';
import {  Videos } from './';

const SearchFeed = () => {
  const [data,setData] = useState([]);
  const { searchTerm } = useParams();

  const fetchData = async ()=>{
   const fetcheddata= await fetchFormAPI(`search?part=snippet&q=${searchTerm}`)
    setData(fetcheddata.items)
  }

   useEffect(() =>  {
    fetchData()
  }, [searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto', height: '90vh', flex : 2}}>
        <Typography variant="h4"
         fontWeight="bold" mb={2} sx={{
          color:'black'}}>
           Search Results for: <span style={{color: '#F31503'}}>
            {searchTerm}
            </span>
            videos  
        </Typography>

        <Videos videos={data} />
      </Box>
  )
}

export default SearchFeed; 