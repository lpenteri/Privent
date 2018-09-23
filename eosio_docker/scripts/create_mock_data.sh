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


cleos push action preventacc emplacevenue '[ "bobross","Venue1" ,"type1" , 300 , "Ydras 4 Thessaloniki-Greece" , "This is the description of a venue ....", "image1" ]' -p bobross@active
cleos push action preventacc emplacevenue '[ "janesmith","Venue2" ,"type2" , 200 , "Platonos 4 Thessaloniki-Greece" , "This is the description of a venue ....", "image2"]' -p bobross@active
cleos push action preventacc emplacevenue '[ "sampeters","Venue3" ,"type3" , 17 , "Dimitriou 17 Thessaloniki-Greece" , "This is the description of a venue ....", "image3"]' -p bobross@active
cleos push action preventacc emplacevenue '[ "willthompson","Venue4" ,"type4" , 120 , "Arxelaou 1 Thessaloniki-Greece" , "This is the description of a venue ....", "image4"]' -p bobross@active
cleos push action preventacc emplacevenue '[ "sarabrown","Venue5" ,"type5" , 230 , "Frinis 8 Thessaloniki-Greece" , "This is the description of a venue ....", "image5"]' -p bobross@active
cleos push action preventacc emplacevenue '[ "lisawalters","Venue6" ,"type6" , 3000 , "Theodorou 20 Thessaloniki-Greece" , "This is the description of a venue ....", "image6"]' -p bobross@active
