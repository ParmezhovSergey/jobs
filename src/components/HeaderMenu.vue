<template>
  <div class="header">
    <div class="text">JOBS.RU</div>
    <div class="menu">Отклики
        <div class="info">0</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: rgb(45, 45, 248);
  height: 70px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
    margin-left: 20px;
    font-size: 40px;
}
.menu{
    margin-right: 50px;
    display: flex;
}
.info{
    width: 20px;
    height: 20px;
    margin-left: 3px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: white;
    color: black;

}
</style>
