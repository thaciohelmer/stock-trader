<template>
  <div>
    <h1 class="mb-4 display-2 font-weight-light">
      Negocie e Consulte suas Ações
    </h1>
    <v-alert :value="true" type="info" class="darken-3">
      Você pode Salvar & Carregar os Dados
    </v-alert>
    <v-alert :value="true" type="success" class="darken-1">
      Clique em "Finalizar dia" para iniciar um novo dia!
    </v-alert>
    <v-divider class="my-4" />
    <p class="display-1"><strong>Seu Saldo: </strong>{{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>