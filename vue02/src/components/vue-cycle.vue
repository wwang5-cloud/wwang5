<template>
    <div>
        <div>
            beforeCreate:
            <br/>
            &nbsp;&nbsp;实例组件刚创建,元素dom和数据都还没有初始化,暂时不知道能在这个周期里面进行生命操作
        </div>
        <div>
            created:
            <br/>
            &nbsp;&nbsp;数据data已经初始化完成,方法也已经可以调用,但是DOM未渲染。
            <br/>
            &nbsp;&nbsp;在这个周期里面如果进行请求是可以改变数据
            <br/>
            &nbsp;&nbsp;并渲染,由于DOM未挂载,请求过多或者占用时间太长会导致页面线上空白
        </div>
        <div>
            beforeMount:
            <br/>
            &nbsp;&nbsp;DOM未完成挂载,数据也初始化完成,但是数据的双向绑定还是显示[{}],这是由于Vue采用虚拟DOM。
        </div>
        <div>
            mounted:
            <br/>
            &nbsp;&nbsp;数据和DOM都已完成挂载。在上一个周期占位的数据把值给喧嚷进去。一般请求会放在这个地方,
            <br/>
            &nbsp;&nbsp;因为这边请求改变数据之后刚好能渲染
        </div>
        <div>
            beforeUpdate:
            <br/>
            &nbsp;&nbsp;只要是页面数据改变了都会触发,数据更新之前,页面数据还是原来的数据,当你请求赋值一个数据的时候
            <br/>
            &nbsp;&nbsp;会执行这个周期,如果没有数据改变不执行
        </div>
        <div>
            updated:
            <br/>
            &nbsp;&nbsp;只要时页面数据改变了都回触发,数据更新完毕,页面的数据是更新完成的。
        </div>
        <div>
            beforeDestroy:
            <br/>
            &nbsp;&nbsp;这个周期时在组件销毁之前执行,也就是路由离开时触发
        </div>
        <div>
            destroyed:
             <br/>
            &nbsp;&nbsp;这个周期时在组件销毁之前执行,也就是路由离开时触发
        </div>
        <div>
            图形化界面:
            <br/>
            &nbsp;&nbsp;开始创建 <Icon type="md-arrow-forward" />初始化数据<Icon type="md-arrow-forward" />
            编译模板<Icon type="md-arrow-forward" />挂载Dom<Icon type="md-arrow-forward" />
            渲染<Icon type="md-arrow-forward" />更新<Icon type="md-arrow-forward" />渲染
            <Icon type="md-arrow-forward" />销毁
        </div>
    </div>
    <!-- 
        1.组件创立
        2.销毁
    -->
</template>
<script>
export default {
    name: 'vue-cycle',
    data: function() {
        return {
            beforeCreated: '',
            created: '',
            beforeDestroyed: '',
            destroyed: ''
        }
    },
    beforeCreate: function() {
        console.log('实例刚刚被创建');
    },
    created: function() {
        this.created = '实例被创建后';
    }
}
</script>