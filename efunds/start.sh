current_dir=$(cd $(dirname $0); pwd)
IMAGE_REPOSITORY_HOST=registry.cn-beijing.aliyuncs.com
IMAGE_REPOSITORY_URL=registry.cn-beijing.aliyuncs.com/autoagents/libs

sudo cd $current_dir
sudo docker login $IMAGE_REPOSITORY_HOST --username autoagents --password autoagentslibs123
sudo docker pull $IMAGE_REPOSITORY_URL:mindsynth-nginx-efunds
sudo docker pull $IMAGE_REPOSITORY_URL:mindsynth-main-efunds
sudo docker compose  rm -f -s
sudo docker compose  up -d