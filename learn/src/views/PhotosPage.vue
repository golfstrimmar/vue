<template lang="pug">
v-container
  PhotoDialog(
    :photo="currentPhoto"
    :dialogVisible ="dialogVisible"
  )
  v-row
    Photo(
      @openPhoto="openPhoto"
      :photo="photo"
    )
</template>

<script>
import Photo from '@/components/Photo';
import PhotoDialog from '@/components/PhotoDialog';
export default {
  data: () => ({
    photo:{
      title: "заголовок",
      text: "lorem"
    },
    currentPhoto: {},
    dialogVisible: false
    }),
  components: { PhotoDialog, Photo  },
  mounted() {     },
  methods: { 

     openPhoto(photo){
this.currentPhoto = photo
this.dialogVisible = true
     }
       },
  computed:{      }
};

</script>
