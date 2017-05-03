import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : '不能为空'
const maxLength = max => value =>
  value && value.length > max ? `最多 ${max} 个字符` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? '必须为数字' : undefined
const minValue = min => value =>
  value && value < min ? `最少为 ${min}` : undefined
const minValue18 = minValue(18)

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

const FieldLevelValidate = (props) => {
    const { handleSubmit, reset, pristine, submitting, submitAction } = props;
    return (
        <form className="form form-horizontal" onSubmit={handleSubmit(submitAction)}>
            <Field name="productName" type="text" component={renderField} validate={[ required, maxLength15 ]} label="商品名称" />
            <Field name="productPrice" type="text" component={renderField} validate={[ required, number, minValue18 ]} label="商品价格" />
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
    form: 'fieldLevelValidate'
})(FieldLevelValidate)