#include <vector>
#include <crowdfunding.hpp>

class crowdfunding: public eosio::contract {

public:
    explicit crowdfunding(account_name self):
            contract (self),
            events (self, self),
    {}

    event_index events;
    user_index users;

	void get_balance(account_name owner) {
    	eosio::token t(N(eosio.token));
    	const auto sym_name = eosio::symbol_type(S(4,EOS)).name();
    	const auto my_balance = t.get_balance(N(owner), sym_name );
    	eosio::print("My balance is ", my_balance); 
	}

    /**
     * @brief Check for valid funding
     * @detail Funding is considered valid if the amount is less than hard cap
     * @param fund - the funding made by the investor
     * @param evt - the event on which the funding is being made
     * @return true if funding is valid
     */
    bool is_valid_funding(eosio::asset fund, event event) {
        if(evt.ctt_balance +fnd > evt.hard_cap)
            return 1;
        else
            return 0;
    }

    //Check if the event has started. Returns True if investment is still possible
    bool active(event evt){
       if(event.crowdfunding_end > now())
            return 0;
        else
            return 1;
    }

     ///@abi action
    void setfund(user& contributor, event&  evt, eosio::asset amount) {
        require_auth(contributor.account);
        require_auth(evt.event_id);

        event itr;

        // Check if event exists
        auto itrc = events.find(evt.event_id); //retrieving with primary key

        eosio_assert(itrc != events.end(), "event doesn't exists");

        // Check if this event hasn't ended yet
        eosio_assert(!active(itr), "cannot contribute to event anymore");

        // Check if user makes a valid funding (hard_cap)
        eosio_assert(is_valid_funding(amount, itr), "Not a valid funding!");

        if( get_hard_cap(itr) < get_amount(itr) + amount)
            if(!active(itr))
                if( get_soft_cap(itr)<= (get_amount(itr)+amount)){
                    //eosio::token::transfer{contributor.*ctt_balance, evt.*ctt_balance, amount, "ctt"}; //transfer(from, to, quantity, memo)
                    add_contributor(evt, contributor);
                }
    };

    ///@abi action
    void create(account_name founder, account_name event_id, time start_time, time end_time, eosio::asset goal) {
        require_auth(founder);

        // Check if event already exists
        auto itr = events.find(event_id);
        eosio_assert(itr == events.end(), "event already exists");

        events.emplace(_self, [&](auto &e) {
            e.event_id = event_id;
            e.start_time = start_time;
            e.end_time = end_time;
            e.goal = goal;
            e.founder = founder;
        });
    }
};

EOSIO_ABI(crowdfunding,(setfund)(create))
