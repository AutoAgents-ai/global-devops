current_dir=$(cd $(dirname $0); pwd)
cd $current_dir
sudo docker-compose --env-file "$1.env" rm -f -s