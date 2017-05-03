import React from 'react'
import { Field, reduxForm } from 'redux-form'

import submit from './../submit/submit'

const validate = values => {
    const errors = {}
    if (!values.productName) {
        errors.productName = '名称不能为空'
    } else if (values.productName.length < 5) {
        errors.productName = '名称不能少于5个字'
    }
    if (!values.productPrice) {
        errors.productPricee = '价格不能为空'
    } else if (isNaN(Number(values.productPrice))) {
        errors.productPrice = '价格必须为数字'
    } else if (Number(values.productPrice) < 18) {
        errors.productPrice = '价格最少18块钱'
    }
    return errors
}

const warn = values => {
    const warnings = {}
    if (values.productPrice < 30) {
        warnings.productPrice = '太便宜'
    }
    return warnings
}

const errorStyle = {
    color: "red"
}

const warnStyle = {
    color: "purple"
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="row cl">
        <label className="form-label col-xs-4 col-sm-2"><span className="c-red">*</span>{label}</label>
        <div className="formControls col-xs-8 col-sm-9">
            <input className="input-text" {...input} placeholder={label} type={type} />
            {touched && ((error && <span style={errorStyle}>{error}</span>) || (warning && <span style={warnStyle}>{warning}</span>))}
        </div>
    </div>
)

const SimpleForm = (props) => {
    const { handleSubmit, reset, pristine, submitting } = props;
    return (
        <form className="form form-horizontal" onSubmit={handleSubmit(submit)}>
            <Field name="productName" type="text" component={renderField} label="商品名称" />
            <Field name="productPrice" type="text" component={renderField} label="商品价格" />
            <div className="row cl">
                <div className="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2">
                    <button type="submit" className="btn btn-primary radius" disabled={pristine || submitting}>提交</button>
                    <button type="button" className="btn btn-primary radius" disabled={pristine || submitting} onClick={reset}>重置</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'simpleForm',
    validate,
    warn
})(SimpleForm)