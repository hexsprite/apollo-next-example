import React from 'react'
import gql from 'graphql-tag'
import 'isomorphic-fetch'
import apollo from '../apollo'
import Link from 'next/link'

const query = gql`query ($_id: String) {
  post(_id: $_id) {
    title
   	content
    comments {
      content
    }
  }
}
`
export default class extends React.Component {
  static async getInitialProps({req, query: {_id}}) {
    return await apollo.query({
      query,
      variables: {
        _id
      },
    })
  }
  render() {
    const {loading} = this.props
    if (loading) {
      return <span>Loading...</span>
    } else {
      const post = this.props.data.post
      return <div>
        <Link href="/">Posts</Link>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post.comments &&
          <ul>
            {post.comments.map(comment => {
              <li>{comment.content}</li>
            })}
          </ul>
        }
      </div>
    }
  }
}
