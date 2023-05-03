<template>
    <div>
      <v-file-input
        v-model="selectedFiles"
        accept="image/*"
        label="Select images"
        multiple
      ></v-file-input>
  
      <v-row>
        <div class="d-flex" v-for="(file, index) in selectedFiles" :key="index" >
          <v-card height="50" width="50" class="mx-1">
            <v-img :src="getFileUrl(file)" width="100%" height="100%"></v-img>
          </v-card>
        </div>
      </v-row>
  
      <v-btn >Upload</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFiles: [],
      }
    },
    methods: {
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
  