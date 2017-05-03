import expect from 'expect';

import * as types from './../../src/constants/ActionTypes'
import * as actions from './../../src/actions/index'

describe('actions', () => {
    it("添加一条待办事项", () => {
        expect(actions.addTodo("哈哈哈")).toEqual({ type: types.ADD_TODO, text: "哈哈哈" })
    })
    it("删除一条待办事项", () => {
        expect(actions.deleteTodo(2)).toEqual({ type: types.DELETE_TODO, id: 2 })
    })
    it("修改一条待办事项", () => {
        expect(actions.editTodo(2,"123")).toEqual({ type: types.EDIT_TODO, id: 2, text:"123" })
    })
})