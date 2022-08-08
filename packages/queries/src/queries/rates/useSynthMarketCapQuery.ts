import { useQuery, UseQueryOptions } from 'react-query';

import Wei, { wei } from '@synthetixio/wei';

import { CurrencyKey } from '@synthetixio/contracts-interface';
import { QueryContext } from '../../context';
import { synthToContractName } from '../../currency';

const useSynthMarketCapQuery = (
  ctx: QueryContext,
  currencyKey: CurrencyKey | null,
  options?: UseQueryOptions<Wei>
) => {
  return useQuery<Wei>(
    ['rates', 'marketCap', ctx.networkId, currencyKey],
    async () => {
      return wei(await ctx.snxjs!.contracts[synthToContractName(currencyKey!)].totalSupply());
    },
    {
      enabled: !!ctx.snxjs && currencyKey != null,
      ...options,
    }
  );
};

export default useSynthMarketCapQuery;
