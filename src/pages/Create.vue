<template>
  <main id="create">
    <header>
      <h1>Create</h1>
      <div class="dots"></div>
    </header>
    <div class="input-group">
      <label for="title">Title:</label>
      <input type="text" name='title' v-model="pool.title">
    </div>
  
    <div class="input-group">
      <label for="identity">Identity:</label>
      <input type="text" name='identity' v-model="pool.identity">
    </div>
    <div class="result">
      {{ pool.title }} {{ pool.identity }} {{ alert.tip }}
    </div>
    <div class="btns">
      <a @click='create' class="btn">Create</a>
    </div>
  </main>
</template>
<script>
export default {
  name: 'create',
  data() {
    return {
      pool: {
        title: '',
        identity: ''
      },
      alert: {
        tip: ''
      }
    }
  },
  methods: {
    create() {
      // 声明一个 Todo 类型
      var ActionItem = AV.Object.extend('ActionItem')
      // 新建一个 Todo 对象
      var actItem = new ActionItem()
      actItem.set('title', this.pool.title)
      actItem.set('identity', this.pool.identity)
      actItem.save().then(function (actItem) {
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + actItem.id)
        msg(`${actItem.id} created`)
      }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message)
        msg(`error ${error.message}`)
      });
    },
    msg(str) {
      this.alert.tip = str
    }
  }
}
</script>

<style>
header{
  background: linear-gradient(90deg,#F359AE,#EF96F9);
  border-radius: .3em .3em 0 0 ;
}
header{
  color: white;
}
header h1{
  font-size: 1rem;
}
.result {
  white-space: pre-wrap;
}

.btn {
  border: thin solid green;
  color: green;
  background: yellow;
  padding: .3em .5em;
}
</style>
