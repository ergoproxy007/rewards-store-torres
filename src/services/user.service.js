import { HeaderBuilder } from 'builders/headers.builder';
import getAsyncData from './methods/async/get.async';

const URL = 'https://coding-challenge-api.aerolab.co/user/me';
const ContentType = 'application/json';
const Accept = 'application/json';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2MzQ1NjdlNzE4NzAwMjBlMzhmYTciLCJpYXQiOjE2MTYyNjIyMzB9.YQ2MgFsjFHlbRoqA6lFbhAqI1xncID3EukZ9g03qfjQ';

export const UserService = {
    getData: () => getAsyncData(URL, new HeaderBuilder(ContentType, Accept, Token).build())
}
