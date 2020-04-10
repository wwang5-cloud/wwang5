<template>
    <div>
       获取路由参数: {{$route.params.id}} <br/>
       参数变化过程: {{parameter}} 到  {{$route.params.id}}
    </div>
</template>
<script>
    export default {
        name: 'dyroute',
        data: function() {
            return {parameter: ''};
        },
        watch: {
            $route: function(to, from) {
                this.parameter = from.params.id;
            }
        },
        created: function() {
            // this.$router.replace('/router/program');
        },
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate............................');
            next(true);
        }
    }
</script>