#include <eosiolib/eosio.hpp>
#include <eosio.token/eosio.token.hpp>
#include <string>
#include <persistence.cpp>

class privent: public eosio::contract {

public:
    explicit privent(account_name self):
            contract (self),
			events_(self, self)
    {}

   // user_index users;
    /**
    * @brief The table definition, used to store existing games and their current state
    */
    typedef eosio::multi_index< N(events), event> events;
	/*
   	struct account {
        asset    balance;
        uint64_t primary_key()const { return balance.symbol.name(); }
     };
*/
	typedef eosio::multi_index<N(accounts), account> accounts; 
    
    /*
	void get_balance(account_name owner) {
    	eosio::token t(N(eosio.token));
    	const auto sym_name = eosio::symbol_type(S(4,PUSD)).name();
    	const auto my_balance = t.get_balance(N(owner), sym_name );
    	eosio::print("My balance is ", my_balance); 
	} 
*/

    ///@abi action
    void test(account_name owner) {
    	eosio::token t(N(eosio.token));
/*    	const auto sym_name = eosio::symbol_type(S(4, "PUSD")).name();
        const auto my_balance = t.get_balance(N(owner), sym_name );
    	eosio::print("My balance is ", my_balance); 

*/	}

    //Check if the event has started. Returns True if investment is still possible
    bool active(event evt){
        if(evt.crowdfunding_end > now())
            return 0;
        else
            return 1;
    }

    ///@abi action
    void start(account_name founder, account_name event_id, uint32_t start_time, 
			   uint32_t end_time, eosio::asset goal) {
        require_auth(founder);
        
        // Check if event already exists
        auto itr = events_.find(event_id);
        eosio_assert(itr == events_.end(), "event already exists");

        events_.emplace(_self, [&](auto &e) {
            e.event_id = event_id;
            e.crowdfunding_start = start_time;
            e.crowdfunding_end = end_time;
            e.crowdfunding_goal = goal;
            e.founder = founder;
        });
    }
	private:
	events events_;
};

EOSIO_ABI(privent, (test)(start))
