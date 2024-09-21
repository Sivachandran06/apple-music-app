export async function _getApiData(url, option) {
    let token = await getToken();
    let _curldata = new Promise((resolve, reject) => {
        option['headers'] = {
            ...option['header'],
            'content-type': 'application/json',
            'projectid': 'u0kdju5bps0g',
            'authorization': `Bearer ${token}`
        }
        fetch(url, option).then(async (res) => {
            let data = await res.json();
            if (data['status'] == "success") {
                if (data['token']) {
                    sessionStorage.setItem("token", data['token']);
                }
                resolve(data);
            } else {
                reject(data);
            }
        }).catch(err => {
            reject(err)
        });
    });
    return _curldata;
}

function getToken() {
    return sessionStorage.getItem('token');
}