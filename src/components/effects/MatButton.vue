<template>
    <button @click="reppleClick" :class="{active:repple_button.toggle}">
        <slot></slot>
    </button>
</template>

<script>
export default{
    data(){
        return {
            repple_button:{
                animate:false,
                toggle:false
            }
        }
    },
    methods:{
        reppleClick(e){
            this.repple_button.animate=true;
            let button=e.target;
            
        }
    }
}
</script>