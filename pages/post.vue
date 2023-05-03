<template>
  <div>
    <v-card>
      <v-card-actions class="mr-n2 mt-n3"
        ><v-spacer></v-spacer>
        <v-btn
          color="error"
          dark
          :small="$vuetify.breakpoint.xs"
          @click="back()"
          >back <v-icon>mdi-arrow-right-thick</v-icon></v-btn
        ></v-card-actions
      >
      <div class="frem">
        <v-card-title>Tso Duab Toj Siab.</v-card-title>
        <textarea
          class="text-area"
          cols="92"
          rows="5"
          aria-labelledby="your-answer-header"
          tabindex="101"
        ></textarea>
        <div class="justify-center text-center mt-5">
          <v-file-input
            v-model="selectedFiles"
            accept="image/*"
            label="Select images"
            multiple
          ></v-file-input>
          <v-row>
            <div
              class="d-flex"
              v-for="(file, index) in selectedFiles"
              :key="index"
            >
              <v-card height="50" width="50" class="mx-1">
                <v-img
                  :src="getFileUrl(file)"
                  width="100%"
                  height="100%"
                ></v-img>
              </v-card>
            </div>
          </v-row>
          <!--------------------------- buttom profile -->
          <v-btn class="mt-2" color="primary" small @click="upload">
            <v-icon>mdi-tray-arrow-up</v-icon>
            Profile
          </v-btn>
        </div>
        <v-card-actions>
          <div class="bottom-cont">
            <v-btn v-ripple @click="uploadImages"
              ><v-icon color="blue">mdi-file-image-plus</v-icon></v-btn
            >
            <a v-ripple><v-icon color="green">mdi-movie-open-plus</v-icon></a>
            <a v-ripple><v-icon>mdi-microphone</v-icon></a>
          </div>
          <v-spacer></v-spacer>
        </v-card-actions>
      </div>
      <v-card-actions
        ><v-btn color="blue" dark>Post your answer</v-btn></v-card-actions
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ItcSeerLandingAnswer',

  data() {
    return {
      selectedFiles: [],
    }
  },

  mounted() {},

  methods: {
    back() {
      this.$store.commit('detail/setAnswers', false)
    },
    uploadImages() {
      // Perform your upload logic here
      console.log(this.selectedFiles)
    },
    getFileUrl(file) {
      return URL.createObjectURL(file)
    },
  },
}
</script>
<style lang="scss" scoped>
.Margin {
  margin-right: 9px;
}
.text-area {
}

a {
  text-decoration: none;
}

.frem {
  /* width: 26rem; */
  height: 100%;
  background: white;
  border-radius: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 12px 12px 12px;
}
.frem .text-area {
  word-wrap: break-word;
  margin: 0 auto;
  width: 100%;
  resize: none;
  min-height: 7rem;
  background: #eaedf2;
  border-radius: 18px;
  /* border: none; */
  /* outline: none; */
  padding: 12px;
  color: #484848;
  font-size: 18px;
  /* font-family: cursive; */
}
.text-area:empty::before {
  content: attr(data-placeholder);
  color: #7c7c7c;
  font-family: auto;
}
.bottom-cont {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
}

.bottom-cont a {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 17px;
}

.bottom-cont a img {
  width: 27px;
}
.bottom-cont a:nth-child(1) {
  background: #1051ff38;
  color: #1051ff;
}
.bottom-cont a:nth-child(2) {
  background: #15cf3736;
  color: #15cf37;
}
.bottom-cont a:nth-child(3) {
  background: #ffc02440;
}
.bottom-cont a:nth-child(4) {
  background: #ff344b40;
}
</style>
