current_dir=$(cd $(dirname $0); pwd)
IMAGE_REPOSITORY_HOST=registry.cn-beijing.aliyuncs.com
IMAGE_REPOSITORY_URL=registry.cn-beijing.aliyuncs.com/autoagents/libs

cd $current_dir
docker login $IMAGE_REPOSITORY_HOST --username autoagents --password autoagentslibs123
sudo docker pull $IMAGE_REPOSITORY_URL:mindsynth-nginx
sudo docker pull $IMAGE_REPOSITORY_URL:mindsynth-main
sudo docker-compose --env-file "$1.env" rm -f -s
sudo docker-compose --env-file "$1.env" up -d