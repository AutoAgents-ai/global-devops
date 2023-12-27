current_dir=$(cd $(dirname $0); pwd)
IMAGE_REPOSITORY_HOST=autoagents-registry.cn-beijing.cr.aliyuncs.com
IMAGE_REPOSITORY_URL=autoagents-registry.cn-beijing.cr.aliyuncs.com/agent/mind

sudo cd $current_dir
sudo docker login $IMAGE_REPOSITORY_HOST --username autoagents --password autoagents2023
sudo docker pull $IMAGE_REPOSITORY_URL:mindsynth-nginx
sudo docker pull $IMAGE_REPOSITORY_URL:mindsynth-main
sudo docker compose  rm -f -s
sudo docker compose  up -d