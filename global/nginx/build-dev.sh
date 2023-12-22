IMAGE_REPOSITORY_URL=150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents
IMAGE_TAG=nginx-master-dev
git fetch --all
git pull
git add .
git commit -m "frontend"
git push -u origin main
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $IMAGE_REPOSITORY_URL
docker build  --platform linux/amd64 -t $IMAGE_REPOSITORY_URL:$IMAGE_TAG .
docker push $IMAGE_REPOSITORY_URL:$IMAGE_TAG