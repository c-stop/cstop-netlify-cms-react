import { Container, Grid, GridList } from '@material-ui/core'
import React from 'react'
import ClientVideoThumbnail from '../components/ClientVideoThumbnail'

export default ({ fields }) => {
  // console.log(fields)

  const { videoList } = fields

  return (
    <Container maxWidth="lg" >
      <GridList cellHeight={200} >
        {videoList.map((videoInfo, index) => {
          console.log(videoInfo)
          return (
            <ClientVideoThumbnail
              clientName={videoInfo.clientName}
              videoThumbnail={videoInfo.clientVideoThumbnail}
              videoURL={videoInfo.clientVideoURL}
              key={index}
            />
          )
        })}
      </GridList>
    </Container>
  )
}
