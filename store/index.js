export const state = () => ({
    counter: 0,
    message: "",
})

export const mutations = {
    incrementCounter(state) {
        state.counter++;
    },
    decrementCounter(state) {
        state.counter--;
        if (state.counter <= 0) {
            state.counter = 0;
        }
    },
    setMessage(state, payload) {
        state.message = payload.msg;
    }
}

export const actions = {
    increment() {
        this.commit('incrementCounter');
    },
    decrement() {
        this.commit('decrementCounter');
    },
    processMessage() {
        this.commit('setMessage', { msg: 'Hello, World!' });
    }
}


export const getters = {
    getMessage: (state) => state.message,
    getCounter: (state) => state.counter,
}