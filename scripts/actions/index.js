import fetch from 'isomorphic-fetch';
import HtmlEntities from 'html-entities';

const htmlEntitiesDecoder = new HtmlEntities.XmlEntities();

export const REQUEST_JOKE = 'REQUEST_JOKE';
function requestJoke() {
  return {
    type: REQUEST_JOKE
  }
}

export const RECEIVE_JOKE = 'RECEIVE_JOKE';
function receiveJoke(json) {
  return {
    type: RECEIVE_JOKE,
    joke: json.value,
    receivedAt: Date.now()
  }
}

export function fetchJoke() {

  return function(dispatch) {
    dispatch(requestJoke());

    return fetch('https://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(json => {
        json.value.joke = htmlEntitiesDecoder.decode(json.value.joke);
        return json;
      })
      .then(json => dispatch(receiveJoke(json)));
  }

}
