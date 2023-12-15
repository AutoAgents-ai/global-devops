IMAGE_REPOSITORY_HOST=registry.cn-beijing.aliyuncs.com
IMAGE_REPOSITORY_URL=registry.cn-beijing.aliyuncs.com/autoagents/libs
IMAGE_TAG=mindsynth-nginx
git fetch --all
git pull
git add .
git commit -m "frontend"
git push -u origin main
docker login $IMAGE_REPOSITORY_HOST --username autoagents --password autoagentslibs123
docker build  --platform linux/amd64 -t $IMAGE_REPOSITORY_URL:$IMAGE_TAG .
docker push $IMAGE_REPOSITORY_URL:$IMAGE_TAG