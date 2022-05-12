<template>
    <view class="shop-item">
        <img :src="bigImage"/>
        <div class="item__name">{{name}}</div>
        <div class="item__count">{{count}}</div>
        <div class="item__rmb">{{rmb}}</div>
    </view>
</template>
<script>
export default ({
   props:{
       bigImage:'',
       name:'',
       rmb:'',
       count:''
   }
})
</script>

<style scoped>
.shop-item{
    width: 50%;
    height: 200px;
    float: left;
    box-sizing: border-box;
    padding:10px;
}
.shop-item img{
    width:100%;
    height: 150px;
}
.item__name{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
}
.item__count{
    font-size: 12px;
    color: red;
    float: left;
}
.item__rmb{
    font-size: 12px;
    color:#999;
    float:right;
}
</style>