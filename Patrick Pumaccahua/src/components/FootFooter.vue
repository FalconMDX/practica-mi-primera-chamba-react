<script setup>
import { ref } from "vue"

</script>

<template>
    <nav class="block relative w-[100%px] h-[750px]">
        <div class="register inline-block relative w-[1114px] h-[208px] mt-[150px] ml-[425px]">
            <h3 class="register-h3 relative w-[700px] font-medium text-6xl mx-auto mb-[50px]">Subscribe our newsletter</h3>
            <input class="inline-block relative w-[60%] h-[85px] rounded-md" type="text" placeholder="Enter your email">
            <button class="inline-block relative w-[30%] h-[85px] rounded-md bg-[#FF9000] font-medium text-2xl ml-[25px] top-[2px]">Subscribe now</button>
        </div>
        <div class="icon w-[450px] mt-[160px] ml-[200px]">
            <img class="w-[334px]" src="../assets/Imagenes/Group 9.png" alt="">
            <p class="w-[400px] h-[71px] text-base font-normal">Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat </p>
        </div>
        <div class="options inline-block relative left-[850px] top-[-200px] w-[300px]">
            <li>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Policy</ul>
            </li>
            <li>
                <ul>Suport</ul>
                <ul>News</ul>
                <ul>Refund</ul>
            </li>
            <li>
                <ul>Pricing</ul>
                <ul>Contact</ul>
                <ul>Join</ul>
            </li>
            <p class="w-[200px] h-[25px] mt-[20px] mx-auto">Copyright @ Humans 2021</p>
        </div>
    </nav>
</template>

<style scoped>
nav{
    background-color:  #242c44 ;
}
.register{
    color: #FFF;
}
.icon{
    color: #656565;
}
.options{
    color: #656565;
}
li{
    list-style: none;
    display: inline-block;
    margin-left: 35px;
}
ul{
    font-weight:400;
    font-size: 18px;
    display: block;
    margin-top: 20px;
}
</style>