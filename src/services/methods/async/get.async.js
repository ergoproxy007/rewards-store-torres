import { RequestBuilder } from 'builders/request.builder';

async function getAsyncData(url, headers) {
    const request = new RequestBuilder(url, headers).setMethod('GET').build();
    const response = await fetch(request);
    return response.json();
}

export default getAsyncData;
