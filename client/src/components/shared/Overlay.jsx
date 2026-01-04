import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const Overlay = () => {
     const styles = useSelector((state) => state.theme.styles);
     console.log(styles)
  return (
   <Box sx={{width:"100dvw", height:"10dvh", backgroundColor:"transparent", position:"fixed", zIndex:99, backgroundColor:"transparent", bottom:0}}>
        <Box sx={{width:"100%", height:"100%",background: styles?.mainTheme?.overlayFadeColor}}>

        </Box>
    </Box>
  )
}

export default Overlay
