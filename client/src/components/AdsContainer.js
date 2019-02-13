import React from 'react'
import { loadAds, createAd } from '../actions/ads'
import { connect } from 'react-redux'
import Ads from './Ads'

class AdsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadAds()
  }

  submitAd = () => {
    this.props.createAd()
  }


  render() {
    return <Ads ads={this.props.ads} onSubmit={this.submitAd} />
  }
}

const mapStateToProps = state => {
  return {
    ads: state.ads,
    ad: state.ad
  }
}

export default connect(mapStateToProps, { loadAds, createAd })(AdsContainer)
