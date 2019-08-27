<template>
    <div class="testb">
        <h3>B组件</h3>
        <ul>
            <li v-for="(v,i) in list" :key="i">{{v}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TestB",
    data(){
        return {
            list:[1,2,3,4,5]
        }
    }
}
</script>

<style scoped>
.testb {
    background: #f60;
}
</style>

