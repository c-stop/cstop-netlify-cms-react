import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Meta from './components/Meta'
import Nav from './components/Nav'
import QuotePage from './components/Quote'
import ScrollToTop from './components/ScrollToTop'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'
import { documentHasTerm, getCollectionTerms } from './util/collection'
import { slugify } from './util/url'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact'
import Home from './views/Home'
import NoMatch from './views/NoMatch'
import Services from './views/Services'
import SinglePost from './views/SinglePost'


const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(routeProps) => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  state = {
    data,
  }
  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter((page) => page.name === name)[0]

  getDocuments = (collection) => this.state.data[collection] || []

  render() {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts,
    } = globalSettings

    const posts = this.getDocuments('posts').filter(
      (post) => post.status !== 'Draft'
    )
    const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    const postCategories = this.getDocuments('postCategories').filter(
      (category) =>
        categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    )

    return (
      <Router>
        <div className="React-Wrap">
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />
          {/* <GithubCorner url='https://github.com/Jinksi/netlify-cms-react-starter' /> */}
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            headerScripts={headerScripts}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
          />

          <Nav />

          <Switch>
            <RouteWithMeta
              path="/"
              exact
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
            />
            <RouteWithMeta
              path="/services/"
              exact
              component={Services}
              fields={this.getDocument('pages', 'services')}
            />
            <RouteWithMeta
              path="/about/"
              exact
              component={About}
              fields={this.getDocument('pages', 'about')}
            />
            <RouteWithMeta
              path="/contact/"
              exact
              component={Contact}
              fields={this.getDocument('pages', 'contact')}
              siteTitle={siteTitle}
            />
            <Route path="/quote/" exact component={QuotePage} />

            <RouteWithMeta
              path="/blog/"
              exact
              component={Blog}
              fields={this.getDocument('pages', 'blog')}
              posts={posts}
              postCategories={postCategories}
            />

            {posts.map((post, index) => {
              const path = slugify(`/blog/${post.title}`)
              const nextPost = posts[index - 1]
              const prevPost = posts[index + 1]
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={SinglePost}
                  fields={post}
                  nextPostURL={nextPost && slugify(`/blog/${nextPost.title}/`)}
                  prevPostURL={prevPost && slugify(`/blog/${prevPost.title}/`)}
                />
              )
            })}

            {postCategories.map((postCategory) => {
              const slug = slugify(postCategory.title)
              const path = slugify(`/blog/category/${slug}`)
              const categoryPosts = posts.filter((post) =>
                documentHasTerm(post, 'categories', slug)
              )
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={Blog}
                  fields={this.getDocument('pages', 'blog')}
                  posts={categoryPosts}
                  postCategories={postCategories}
                />
              )
            })}

            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
