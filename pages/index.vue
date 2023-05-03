<template>
  <div>
    <div class="text-subtitle-1 my-10">Duab Hmoob Toj Siab</div>
    <v-row>
      <v-col
        v-for="item in getDuabtojsiab.items"
        :key="item.id"
        cols="12"
        sm="4"
      >
        <v-card :ripple="false" @click="duabDetail(item.id)">
          <v-img :src="item.img_url" contain class="align-end">
            <div class="d-flex justify-space-between">
              <div class="bgText rounded-pill align-center d-flex align-center">
                <div><v-icon>mdi-eye</v-icon></div>
                <div>{{ item.opened }}</div>
              </div>
              <div class="bgText rounded-pill align-center d-flex align-center">
                <div><v-icon>mdi-image</v-icon></div>
                <div>{{ item.img_count }}</div>
              </div>
              <div class="bgText rounded-pill align-center d-flex align-center">
                <div><v-icon>mdi-calendar-range</v-icon></div>
                <div>{{ item.f_date }}</div>
              </div>
            </div>
          </v-img>
          <v-card-title>
            {{ item.msg?.slice(0, 45) + '  ' }}
          </v-card-title>
          <v-card-text>
            {{ item.sub }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div class="text-center">
          <!-- :length="getDuabtojsiab.pages[4]" -->
          <v-pagination
            v-model="page"
            
            :total-visible="7"
            @input="nextPage"
          ></v-pagination>
          {{ getDuabtojsiab.pages }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'FindLoveIndex',

  data() {
    return {
      page: 10,
    }
  },

  computed: {
    getDuabtojsiab() {
      return this.$store.state.api.duabtojsiab
    },
  },

  mounted() {
    this.$store.dispatch('api/selectDuabTojSiab')
  },

  methods: {
    nextPage(e) {
      this.$store.dispatch('api/selectDuabTojSiab', e)
    },
    duabDetail(id) {
      this.$router.push('/duabdetail/' + id)
    },
  },
}
</script>

<style lang="scss" scoped>
.bgText {
  border: 2px solid green;
  background-color: aliceblue;
  padding: 5px;
  margin: 5px;
}
</style>
