import { Container, Grid, GridList, makeStyles } from '@material-ui/core'
import { uniqueId } from 'lodash'
import React from 'react'
import ClientVideoThumbnail from '../components/ClientVideoThumbnail'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

export default ({ fields }) => {
  const classes = useStyles()
  const { videoList } = fields

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <GridList cellHeight={200} spacing={40} className={classes.gridList}>
          {videoList.map((videoInfo, index) => {
            return (
              <ClientVideoThumbnail
                clientName={videoInfo.clientName}
                videoThumbnail={videoInfo.clientVideoThumbnail}
                videoURL={videoInfo.clientVideoURL}
                key={uniqueId(`${videoInfo.clientName}_inner_${index}`)}
                id={index}
              />
            )
          })}
        </GridList>
      </Container>
    </div>
  )
}
