#include <string>
#include <eosiolib/eosio.hpp>

using namespace eosio;

class emplacements : public contract
{
  public:
    emplacements(account_name self) :  contract(self)
    {
    }

    void emplacevenue(std::string account, std::string name, std::string type, uint64_t capacity, std::string location , std::string bio , std::string imageName)
    {

    }

  private:
};

EOSIO_ABI(emplacements, (emplacevenue))
