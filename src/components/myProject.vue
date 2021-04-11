<!--
 * @Author: your name
 * @Date: 2021-04-09 16:12:29
 * @LastEditTime: 2021-04-11 14:52:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\components\project.vue
-->
<template>
    <div class="wrapper">
        <button @click="run">点击</button>
        <div :class="`item ${newClass}`" ></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newClass:''
        }
    },
    methods:{
        run(){
            this.newClass = 'run'
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper{
    position:relative;
    width:100%;
    height:900px;
}
.item{
    position:absolute;
    top:50%;
    left:50%;
    width:300px;
    height:500px;
    margin-top:-250px;
    margin-left:-150px;
    background-color:purple;
    // transition:transform 1s ease;
    transform:rotate3d(50%,50%,800px,30deg);
    
}
// .run{
//     // transform:rotate3d(50%,50%,800px,30deg);
// }

</style>