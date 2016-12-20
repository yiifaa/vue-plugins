#### 1. 插件初始化
```javascript
import {validator} from 'plugins'
//  激活插件
Vue.use(validator)
```

#### 2. HTML5 规则验证
默认支持支持内置规则验证，例如pattern、type等
```javascript

```

#### 3. 内置规则验证
支持jquery.validation的规则验证，例如remote等
```javascript
```
##### 3.1 AJAX验证
依赖于remote方式，格式如下：
```javascript
```

#### 4. 自定义规则验证
除了上述规则，还可以自定义规则进行验证

#### 5. 动态规则验证
在实际应用中，元素的验证规则可能会发生变化，例如所属单位为国税，可能还需要验证国税编号等信息
