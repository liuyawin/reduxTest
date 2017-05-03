import { SubmissionError } from 'redux-form'
import Mock from 'mockjs'
import $ from 'jquery'

window.debug = 1

if (window.debug == 1) {
    Mock.mock(/getTableData/, {
        "result": "对着呢"
    })
}

function submit(values) {
    console.log("submit...")
    $.ajax({
        url: 'getTableData'
    })
    .done(res => {
        let data = JSON.parse(res);
        console.log(data.result);
    })
    // fetch('getTableData').then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(e => console.log("Oops, error", e))
}

export default submit