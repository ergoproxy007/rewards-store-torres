import { HeaderBuilder } from 'builders/headers.builder';
import getAsyncData from './methods/async/get.async';
import { ServicesUtil } from 'config/services.util';

const URL_PRODUCTS = 'https://coding-challenge-api.aerolab.co/products';

export const ProductsService = {
    getData: () => getAsyncData(
                    URL_PRODUCTS,
                    new HeaderBuilder(ServicesUtil.ContentType, ServicesUtil.Accept, ServicesUtil.Token).build())
}
