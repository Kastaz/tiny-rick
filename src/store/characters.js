export default {
    namespaced: true,

    state: {
        characters: [],
        charId: [1,2,3,4,5,6,7,8,9]
    },
    
    mutations:{
        setCharacters(state, characters){
            state.characters = characters
        }
    },
    
    actions: {
        async getCharacters( { commit, state } ) {
            try {
                const response = await fetch(`http://tiny-rick.tk/api/character/${state.charId}`)
                    .then( (data) => data.json())
                    .then( (data) => {
                        commit('setCharacters', data)
                    })
            } catch(err) {
                console.log(err);
            }
        }
    }
}