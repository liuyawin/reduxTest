import Mock from 'mockjs'
import $ from 'jquery'

window.debug = 1

if (window.debug == 1) {
    Mock.mock(/getTableData/, {
        "result|1": ["对着呢","好着呢","牛着呢","厉害着呢","棒棒哒","真是天才"]
    })
}

export const submit = (values) => {
    return dispatch => {
        console.log(values)
        $.ajax({
            url: 'getTableData'
        })
        .done(res => {
            let data = JSON.parse(res);
            console.log("发送action" + data.result);
            return dispatch({
                type: 'AJAXTEST',
                result: values.productName + data.result
            })
        })
    }
}
