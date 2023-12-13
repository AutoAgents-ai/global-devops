current_dir=$(cd $(dirname $0); pwd)
cd $current_dir
sudo sh ./awslogin.sh
sudo docker pull 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-main
sudo docker stop mind
sudo docker remove mind
sudo docker run -p 8008:8008 -d --name mind -e SPRING_PROFILES_ACTIVE=test 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-main 