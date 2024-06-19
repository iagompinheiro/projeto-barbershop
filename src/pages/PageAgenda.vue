<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="dataAgendamento" minimal />
      </div>
      <div class="q-gutter-md">
        <q-form @submit.prevent="handleAgendamento">
          <q-input v-model="clienteNome" label="Nome do Cliente" />
          <q-select v-model="horaAgendamento" :options="horarios" label="Horário" />
          <q-btn type="submit" label="Agendar" color="primary" />
        </q-form>
      </div>
    </div>

    <h3>Agendamentos</h3>
    <q-list bordered separator>
      <q-item v-for="agendamento in agendamentos" :key="agendamento.id">
        <q-item-section>
          <q-item-label>{{ agendamento.nome }}</q-item-label>
          <q-item-label caption>{{ agendamento.data }} às {{ agendamento.horario }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PageAgenda',
  data() {
    return {
      clienteNome: '',
      dataAgendamento: '',
      horaAgendamento: '',
      horarios: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
    };
  },
  computed: {
    ...mapState('agendamentos', ['agendamentos'])
  },
  methods: {
    ...mapActions('agendamentos', ['agendarHorario']),
    handleAgendamento() {
      if (this.clienteNome && this.dataAgendamento && this.horaAgendamento) {
        this.agendarHorario({
          nome: this.clienteNome,
          data: this.dataAgendamento,
          horario: this.horaAgendamento
        }).then(() => {
          this.clienteNome = '';
          this.dataAgendamento = '';
          this.horaAgendamento = '';
        }).catch(error => {
          console.error('Falha ao agendar horário:', error);
        });
      } else {
        alert('Por favor, preencha todos os campos');
      }
    }
  }
};
</script>
