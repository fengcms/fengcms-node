核心        express
用户验证    passport
ORM         Prisma


curl http://0.0.0.0:4888/api/v1/article?love\=1 -X POST -H "Content-Type:application/json" -d '{"title":"comewords","content":"articleContent"}'

curl http://0.0.0.0:4888/api/v1/article/123?love\=1 -X POST

curl http://localhost:4888/api/v1/upload -F "file=@/Users/fungleo/Downloads/WechatIMG27.jpg" -F "file=@/Users/fungleo/Downloads/WechatIMG676.jpg"
curl http://localhost:4888/api/v1/upload -F "file=@/Users/fungleo/Downloads/photo_2024-05-16_16-53-05-1.ico"
curl http://localhost:4888/api/v1/upload -F "file=@/Users/fungleo/Downloads/photo_2024-05-16_16-53-05-1.ico" -F "file=@/Users/fungleo/Downloads/WechatIMG676.jpg"