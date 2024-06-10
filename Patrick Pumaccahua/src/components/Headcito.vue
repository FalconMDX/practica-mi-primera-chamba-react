<script setup>
import { ref } from 'vue'


</script>

<template>
  <nav className="nav_head ">
    <img className="nav_head_img w-60" src="../assets/Imagenes/Group 3.png" alt="">

    <li className="nav_head_li">
      <ul className="nav_head_li_ul1">Home</ul>
      <ul>Browse</ul>
      <ul>Pricing</ul>
      <ul>Contact</ul>
    </li>
    <button className="nav_head_li_button1">Sign up</button>
    <button className="nav_head_li_button2">Log in</button>
  </nav>
  <div ></div>
</template>

<style scoped>

.nav_head{
  display: inline-block;
  height: 150px;
  width: 100%;
  background-color: #fff;
  
}
.nav_head_img{
  position: static;
  
  display: inline-block;
  
  margin-left: 180px;
  margin-top: 35px;
}
.nav_head_li{
  position: relative;
  display: inline-block;
  margin-left: 420px;
  list-style: none;
  top: 25px;
}

ul, button{
  font-size: 20px;
  font-weight: 500;
}

ul{
  margin: 0 40px;
  display: inline;
  color: #656565;
}
.nav_head_li_ul1{
  color: #FF9000;
}
button{
  position: relative;
  width: 140px;
  height: 50px;
  border-radius: 6px;
  opacity: 0px;
  box-shadow: 0px 2px 7px 0px #0000001A;
  box-shadow: 1px 1px 5px 2px #0000001A inset;
  top: 24px;
  margin-right: 40px;
}
.nav_head_li_button1{
  background-color: #FF9000;
  color: #fff;
  border-style: none;
  box-shadow: 0px 2px 7px 0px #0000001A;
  box-shadow: 1px 1px 5px 2px #0000001A inset;
}
.nav_head_li_button2{
  background-color: #FFF;
  color: #FF9000;
  box-shadow: 0px 2px 7px 0px #0000001A;
  border: 2.5px solid #FF9000
}
</style>