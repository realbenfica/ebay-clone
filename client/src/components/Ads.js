import React from 'react'
import {Link} from 'react-router-dom'
// import CreateEventFormContainer from './CreateEventFormContainer'

export default function Ads(props) {
  console.log("My props are ", props.ads)
  return (
    <div>
      <ul>
        { props.ads && props.ads.map(ads => (
          <li key={ads.id}><Link to={`/ads/${ads.id}`}>{ ads.title }</Link></li>
        )) }
      </ul>
      
      {/* <CreateEventFormContainer /> */}
    </div>
  )
}