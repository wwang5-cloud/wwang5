<template>
    <div>
        <p>input 元素：</p>
        <Input v-model="message" placeholder="large size" style="width: 300px;" />
        <p>消息是: {{ message }}</p>
            
        <p>textarea 元素：</p>
        <p style="white-space: pre">{{ message2 }}</p>
        <Input type="textarea" v-model="message2" placeholder="large size" style="width: 300px;" />
    </div>
</template>
<script>
export default {
    name: 'vue-form',
    data: function() {
        return {
            message: 'input',
            message2: 'textarea'
        }
    }
}
</script>