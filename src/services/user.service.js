import { HeaderBuilder } from 'builders/headers.builder';
import getAsyncData from './methods/async/get.async';
import fetchSync from './methods/async/fetch.sync';

const URL_USER_ME = 'https://coding-challenge-api.aerolab.co/user/me';
const URL_USER_POINTS = 'https://coding-challenge-api.aerolab.co/user/points';
const METHOD = 'POST';
const ContentType = 'application/json';
const Accept = 'application/json';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2MzQ1NjdlNzE4NzAwMjBlMzhmYTciLCJpYXQiOjE2MTYyNjIyMzB9.YQ2MgFsjFHlbRoqA6lFbhAqI1xncID3EukZ9g03qfjQ';

export const UserService = {
    getData: () => getAsyncData(URL_USER_ME, new HeaderBuilder(ContentType, Accept, Token).build()),
    postData: (value) => fetchSync(URL_USER_POINTS, METHOD, {amount: value},
                                   new HeaderBuilder(ContentType, Accept, Token).build())
}
