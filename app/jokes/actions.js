import fetch from 'isomorphic-fetch'
import HtmlEntities from 'html-entities'

import {
  requestJoke,
  requestJokeSuccess,
} from '../jokes/reducer'

const htmlEntitiesDecoder = new HtmlEntities.XmlEntities()

export const fetchJoke = () => async dispatch => {
  dispatch(requestJoke())

  try {
    const response = await fetch(
      'https://api.icndb.com/jokes/random'
    )
    const json = await response.json()
    const { value } = json
    const payload = {
      ...value,
      joke: htmlEntitiesDecoder.decode(value.joke),
    }
    dispatch(requestJokeSuccess(payload))
  } catch (error) {
    console.error(`Error fetching joke: ${error.message}`)
  }
}
