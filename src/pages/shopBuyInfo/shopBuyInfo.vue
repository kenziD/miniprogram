<template>
<view>
    <view  v-for="(item,index) in info" :key = "index">
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="item.thumImage"
            />
    </view>
</view>
</template>
<script>
export default ({
    data() {
        return {
            info:[]
        }
    },
   onLoad(data){
       let _data =  JSON.parse(data.info);
       this.info = _data;
   }
})
</script>
