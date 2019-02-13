import request from 'superagent'
export const ADS_FETCHED = 'ADS_FETCHED'
export const AD_CREATED = 'AD_CREATED'


const baseUrl = 'http://localhost:4000'

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
})

const adCreateSuccess = ad => ({
  type: AD_CREATED,
  ad
})

export const loadAds = () => (dispatch, getState) => {
  if (getState.ads) return 
  request(`${baseUrl}/ads`)
    .then(response => {
      console.log(response.body.ads)
      dispatch(adsFetched(response.body.ads))
    })
    .catch(console.error)
}

export const createAd = (data) => dispatch => {
  request
    .post(`${baseUrl}/ads`)
    .send(data)
    .then(response => {
      dispatch(adCreateSuccess(response.body))
    })
    .catch(console.error)
}