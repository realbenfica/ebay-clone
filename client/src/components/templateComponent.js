import React, { Component } from 'react'
import * as request from 'superagent'
import { TEMPLATE } from '../actions/template'
import { connect } from 'react-redux'

class AdsContainer extends Component {
    state = {
        dogBreeds: []
    }
    componentDidMount() {

        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                breeds.map(breed => {
                    return request.get(`https://dog.ceo/api/breed/${breed}/images`)
                        .then(response => {
                            this.props.SetDogBreed(breed, response.body.message[randomImage])
                        })
                })
            })
            .catch("error")
    }
    render() {
        return 
        // (<div className="img" > { /* {this.state.dogBreeds} */} </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, { TEMPLATE })(AdsContainer)