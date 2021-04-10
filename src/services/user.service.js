import { HeaderBuilder } from 'builders/headers.builder';
import getAsyncData from './methods/async/get.async';
import fetchSync from './methods/async/fetch.sync';
import { ServicesUtil } from 'config/services.util';

const URL_USER_ME = 'https://coding-challenge-api.aerolab.co/user/me';
const URL_USER_POINTS = 'https://coding-challenge-api.aerolab.co/user/points';
const METHOD = 'POST';

export const UserService = {
    getMeData: () => getAsyncData(
                        URL_USER_ME,
                        new HeaderBuilder(ServicesUtil.ContentType, ServicesUtil.Accept, ServicesUtil.Token).build()),
    addPoints: (value) => fetchSync(
                            URL_USER_POINTS, METHOD, {amount: value},
                            new HeaderBuilder(ServicesUtil.ContentType, ServicesUtil.Accept, ServicesUtil.Token).build())
}
