<template>
    <div>
        <div>npm install jquery --save</div>
        <div class="body">vue-plugin</div>
    </div>
</template>
<script>
    import $ from 'jquery';
    export default {
        name: 'vue-plugin',
        mounted: function() {
            console.log($('.body').html());
        }
    }
</script>
