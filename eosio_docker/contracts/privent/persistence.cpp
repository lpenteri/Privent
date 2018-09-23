#include <eosiolib/eosio.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/asset.hpp>
#include <string>
#include <vector>


    // @abi table
    struct event {
        account_name event_id;
        uint32_t crowdfunding_start;
        uint32_t crowdfunding_end;
        eosio::asset crowdfunding_goal;
        account_name founder;
        std::vector<account_name> contributors;

        //static event get_event(const uint64_t event_id);

        auto primary_key() const { return event_id; }
        EOSLIB_SERIALIZE(event, (event_id)(crowdfunding_start)(crowdfunding_end)
                                (crowdfunding_goal)(founder)(contributors))
    };
/*
    static event event::get_event(const uint64_t event_id)
    {
        event_index ev_i(_self, _self);
        auto itr = ev_i.find(event_id);
        std::string str("event not found: " + std::to_string(event_id));
        eosio_assert(itr == ev_i.end(), str.c_str());
        return *itr;
    }
    */
