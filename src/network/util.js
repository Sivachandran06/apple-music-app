export async function _getApiData(url, option) {
    let token = await getToken();
    let _curldata = new Promise((resolve, reject) => {
        option['headers'] = {
            ...option['header'],
            'Content-Type': 'application/json',
            'projectID': 'u0kdju5bps0g',
            'Authorization': token
        }
        fetch(url, option).then(async (res) => {
            let data = await res.json();
            if (data['status'] == "success"){
                if (data['token']) {
                    sessionStorage.setItem("token",data['token']);
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

function getToken(){
    return sessionStorage.getItem('token');
}