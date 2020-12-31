import React from 'react'
import PropTypes from 'prop-types'
import PageHeader from './PageHeader'
import BackgroundImage from './BackgroundImage'
import Content from './Content'

const VideoHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = '',
}) => {
  if (large) className += 'VideoHeader-large'
  return (
    <div className={`VideoHeader relative ${className}`}>
        {/* Replace with background video */}
      {backgroundImage && (
          <BackgroundImage src={backgroundImage} opacity={0.4} />
          )}

      <div className="container relative">
        <h1 className="VideoHeader--Title">{title}</h1>
        {subtitle && (
            <Content className="VideoHeader--Subtitle" src={subtitle} />
            )}
            Hello
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default VideoHeader
