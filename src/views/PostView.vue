<template>
    <div class="container">
      <h1>Post Page</h1>
      <ul class="post-list">
        <li v-for="post in items" :key="post.id" class="post-item">
          <div class="post-info">
            <div class="post-info-item">
              <strong>userId:</strong> {{ post.userId }}
            </div>
            <div class="post-info-item">
              <strong>id:</strong> {{ post.id }}
            </div>
            <div class="post-info-item">
              <strong>title:</strong> {{ post.title }}
            </div>
          </div>
          <div class="read-more">
            <RouterLink :to="`/${post.id}`">อ่านต่อ</RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  const items = ref([]);
  const url = ref("https://jsonplaceholder.typicode.com/posts");
  function fetchposts() {
    axios
      .get(url.value)
      .then((response) => {
        items.value = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onMounted(fetchposts);
  </script>
  
  <style scoped>
.post-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center; /* จัดให้อยู่ตรงกลางในแนวนอน */
  align-items: center; /* จัดให้อยู่ตรงกลางในแนวตั้ง */
}

.post-item {
    color: black; 
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f5f5f5;
}


.post-info {
  display: flex;
  justify-content: space-between;
}

.post-info-item {
  flex: 1;
}

.read-more {
  text-align: right;
  margin-top: 10px;
}


  button {
    margin-bottom: 20px;
  }
  </style>
  