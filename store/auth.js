export const state = () => ({
    isLoggedIn: false
})

export const actions = {
    async login(_, payload) {
        const response = true;
        console.log(payload);
        if (response) {

            this.commit('auth/setLogin', { value: payload.value });

        }


    },

}

export const mutations = {
    setLogin(state, payload) {
        state.isLoggedIn = payload.value
    },
}
