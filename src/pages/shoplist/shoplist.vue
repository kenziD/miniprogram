<template>
    <view>
        test233456
        <item v-for="item in list" :key="item.Id"
        :bigImage="item.thumImage"
        :name="item.name"
        :count="item.count"
        :rmb="item.rmb"
        @click.native="onClick(item.Id)"></item>
    </view>
</template>
<script>
import {get} from '../../utils/http'
import item from './components/item/item.vue'

export default ({
    data() {
        return {
            list:[]
        }
    },
    components:{item},
    onLoad(){
        debugger
        this.getShopList();
    },
    methods: {
        async getShopList(){
            let res = await get('/shoplist');
            this.list = res.data;
            console.log("res",res)
        },
        onClick(id){
            uni.navigateTo({url:`../../pages/shopinfo/shopinfo?id=${id}`})
        }
    },
})
</script>
