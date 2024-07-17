export async function _getApiData(url, option) {
    let _curldata = new Promise((resolve, reject) => {

        option['header'] = {
            ...option['header'],
            'Content-Type': 'application/json',
            'projectID': '22uq494gh842'
        }

        console.log(option);

        fetch(url, option).then((res) => {
            resolve(res.json())
        }).catch(err => {
            reject(err)
        });
    });
    return _curldata;
}