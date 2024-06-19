import { createStore } from 'vuex';
import agendamentos from './modules/agendamentos';

export default createStore({
  modules: {
    agendamentos
  }
});
