/**
 * Generic function for call any method fetch resquest
 */
function fetchSync(url, meth, data, header) {
    const fetchPromise = fetch(url, { method: meth,
                                      body: JSON.stringify(data),
                                      headers: header });
    return fetchPromise;
}

export default fetchSync;
