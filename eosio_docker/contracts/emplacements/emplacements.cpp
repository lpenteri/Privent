#include <string>
#include <eosiolib/eosio.hpp>

using namespace eosio;

class emplacements : public contract
{
  public:
    emplacements(account_name self) :  contract(self)
    {
    }

    void emplacevenue(std::string account, std::string name, std::string type, uint64_t capacity, std::string location , std::string bio , std::string imageName , uint64_t flat_fee , uint64_t hourly_fee , uint64_t per_participant_fee)
    {

    }

  private:
};

EOSIO_ABI(emplacements, (emplacevenue))
