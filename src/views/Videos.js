import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ClientVideoThumbnail from '../components/ClientVideoThumbnail'

export default ({ fields }) => {
  console.log(fields)

  const {videoList} = fields;

  return( <Container style={{border: "1px solid red"}} maxWidth="md" >
      <Grid container spacing={3}>
        <Grid item xs={12}>
            {videoList.map((videoInfo, index) => {
                console.log(videoInfo)
                return(
                <ClientVideoThumbnail  clientName={videoInfo.clientName} videoThumbnail={videoInfo.ClientVideoThumbnail} videoUrl={videoInfo.clientVideoURL} thumbnail="" key={index} />

                )
            })}
        </Grid>
      </Grid>


  </Container>)
}
