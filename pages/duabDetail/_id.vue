<template>
  <v-card>
    <v-row>
      <v-col v-for="[item, i ] in getDetail.items" :key="i" cols="12" lg="12" sm="6" >
        <v-img :src="item.img_url"></v-img>
      </v-col>
      <v-col cols="12" lg="12" sm="6">
        <div>npe:</div>
        <div>Neeg Saib:</div>
        {{getDetail}}

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'FindLoveId',

  data() {
    return {

    };
  },

  computed:{
    getDetail(){
      return this.$store.state.api.duabDetail
    }

  },

  mounted() {
    this.$store.dispatch('api/selectDetail', this.$route.params.id )

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
