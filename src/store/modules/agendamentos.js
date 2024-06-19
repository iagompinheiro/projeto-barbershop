
const state = {
    agendamentos: JSON.parse(localStorage.getItem('agendamentos')) || []
};

const mutations = {
    AGENDAR_HORARIO(state, agendamento) {
        state.agendamentos.push(agendamento);
        localStorage.setItem('agendamentos', JSON.stringify(state.agendamentos));
    }
};

const actions = {
    agendarHorario({ commit }, agendamento) {
        commit('AGENDAR_HORARIO', agendamento);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
