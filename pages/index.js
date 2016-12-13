import React from 'react'
import gql from 'graphql-tag'
import 'isomorphic-fetch'
import apollo from '../apollo'
import Link from 'next/link'

const query = gql`query {
  posts {
    _id
  	title
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
          {this.props.data.posts.map(post => {
            return <li key={post._id}>
              <Link href={`/post?_id=${post._id}`}>{post.title}</Link>
            </li>
          })}
        </ul>
      </div>
    }
  }
}
