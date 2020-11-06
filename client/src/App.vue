<template>
  <v-app>
    <v-main>
      <ViewCommits />
    </v-main>
  </v-app>
</template>

<script>
import ViewCommits from './components/ViewCommits';

export default {
  name: 'App',

  components: {
    ViewCommits
  },

  data: () => ({
    //
  })
};
</script>
