核心        express
用户验证    passport
ORM         Prisma


```
curl http://0.0.0.0:4888/api/v1/article?love\=1 -X POST -H "Content-Type:application/json" -d '{"title":"comewords","content":"articleContent"}'

curl http://0.0.0.0:4888/api/v1/article/123?love\=1 -X POST

curl http://localhost:4888/api/v1/upload -F "file=@/Users/fungleo/Downloads/WechatIMG27.jpg" -F "file=@/Users/fungleo/Downloads/WechatIMG676.jpg"
curl http://localhost:4888/api/v1/upload -F "file=@/Users/fungleo/Downloads/photo_2024-05-16_16-53-05-1.ico"
curl http://localhost:4888/api/v1/upload -F "file=@/Users/fungleo/Downloads/photo_2024-05-16_16-53-05-1.ico" -F "file=@/Users/fungleo/Downloads/WechatIMG676.jpg"

curl http://0.0.0.0:4888/api/v1/channel -X POST -H "Content-Type:application/json" -d '{"pid":0,"name":"test channel"}'
curl http://0.0.0.0:4888/api/v1/channel -X POST -H "Content-Type:application/json" -d '{"pid":0}'

curl http://0.0.0.0:4888/api/v1/user -X POST -H "Content-Type:application/json" -d '{"name":"FungLeo", "account": "fungleo", "password": "123456"}'
curl http://0.0.0.0:4888/api/v1/article -X POST -H "Content-Type:application/json" -d '{"title":"text article title", "content": "test article content", "user_id": 1, "channel_id": 1}'

curl http://0.0.0.0:4888/api/v1/channel/500 -X DELETE

curl http://0.0.0.0:4888/api/v1/channel/122 -X PUT -H "Content-Type:application/json" -d '{"name":"test channel2"}'

curl http://0.0.0.0:4888/api/v1/channel\?page\=0\&pagesize\=2\&pid\=0\&sort\=-id -s | jq

curl http://0.0.0.0:4888/api/v1/channel\?page\=0\&pagesize\=2\&name-like\=aaa&pid-lt\=0&pid-gt\=0\&sort\=-id


curl http://0.0.0.0:4888/api/v1/Author/batch -X PUT -H "Content-Type:application/json" -d '[{"id": 1,"name":"fungleo1"},{"id": 2,"name":"fungleo2"},{"id": 3,"name":"fungleo3"}]'

curl http://0.0.0.0:4888/api/v1/Author/batch -X PUT -H "Content-Type:application/json" -d '[{"id": 1,"name":"fungleo4"},{"id": 2,"name":"fungleo5"},{"id": 3,"name":"fungleo6"}]'

curl http://0.0.0.0:4888/api/v1/Author/first -X PUT -H "Content-Type:application/json" -d '{"name":"fungleo","mark":"articleContent222","mobile": "13311122235"}'
curl http://0.0.0.0:4888/api/v1/Author/batch -X PUT -H "Content-Type:application/json" -d '[{"name":"fungleo4"},{"id": 2,"name":"fungleo5"},{"id": 3,"name":"fungleo6"}]'

curl http://0.0.0.0:4888/api/v1/Author -X POST -H "Content-Type:application/json" -d '[{"name":"fungleo","mark":"articleContent","mobile": "13311122233"},{"name":"fungleo","mark":"articleContent","mobile": "13311122233"},{"id": 1, "name":"fungleo","mark":"articleContent","mobile": "13311122233"}]'

curl http://0.0.0.0:4888/api/v1/Author -X POST -H "Content-Type:application/json" -d '[{"name":"fungleo","mark":"articleContent","mobile": "13311122233"},{"name":"fungleo","mark":"articleContent","mobile": "13311122233"},{"name":"fungleo","mark":"articleContent","mobile": "13311122233"}]'

curl http://0.0.0.0:4888/api/v1/Author/1,2,3,4,5 -X DELETE

curl http://0.0.0.0:4888/api/v1/Author\?pageSize\=3\&page\=1\&mobile\=13311122233
```



Object.keys(enums).forEach(key => {
  console.log(enums[key])
})

在上面这段代码中，enums是一个对象， ts 检测 key 是一个 string，所以会提示 enums[key] 这个方法是有错的。我应该如何改造这个代码，让 ts 不报错。


我有一个数组，如下：
[
  { filedLength: 2, typeLength: 3 },
  { filedLength: 5, typeLength: 6 },
  { filedLength: 10, typeLength: 3 },
  { filedLength: 11, typeLength: 6 },
  { filedLength: 4, typeLength: 6 }
]

我想分别求出 filedLength 的最大的数字和 typeLength 最大的数字是什么，给我一个 js 编写的代码

我有一个字符串为 'abcd', 还有一个字符串为 '12345678'， 我想将这两个字符段组合成 'abcd5678'，用 js 帮我写一个函数

我有一个对象， {BookList: 1} ，但是我只有 'booklist' 这个字符串，我如何读取到对象中的 BookList

我在项目根目录创建了文件 global.d.ts，并输入了以下代码：

// global.d.ts
declare global {
  interface Global {
    models: { [key: string]: any };
  }
}

export {} // 确保这个文件被当作一个模块来处理

我在 tsconfig.json 文件中加入了下面的代码：

"include": ["src/**/*.ts", "global.d.ts"]

并且已经重启了 vscode 编辑器。

但是，我在业务代码中，使用 global.models 来读取，依然提示：元素隐式具有 "any" 类型，因为类型“typeof globalThis”没有索引签名。

请问我是哪里做错了，应该怎么修改？
