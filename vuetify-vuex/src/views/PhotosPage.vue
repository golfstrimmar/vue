<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"></PhotoForm>
    <v-row>
      <Photo
        v-for="(photo, index) in photos"
        :key="index"
        :photo="photo"
        @openPhoto="openPhoto"
      ></Photo>
    </v-row>
    <PhotoDialog :photo="currentPhoto" :dialog="dialog"></PhotoDialog>
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
export default {
  data: () => ({
    photos: [],
    curentPhoto: {},
    dialog: false,
  }),
  components: {
    Photo,
    PhotoForm,
    PhotoDialog,
  },
  mounted() {
    this.fetchToDo();
  },

  methods: {
    fetchToDo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => (this.photos = response.data));
    },
    addPhoto(photo) {
      this.photos.push(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialog = true;
    },
  },
};
</script>

<style scoped></style>
