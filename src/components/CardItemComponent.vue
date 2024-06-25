<template>
  <div @click="onEmmit(card.id)">
    <div class="item-wrapper d-flex flex-column">
      <img :src="require(`@/assets/img/${card.image}`)" class="mb-3" :alt="card.image" />
      <h2>{{ card.name }}</h2>
      <div class="description">
        {{ card.description | truncateWithReadMore }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit('onNavigate', id);
    },
  },
  filters: {
    truncateWithReadMore(value) {
      if (!value) return '';
      value = value.toString();

      const limit = 400;
      if (value.length <= limit) {
        return value;
      }

      return value.slice(0, limit) + '... Читать далее';
    },
  },
};
</script>
