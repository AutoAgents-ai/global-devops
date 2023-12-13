current_dir=$(cd $(dirname $0); pwd)
cd $current_dir
sudo sh ./awslogin.sh
sudo docker pull 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-nginx
sudo docker stop nginx
sudo docker remove nginx
sudo docker run -p 80:80 -d --name nginx -e SPRING_PROFILES_ACTIVE=test 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-nginx 