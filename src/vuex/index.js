import Vue from 'vue'
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        isActived: false,
        isCompleted: false,
        todoListItems: []
    },
    mutations: {
        setActived(state) {
            state.isActived = true;
            state.isCompleted = false;
        },
        setComplete(state) {
            state.isActived = false;
            state.isCompleted = true;
        },
        setAll(state) {
            state.isActived = false;
            state.isCompleted = false;
        },
        addItem(state, itemContent) {
            state.todoListItems.push({content: itemContent, isChecked: false, cindex: state.count++});
        },
        completed(state, index) {
            let test = state.todoListItems[index].isChecked;
            state.todoListItems[index].isChecked = !test;
        },
        updateTodoList(state, postResponse) {
            state.todoListItems.push(...postResponse);
        }


    },
    getters: {
        todoItems(state) {
            if (state.isActived) {
                return state.todoListItems.filter(v => {
                    return !v.isChecked;
                });
            } else if (state.isCompleted) {
                return state.todoListItems.filter(v => {
                    return v.isChecked;
                });
            } else {
                return state.todoListItems;
            }
        }
    },
    actions: {
        postItem(context, items) {


            axios
                .post('http://10.222.232.151:3001/todos', {"content": items, "ischecked": false})
                .then(res => {
                    context.commit('updateTodoList', [res.data])
                })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });


        },
        getItem(context) {
            axios
                .get('http://10.222.232.151:3001/todos')
                .then(
                    response => {
                        context.commit('updateTodoList', response.data)
                    })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });
        },
        putItem(context, id) {
            axios
                .put('http://10.222.232.151:3001/todos/' + id, {
                    "id": id,
                    "content": this.state.todoListItems[id - 1].content,
                    "isChecked": !this.state.todoListItems[id - 1].isChecked
                })
                .then(res => {
                    context.commit('updateTodoList', [response.data])
                })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });
        }
    }

})
