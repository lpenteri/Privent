#!/usr/bin/env bash
set -o errexit

echo "=== start deploy data ==="

# set PATH
PATH="$PATH:/opt/eosio/bin"

# cd into script's folder
cd "$(dirname "$0")"

echo "=== start create accounts in blockchain ==="

# import bobross account private key and create mock posts under bobross
cleos wallet import -n priventwallet --private-key 5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5

# download jq for json reader, we use jq here for reading the json file ( accounts.json )
mkdir -p ~/bin && curl -sSL -o ~/bin/jq https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 && chmod +x ~/bin/jq && export PATH=$PATH:~/bin

# loop through the array in the json file and run createpost action on smart contract to add mock data


cleos push action preventacc emplaceart '[ "bobross","Nick Papadopoulos" ,"type1" , 300 , "Thessaloniki-Greece" , "This is the description of a singer ....", "/image1.jpg",3000,400 ]' -p bobross@active
cleos push action preventacc emplaceart '[ "janesmith","Rita Morty" ,"type2" , 200 , "Thessaloniki-Greece" , "This is the description of a singer ....", "/image2.jpg",2500,300]' -p bobross@active
cleos push action preventacc emplaceart '[ "sampeters","Bill Evans" ,"type3" , 17 , "Thessaloniki-Greece" , "This is the description of a singer ....", "/image3.jpg",400,50]' -p bobross@active
cleos push action preventacc emplaceart '[ "willthompson","Mary Trazy" ,"type4" , 120 , "Thessaloniki-Greece" , "This is the description of a singer ....", "/image4.jpg",1800,300]' -p bobross@active
cleos push action preventacc emplaceart '[ "sarabrown","Helen Antonopouloy" ,"type5" , 230 , "Thessaloniki-Greece" , "This is the description of a singer ....", "/image6.jpg",3500 , 600]' -p bobross@active
cleos push action preventacc emplaceart '[ "lisawalters","Dany Rose" ,"type6" , 3000 , "Thessaloniki-Greece" , "This is the description of a singer ....", "/image5.jpg" , 35000 , 5000]' -p bobross@active
