<template>
  <div>
    <h1>A-Post Page</h1>
    <div>
      <ul>
        <li>userId = {{ items.userId }}</li>
        <li>id = {{ items.id }}</li>
        <li>title = {{ items.title }}</li>
        <!-- <li>body = {{ post.body }}</li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(); // Add parentheses to useRoute
const id = ref(route.params.id);

const items = ref({});
const url = ref(`https://jsonplaceholder.typicode.com/posts/${id.value}`);

function fetchPost() { // Rename the function to fetchPost
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(fetchPost); // Change to fetchPost
</script>

<style scoped>
/* Add your styles here if needed */
</style>
