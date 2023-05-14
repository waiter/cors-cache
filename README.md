## 跨域缓存测试

### hosts修改
```hosts
127.0.0.1 a.waiter.com
127.0.0.1 b.waiter.com
127.0.0.1 c.waiter.com
```

### 启动服务

```
node ./index.js
```

### 复现

浏览器先访问`http://a.waiter.com:3000/`，再访问`http://b.waiter.com:3000/`