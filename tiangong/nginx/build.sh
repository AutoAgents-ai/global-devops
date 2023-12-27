IMAGE_REPOSITORY_HOST=autoagents-registry.cn-beijing.cr.aliyuncs.com
IMAGE_REPOSITORY_URL=autoagents-registry.cn-beijing.cr.aliyuncs.com/agent/mind
IMAGE_TAG=mindsynth-nginx
git fetch --all
git pull
git add .
git commit -m "frontend"
git push -u origin main
docker login $IMAGE_REPOSITORY_HOST --username autoagents --password autoagents2023
docker build  --platform linux/amd64 -t $IMAGE_REPOSITORY_URL:$IMAGE_TAG .
docker push $IMAGE_REPOSITORY_URL:$IMAGE_TAG