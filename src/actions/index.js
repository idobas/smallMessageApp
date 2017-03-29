import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

const INPUT_JSON_PATH = '../../example_input.json';

export function fetchMessages() {
  const request = axios.get(INPUT_JSON_PATH);
  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}
