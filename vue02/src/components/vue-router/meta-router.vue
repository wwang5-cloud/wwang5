<template>
    <div> {{$route.meta.requiresAuth}}</div>
</template>
<script>
    export default {
        name: 'meta',
        created: function() {
            console.log(this.$route.meta);
        }
    }
</script>