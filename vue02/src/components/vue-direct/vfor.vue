<template>
    <div>
        <div v-for="tip in tips">{{tip}}</div>
    </div>
</template>
<script>
    export default {
        name: 'vfor',
        data: function() {
            return {tips: [
                'jack','join','fork'
            ]};
        }
    }
</script>