current_dir=$(cd $(dirname $0); pwd)
cd $current_dir
sudo sh ./awslogin.sh
sudo docker pull 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:nginx-master
sudo docker pull 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:alron-master
sudo docker pull 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:taskrunner-master
sudo docker-compose --env-file "$1.env" rm -f -s
sudo docker-compose --env-file "$1.env" up -d