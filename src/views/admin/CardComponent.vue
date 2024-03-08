<template>
  <v-card
    hover
    color="white"
    class="cards ml-5 mr-5 group"
    height="350"
    @click="$emit('click')"
  >
  </v-card>
</template>

<script>
export default {
  props: ['imgSrc', 'title', 'subtitle', 'features'],
};
</script>
