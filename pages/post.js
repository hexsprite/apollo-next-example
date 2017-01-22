import React from 'react'
import gql from 'graphql-tag'
import 'isomorphic-fetch'
import apollo from '../apollo'
import Link from 'next/link'

const query = gql`query ($id: ID!) {
  getPost (id: $id) {
    title
   	content
    comments {
      edges {
        node {
          content
        }
      }
    }
  }
}
`
export default class extends React.Component {
  static async getInitialProps({req, query: {id}}) {
    return await apollo.query({
      query,
      variables: {
        id
      },
    })
  }
  render() {
    const {loading} = this.props
    if (loading) {
      return <span>Loading...</span>
    } else {
      const post = this.props.data.getPost
      return <div>
        <Link href="/">Posts</Link>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post.comments &&
          <ul>
            {post.comments.edges.map(comment => {
              <li>{comment.node.content}</li>
            })}
          </ul>
        }
      </div>
    }
  }
}
