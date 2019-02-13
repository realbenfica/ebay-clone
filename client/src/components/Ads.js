import React from 'react'
import { Link } from 'react-router-dom'

export default function Ads(props) {
  return (
    <div>
      <ul>
        {props.ads && props.ads.map(ads => (
          <li key={ads.id}><Link to={`/ads/${ads.id}`}>{ads.title}{" €"}{ads.price}</Link></li>
        ))}
      </ul>
    </div>
  )
}