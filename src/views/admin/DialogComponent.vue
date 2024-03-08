<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <v-card color="#f9f5f0">
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog', 'title', 'subtitle', 'fields'],
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    submitForm() {
      this.$emit('submit');
    },
  },
};
</script>
