current_dir=$(cd $(dirname $0); pwd)
sudo cd $current_dir
sudo docker compose  rm -f -s
sudo docker compose  up -d