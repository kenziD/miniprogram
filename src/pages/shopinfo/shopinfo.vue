<template>
    <view>
        <swiper class="swiper"  :autoplay="true">
                <swiper-item v-for="item,index in info.bigImage" :key="index">
                    <img :src="item">
                </swiper-item>
            </swiper>
            <van-action-bar>
                <van-action-bar-icon icon="chat-o" text="客服" />
                <van-action-bar-icon icon="cart-o" text="购物车" :info="shopCarLen" />
                <van-action-bar-button 
                    color="#be99ff" 
                    type="warning" 
                    text="加入购物车" 
                    @click="addGoods"/>
                <van-action-bar-button color="#7232dd" type="danger" text="立即购买" 
                @click="buy"/>
            </van-action-bar>
    </view>
</template>
<script>
import {get} from '../../utils/http'

export default ({
    data() {
        return {
            id:'',
            info:{},
            shopCarLen:0
        }
    },
    onLoad(e){
        debugger
        this.getShopInfo(e.id || '1');
        this.id = e.id;
        this.getGoods();
    },
    methods: {
        async getShopInfo(id){
            let res = await get('/getShopInfo',{id});
            if(res.statusCode!==200){
                return;
            }
            this.info = Object.assign({},res.data);
        },
        async addGoods(id){
            debugger
            let res = await get('/setShopLength',{id:this.id});
            if(res.statusCode!==200){
                return;
            }
            this.shopCarLen++;
        },
        async getGoods(){
            debugger
            let res = await get('/getShopLength');
            if(res.statusCode!==200){
                return;
            }
            this.shopCarLen = res.data;
        },
        async buy(){
            let res = await get('/getBuyinfo');
            if(res.statusCode!==200){
                return;
            }
            uni.navigateTo({url:`../../pages/shopBuyInfo/shopBuyInfo?info=${JSON.stringify(res.data)}`})
        }
    },
})
</script>
<style>
.swiper{
    width: 100%;
    height: 300px;
}
</style>