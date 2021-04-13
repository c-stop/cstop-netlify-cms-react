import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ClientVideoThumbnail from '../components/ClientVideoThumbnail'

export default ({ fields }) => {
  // console.log(fields)

  const { videoList } = fields

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {videoList.map((videoInfo, index) => {
          return (
            <ClientVideoThumbnail
              clientName={videoInfo.clientName}
              videoThumbnail={videoInfo.ClientVideoThumbnail}
              videoURL={videoInfo.clientVideoURL}
              key={index}
            />
          )
        })}
      </Grid>
    </Container>
  )
}
