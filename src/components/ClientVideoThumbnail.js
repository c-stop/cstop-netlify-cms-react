import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import React from 'react'

import './ClientVideoThumbnail.scss'

export default ({clientName, videoThumbnail, videoURL, ...props}) => {
  return (
    <Grid item xs={4}>
      <Paper>
        <CardMedia component="img" height="240" title={clientName} alt={clientName} img={videoThumbnail}/>
        <CardContent>
          <Typography>
            {clientName}
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  )
}
