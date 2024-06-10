<script setup>
import { ref } from 'vue'


</script>

<template>
  <nav className="nav_content">
    <div className="nav_content_firstDiv">

      <div className="firstDiv-text">
        <div className="firstDiv_Title">
          <p className="h-24">President of</p>
          <p className="h-24 text-orange-500">Sales</p>
        </div>
        <div class="firstDiv_Prices"> 
          <p class="inline font-semibold text-2xl text-blue-900">$270.00</p>
          <p class="inline font-medium text-2xl opacity-50 text-blue-900 line-through">$350.43</p>
        </div>
        <p class="firstDiv_textito font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sed, eveniet et soluta suscipit nam saepe neque animi quisquam laborum mollitia nihil</p>
        <button class="firstDiv_button text-2xl font-semibold">
          Play now
        </button>
      </div>
      <img class="firstDiv_img inline-block relative w-[654px] top-[-30%] ml-[350px]" src="../assets/Imagenes/richie.png" alt="">  
    </div>


    <div className="nav_content_secondDiv  ml-[345px] mt-[100px]">
      <div class="circle_Img inline-block relative w-[450px] h-[450px] bg-[#FF9000] rounded-full top-[-120px]">
        <img class="firstDiv_img inline-block w-[459px]  ml-[40px] mt-[15px]" src="../assets/Imagenes/sentado.png" alt="">
      </div>
      
      <div class="secondDiv_text relative inline-block ml-[350px] mt-[75px] w-[387px]">
        <div className="secondDiv_Title w-[484px] text-6xl font-bold">
          <p className="h-24 inline">Now in </p>
          <p className="h-24 inline text-orange-500">3D</p>
        </div>
        <div class="firstDiv_Prices"> 
          <p class="inline font-semibold text-2xl text-blue-900">$100.00</p>
          <p class="inline font-medium text-2xl opacity-50 text-blue-900 line-through">$169.43</p>
        </div>
        <p class="firstDiv_textito font-normal text-lg">Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat </p>
        <button class="firstDiv_button text-2xl font-semibold">
          Play now
        </button>

      </div>
    </div>
  </nav>
  
</template>

<style scoped>
.nav_content{
  height: 1500px;
  
}
.nav_content_firstDiv{
  margin-left: 345px;
  height: 50%;
}
.firstDiv_Title{
  width: 484px;
  font-size: 72px;
  font-weight: 700;
}
.firstDiv-text{
  display: inline-block;
  position: relative;
  margin-top: 150px;
}
.firstDiv_Prices{
  margin-top: 20px;
}
.firstDiv_Prices p{
  margin-right: 10px;
}
.nav_content_firstDiv p{
  width: 484px;
}
.firstDiv_button{
  margin-top: 75px;
  width: 200px;
  height: 80px;
  top: 659px;
  left: 349px;
  gap: 0px;
  border-radius: 10px;
  opacity: 0px;
  box-shadow: 0px 4px 7px 0px #00000033;
  box-shadow: 1px 1px 11px 4px #00000026 inset;
  background: #FF9000;
  color: #FFFFFF;
}
.firstDiv_textito{
  margin-top: 25px;
}

</style>