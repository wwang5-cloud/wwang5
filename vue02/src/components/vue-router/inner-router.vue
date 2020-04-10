<template>
    <div> inner router</div>
</template>
<script>
    export default {
        name: 'inner',
        created: function() {
            console.log(this.$route);
        }
    }
</script>