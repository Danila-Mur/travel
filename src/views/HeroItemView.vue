<template>
  <div class="col-lg-10 offset-1">
    <img class="mb-4 w-100" :src="require(`@/assets/img/${card.image}`)" :alt="card.image" />
    <h2>{{ card.name }}</h2>
    <div class="description">
      {{ card.description }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    card() {
      return this.$store.getters['getCardsById'](this.$route.params.id);
    },
  },
};
</script>
