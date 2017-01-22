import React from 'react'
import gql from 'graphql-tag'
import 'isomorphic-fetch'
import apollo from '../apollo'
import Link from 'next/link'

const query = gql`query posts {
  viewer {
    allPosts {
      edges {
        node {
          id
          title
        }
      }
    }
  }
}`
export default class extends React.Component {
  static async getInitialProps({req}) {
    return await apollo.query({
      query,
    })
  }
  render() {
    const {loading} = this.props
    if (loading) {
      return <span>Loading...</span>
    } else {
      return <div>
        <ul>
          {this.props.data.viewer.allPosts.edges.map(post => {
            post = post.node
            return <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>{post.title}</Link>
            </li>
          })}
        </ul>
      </div>
    }
  }
}
