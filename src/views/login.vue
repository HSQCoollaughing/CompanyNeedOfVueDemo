<template>
    <div class="change" >
        <div style="width:100%;height:150px;"></div>
        <div style="margin-top:20px">
        <van-row type="flex" justify="center">
            <van-col span="20">
                <van-cell-group style="border-radius:10px;">
                    <van-field 
                        v-model="username"
                        required 
                        clearable
                        label="用户名"
                        icon="question"
                        placeholder="请输入用户名"
                        
                    />

                    <van-field 
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required 
                        v-on:keyup.13="handleLogin"
                    />    
                </van-cell-group>
            </van-col>
        </van-row>
        </div>
        <div style="margin-top:180px">
        <van-row type="flex" justify="center">
            <van-col span="18">
                <van-button type="primary" size="large" @click="handleLogin">确定</van-button>
            </van-col>
        </van-row>
        </div>
         
    </div>
</template>

<script>
    
    import { mapState } from 'vuex';
    export default{
        data(){
            return{
                password:'',
                username:'',
            }
        },
        computed:{
            ...mapState({
                isAuthentication:state=>state.isAuthentication,
            })
        },
        methods:{
            handleLogin(){
                if(!this.username || !this.password){
                    this.$toast({
                        message:'请将信息填写完整'
                    });
                }else{
                    this.$store.dispatch('login',{
                        password:this.password,
                        username:this.username,
                    });
                    this.$router.push({name:'home'})
                }   
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../styles/color.less";
    .change{
        width:100%;
        height:100%;
        z-index:2;
        position:absolute;
        top:0;
        bottom:0;
    }
    
</style>