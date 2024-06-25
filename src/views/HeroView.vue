<template>
  <div class="grid d-flex justify-content-between flex-wrap">
    <CardItemComponent v-for="card in cards" :key="card.id" :card="card" @onNavigate="navigate" />
  </div>
</template>

<script>
import CardItemComponent from '@/components/CardItemComponent.vue';

export default {
  components: {
    CardItemComponent,
  },
  computed: {
    cards() {
      return this.$store.getters['getCards'];
    },
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: 'card', params: { id } });
    },
  },

};
</script>
