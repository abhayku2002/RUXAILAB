<template>
  <v-card
    hover
    color="white"
    class="cards ml-5 mr-5 group"
    height="350"
    @click="$emit('click')"
  >
    <v-icon x-large>mdi-arrow-u-left-bottom</v-icon>
          </v-btn>
          <v-col cols="1"></v-col>
          <v-col cols="10" class="mt-16 ml-11">
            <span class="Titles ml-5">Test Creation</span>
            <br />
            <span class="cardSubtitle ml-5">Add a name to your test!</span>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="5" class="ml-10">
            <v-card
              color="white"
              style="border-radius: 20px !important;"
              height="480"
            >
              <v-col cols="11">
                <div class="mt-4">
                  <span class="cardInternTitles ml-6">Test Name</span>
                </div>
                <v-text-field
                  v-model="test.testTitle"
                  class="ml-6 mt-3"
                  label="Test Name"
                  outlined
                  color="orange"
                  @change="$store.commit('SET_LOCAL_CHANGES', true)"
                ></v-text-field>
                <span class="cardInternTitles ml-6">Test Description</span>
                <v-textarea
                  outlined
                  v-model="test.testDescription"
                  color="orange"
                  class="ml-6 mt-3"
                  label="Test Description"
                  @change="$store.commit('SET_LOCAL_CHANGES', true)"
                ></v-textarea>
                <v-row>
                  <v-checkbox
                    v-model="test.isPublic"
                    class="ml-10 mt-8"
                    color="orange"
                    label="Turn this test public to all users"
                  >
                  </v-checkbox>
                  <v-btn
                    dark
                    fab
                    large
                    color="orange"
                    class="ml-auto mt-4 mr-2"
                    @click="validate()"
                  >
                    <v-icon x-large>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-row>
              </v-col>
  </v-card>
</template>

<script>
export default {
  props: ['imgSrc', 'title', 'subtitle', 'features'],
};
</script>
