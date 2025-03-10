import { Language } from 'translations/constants';

import localStore from 'utils/localStore';
import { languageStateKey, priceCurrencyStateKey } from 'store/app/constants';

import { CurrencyCategory, NetworkIdByName, Synth } from '../../../packages/contracts-interface/src/types';

export const SYNTH_DECIMALS = 18;
// app defaults
export const DEFAULT_LANGUAGE: Language = localStore.get(languageStateKey) ?? Language.EN;
export const DEFAULT_PRICE_CURRENCY: Synth = localStore.get(priceCurrencyStateKey) ?? {
  name: 'sUSD',
  asset: 'USD',
  sign: '$',
  category: CurrencyCategory.crypto,
  description: '',
};

// network defaults
export const DEFAULT_NETWORK_ID = NetworkIdByName.harmony;

export const DEFAULT_GAS_LIMIT = 500000;
export const DEFAULT_GAS_BUFFER = 15000;

// ui defaults
export const DEFAULT_SEARCH_DEBOUNCE_MS = 300;
export const DEFAULT_REQUEST_REFRESH_INTERVAL = 300000; // 5min
export const DEFAULT_CRYPTO_DECIMALS = 4;
export const DEFAULT_FIAT_DECIMALS = 2;
export const DEFAULT_NUMBER_DECIMALS = 2;
export const DEFAULT_PERCENT_DECIMALS = 2;
