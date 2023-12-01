current_dir=$(cd $(dirname $0); pwd)
cd $current_dir
sudo docker stop 150128700443.dkr.ecr.us-east-1.amazonaws.com/autoagents:mindsynth-main
