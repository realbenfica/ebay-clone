import React from 'react'
import { connect } from 'react-redux'
import AdsDetails from './AdsDetails'
import { loadAd } from '../actions/ads'

class AdsDetailsContainer extends React.PureComponent {
    componentDidMount() {
        this.props.loadAd(Number(this.props.match.params.id))
    }

    render() {
        const { match, ad } = this.props
        return (
            <div>
                <h1>TESTING</h1>
                {/* <AdsDetails
                    event={ad && match.params.id == ad.id && ad}
                    onSubmit={this.onSubmit}
                    formValues={this.state.formValues}
                /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ad: state.ad
})

export default connect(mapStateToProps, { loadAd })(AdsDetailsContainer)
