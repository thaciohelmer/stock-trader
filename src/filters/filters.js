import Vue from "vue";

Vue.filter('currency', value => 'R$' + value.toLocaleString())