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
          <q-btn v-if="!editandoAgendamentoId" type="submit" label="Agendar" color="primary" />
          <q-btn v-else type="button" @click="confirmUpdateAgendamento" label="Atualizar" color="primary" />
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
        <q-item-section side>
          <q-btn icon="edit" @click="editAgendamento(agendamento)" />
          <q-btn icon="delete" color="negative" @click="handleDeleteAgendamento(agendamento.id)" />
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
      editandoAgendamentoId: null,
      horarios: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
    };
  },
  computed: {
    ...mapState('agendamentos', ['agendamentos'])
  },
  methods: {
    ...mapActions('agendamentos', ['agendarHorario', 'updateAgendamento', 'deleteAgendamento']),
    handleAgendamento() {
      if (this.clienteNome && this.dataAgendamento && this.horaAgendamento) {
        const agendamento = {
          nome: this.clienteNome,
          data: this.dataAgendamento,
          horario: this.horaAgendamento
        };
        if (this.editandoAgendamentoId === null) {
          this.agendarHorario(agendamento)
            .then(() => {
              this.resetForm();
            })
            .catch(error => {
              console.error('Falha ao agendar horário:', error);
            });
        }
      } else {
        alert('Por favor, preencha todos os campos');
      }
    },
    confirmUpdateAgendamento() {
      if (this.clienteNome && this.dataAgendamento && this.horaAgendamento) {
        const updatedAgendamento = {
          id: this.editandoAgendamentoId,
          nome: this.clienteNome,
          data: this.dataAgendamento,
          horario: this.horaAgendamento
        };
        this.updateAgendamento(updatedAgendamento)
          .then(() => {
            this.resetForm();
          })
          .catch(error => {
            console.error('Falha ao atualizar agendamento:', error);
          });
      } else {
        alert('Por favor, preencha todos os campos');
      }
    },
    editAgendamento(agendamento) {
      this.clienteNome = agendamento.nome;
      this.dataAgendamento = agendamento.data;
      this.horaAgendamento = agendamento.horario;
      this.editandoAgendamentoId = agendamento.id;
    },
    handleDeleteAgendamento(agendamentoId) {
      this.deleteAgendamento(agendamentoId)
        .catch(error => {
          console.error('Falha ao deletar agendamento:', error);
        });
    },
    resetForm() {
      this.clienteNome = '';
      this.dataAgendamento = '';
      this.horaAgendamento = '';
      this.editandoAgendamentoId = null;
    }
  }
};
</script>
