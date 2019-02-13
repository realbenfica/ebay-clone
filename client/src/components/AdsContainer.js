import React from 'react'
import {loadAds} from '../actions/ads'
import {connect} from 'react-redux'
import Ads from './Ads'

class AdsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadAds()
  }
  
  render() {
    return <Ads ads={this.props.ads} />
  }
}

const mapStateToProps = state => {
  return {
  ads: state.ads}
  }

export default connect(mapStateToProps, {loadAds})(AdsContainer)