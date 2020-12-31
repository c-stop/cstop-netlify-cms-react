import React from 'react'
import PageHeader from '../components/PageHeader'

export default ({ fields }) => {
  const { title, subTitle, featuredImage, section1Title, section1Body} = fields

  return (
    <div className="Service" >
      <PageHeader
        title={title}
        subtitle={subTitle}
        backgroundImage={featuredImage}
      />

      <div class="container">
        <div class="about-story-wrap">
          <div class="heading-jumbo-small">
            {section1Title}
          </div>

          <p class="paragraph-dark">
           {section1Body}
          </p>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  )
}
