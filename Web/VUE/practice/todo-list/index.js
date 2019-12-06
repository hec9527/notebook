const todo = [{
    task: "写作业0",
    status: "ok",
}, {
    task: "写作业1",
    status: "ok",
}, {
    task: "写作业2",
    status: "ok",
}, {
    task: "写作业3",
    status: "no",
}, {
    task: "写作业4",
    status: "ok",
}, {
    task: "写作业5",
    status: "no",
}, {
    task: "写作业6",
    status: "ok",
}, {
    task: "写作业7",
    status: "no",
}];


const vm = new Vue({
    el: ".todo-list-container",
    data: {
        el: document.getElementsByClassName("status")[0],
        todos: todo,
        newTaskMsg: '',
        show: todo
    },
    // created: function () {
    //     this.show = this.todos;
    // },
    methods: {
        newTask: function (e) {
            if (e.keyCode !== 13 || !this.newTaskMsg) {
                return;
            }
            e.preventDefault();
            this.todos.push({
                task: this.newTaskMsg,
                status: "no"
            })
            this.newTaskMsg = '';
        },
        changeStatus: function (index) {
            this.todos[index].status = this.todos[index].status === "ok" ? "no" : "ok";
        },
        changeList: function (callback) {
            if (callback === "finished") {
                this.show = this.finished;
            } else if (callback === "still") {
                this.show = this.still;
            } else {
                this.show = this.todos;
            }
        },
        deleteItem: function (index) {
            this.todos.splice(index, 1);
        },
    },
    computed: {
        finished: function () {
            return this.todos.filter(el => {
                return el.status === "ok";
            });
        },
        still: function () {
            return this.todos.filter(el => {
                return el.status !== "ok";
            });
        }
    }
})