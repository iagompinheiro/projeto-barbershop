const state = {
    // Inicializa o estado 'agendamentos' a partir do localStorage ou um array vazio
    agendamentos: JSON.parse(localStorage.getItem('agendamentos') || '[]')
};

const mutations = {
    ADD_AGENDAMENTO(state, agendamento) {
        state.agendamentos.push(agendamento);
        localStorage.setItem('agendamentos', JSON.stringify(state.agendamentos));
    },

    UPDATE_AGENDAMENTO(state, updatedAgendamento) {
        const index = state.agendamentos.findIndex(agendamento => agendamento.id === updatedAgendamento.id);
        if (index !== -1) {
            state.agendamentos.splice(index, 1, updatedAgendamento);
            localStorage.setItem('agendamentos', JSON.stringify(state.agendamentos));
        }
    },

    DELETE_AGENDAMENTO(state, agendamentoId) {
        state.agendamentos = state.agendamentos.filter(agendamento => agendamento.id !== agendamentoId);
        localStorage.setItem('agendamentos', JSON.stringify(state.agendamentos));
    }
}

const actions = {
    agendarHorario({ commit }, agendamento) {
        const newAgendamento = { ...agendamento, id: Date.now() }; // Gera um ID único baseado no timestamp atual
        commit('ADD_AGENDAMENTO', newAgendamento);
    },
    updateAgendamento({ commit }, updatedAgendamento) {
        commit('UPDATE_AGENDAMENTO', updatedAgendamento);
    },
    deleteAgendamento({ commit }, agendamentoId) {
        commit('DELETE_AGENDAMENTO', agendamentoId);
    }
}

const getters = {
    agendamentos: state => state.agendamentos
}

export default {
    namespaced: true, // Habilita o namespace para este módulo Vuex
    state,
    mutations,
    actions,
    getters
}
