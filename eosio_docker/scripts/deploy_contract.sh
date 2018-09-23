#!/usr/bin/env bash
set -o errexit

# set PATH
PATH="$PATH:/opt/eosio/bin"

# change to executable directory
cd "/opt/eosio/bin"

CONTRACTSPATH="$( pwd -P )/contracts"

# make new directory for compiled contract files
mkdir -p ./compiled_contracts
mkdir -p ./compiled_contracts/$1

COMPILEDCONTRACTSPATH="$( pwd -P )/compiled_contracts"

# unlock the wallet, ignore error if already unlocked
if [ ! -z $3 ]; then ./cleos wallet unlock -n $3 --password $4 || true; fi

# compile smart contract to wast and abi files
(
  eosiocpp -o "$COMPILEDCONTRACTSPATH/$1/$1.wast" "$CONTRACTSPATH/$1/$1.cpp" &&
  eosiocpp -g "$COMPILEDCONTRACTSPATH/$1/$1.abi" "$CONTRACTSPATH/$1/$1.cpp"
) &&

# set (deploy) compiled contract to blockchain
cleos set contract $2 "$COMPILEDCONTRACTSPATH/$1/" --permission $2

#cleos wallet import -n $3 --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 || true

# now deploy PUSD token (stable coin)
#cleos set contract eosio.token /opt/eosio/contracts/eosio.token --permission eosio.token
#cleos push action eosio.token create '[ "priventacc", "1000000000.0000 PUSD"]' -p eosio.token@active

