let {
    _api,
    _api2_key1,
    _api2_key2,
    _api_url,
    _url,
    _qure
} = require('../conf')

function api_down_url (_method, _class, url) {
    const _URL_ = _api_url + _method + '/' + _class + _api + _api2_key1 + _api2_key2 + _url + url
    return _URL_
}

function api_srh_url(_method, _class, query) {
    const _URL_ = _api_url + _method + '/' + _class + _api + _api2_key1 + _api2_key2 + _qure + query
    return _URL_
}

module.exports = {
    api_down_url,
    api_srh_url
}