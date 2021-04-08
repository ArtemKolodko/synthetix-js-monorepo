import { useQuery, QueryConfig } from 'react-query';
import { useRecoilValue } from 'recoil';

import snxData from 'synthetix-data';

import QUERY_KEYS from 'constants/queryKeys';

import { isWalletConnectedState, networkState } from 'store/wallet';
import { HistoricalStakingTransaction } from './types';

const useGlobalSynthIssuedQuery = (
	minTimestamp?: number,
	options?: QueryConfig<HistoricalStakingTransaction[]>
) => {
	const isWalletConnected = useRecoilValue(isWalletConnectedState);
	const network = useRecoilValue(networkState);

	return useQuery<HistoricalStakingTransaction[]>(
		QUERY_KEYS.Staking.Issued('', network?.id!),
		async () => {
			const transactions = (await snxData.snx.issued({
				minTimestamp: minTimestamp || undefined,
				max: Infinity,
			})) as HistoricalStakingTransaction[];

			return transactions;
		},
		{
			enabled: snxData && isWalletConnected,
			...options,
		}
	);
};

export default useGlobalSynthIssuedQuery;
