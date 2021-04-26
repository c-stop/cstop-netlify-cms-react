import {
  GridListTile,
  GridListTileBar
} from '@material-ui/core'
import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import ClientVideoPage from './ClientVideoPage'
import './ClientVideoThumbnail.sass'


export default (props) => {
  const { clientName, videoThumbnail, videoURL, id } = props
  const { url, path } = useRouteMatch()
  console.log(props)

  return (
    <div>
      <Link to={`${url}/${id}`}>
        <GridListTile
          style={{
            width: '360px',
            height: '200px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          className="client-video-card"
        >
          <img src={videoThumbnail} alt={clientName} />
          <GridListTileBar
            title={clientName}
            className="client-video-bar"
          ></GridListTileBar>
        </GridListTile>
      </Link>

      <Route path={`${path}/:id`}>
        <ClientVideoPage
          data={props}
          key={id}
        />
      </Route>
    </div>
  )
}
