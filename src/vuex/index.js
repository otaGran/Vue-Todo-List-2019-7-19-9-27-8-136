import Vue from 'vue'
import Vuex from "vuex";


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

            state.todoListItems[index].isChecked = !this.todoListItems[index].isChecked;

        }


    },
    getters: {
        todoItems(state) {
            if (state.isActived) {
                return state.todoListItems.filter(v => {
                    if (!v.isChecked)
                        return true;
                    else
                        return false;
                });
            } else if (state.isCompleted) {
                return state.todoListItems.filter(v => {
                    if (v.isChecked)
                        return true;
                    else
                        return false;
                });
            } else {
                return state.todoListItems;
            }
        }
    }

})
