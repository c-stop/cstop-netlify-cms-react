import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '85vh',
    // margin: '100px auto',
  },
  // videoWrapper: {
  //   width: "auto", // Reset width
  //   height: "auto"
  // },
  videoPlayer: {
    margin: '20px',
  },
  videoDetails: {
    width: '100%',
    margin: '0 auto',
  },
  videoText: {
    margin: '0 auto',
    textAlign: 'center',
  },
}))

export default function ClientVideoPage({ fields, ...props }) {
  const classes = useStyles()
  const { clientName, clientVideoThumbnail, clientVideoURL } = fields

  console.log(props)
  return (
    <div style={{ marginTop:'20px' }}>
      <Container className={classes.container}>
        <div className={classes.videoWrapper}>
          <ReactPlayer
            width="100%"
            controls
            url={clientVideoURL}
            playIcon
            className={classes.videoPlayer}
          />
        </div>
        <Box className={classes.videoDetails}>
          <h1 className={classes.videoText}>{clientName}</h1>
        </Box>
      </Container>
    </div>
  )
}
