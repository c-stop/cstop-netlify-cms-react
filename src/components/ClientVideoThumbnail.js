import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  GridListTile,
  GridListTileBar,
  Paper,
  Typography,
} from '@material-ui/core'
import React from 'react'

import './ClientVideoThumbnail.sass'

export default ({ clientName, videoThumbnail, videoURL, ...props }) => {

  console.log(videoThumbnail)
  return (
    <GridListTile style={{width:"360px", height:"200px", overflow:"hidden"}} className="client-video-card">
      <img src={videoThumbnail} alt={clientName} />
      <GridListTileBar title={clientName} className="client-video-bar"></GridListTileBar>
    </GridListTile>
  )
}
