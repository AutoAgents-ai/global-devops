current_dir=$(cd $(dirname $0); pwd)
cd $current_dir
sudo sh ./awslogin.sh
sudo docker stop 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-main
sudo docker pull 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-main
sudo docker run 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-main
