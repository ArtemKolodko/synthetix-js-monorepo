// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'SystemSettingsLib';
export const address = '0x521539d28629fF6117619199bff8E5740580c76b';
export const source = 'SystemSettingsLib';
export const abi = [
  'function MAX_ATOMIC_TWAP_WINDOW() view returns (uint256)',
  'function MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW() view returns (uint256)',
  'function MAX_ATOMIC_VOLUME_PER_BLOCK() view returns (uint256)',
  'function MAX_CROSS_DOMAIN_GAS_LIMIT() view returns (uint256)',
  'function MAX_EXCHANGE_FEE_RATE() view returns (uint256)',
  'function MAX_FEE_PERIOD_DURATION() view returns (uint256)',
  'function MAX_ISSUANCE_RATIO() view returns (uint256)',
  'function MAX_LIQUIDATION_DELAY() view returns (uint256)',
  'function MAX_LIQUIDATION_PENALTY() view returns (uint256)',
  'function MAX_LIQUIDATION_RATIO() view returns (uint256)',
  'function MAX_MINIMUM_STAKE_TIME() view returns (uint256)',
  'function MAX_TARGET_THRESHOLD() view returns (uint256)',
  'function MAX_WRAPPER_BURN_FEE_RATE() view returns (int256)',
  'function MAX_WRAPPER_MINT_FEE_RATE() view returns (int256)',
  'function MIN_ATOMIC_TWAP_WINDOW() view returns (uint256)',
  'function MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW() view returns (uint256)',
  'function MIN_CROSS_DOMAIN_GAS_LIMIT() view returns (uint256)',
  'function MIN_FEE_PERIOD_DURATION() view returns (uint256)',
  'function MIN_LIQUIDATION_DELAY() view returns (uint256)',
  'function RATIO_FROM_TARGET_BUFFER() view returns (uint256)',
  'function SETTINGS_CONTRACT_NAME() view returns (bytes32)',
  'function contractName() view returns (bytes32)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface SystemSettingsLibInterface extends utils.Interface {
  functions: {
    'MAX_ATOMIC_TWAP_WINDOW()': FunctionFragment;
    'MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW()': FunctionFragment;
    'MAX_ATOMIC_VOLUME_PER_BLOCK()': FunctionFragment;
    'MAX_CROSS_DOMAIN_GAS_LIMIT()': FunctionFragment;
    'MAX_EXCHANGE_FEE_RATE()': FunctionFragment;
    'MAX_FEE_PERIOD_DURATION()': FunctionFragment;
    'MAX_ISSUANCE_RATIO()': FunctionFragment;
    'MAX_LIQUIDATION_DELAY()': FunctionFragment;
    'MAX_LIQUIDATION_PENALTY()': FunctionFragment;
    'MAX_LIQUIDATION_RATIO()': FunctionFragment;
    'MAX_MINIMUM_STAKE_TIME()': FunctionFragment;
    'MAX_TARGET_THRESHOLD()': FunctionFragment;
    'MAX_WRAPPER_BURN_FEE_RATE()': FunctionFragment;
    'MAX_WRAPPER_MINT_FEE_RATE()': FunctionFragment;
    'MIN_ATOMIC_TWAP_WINDOW()': FunctionFragment;
    'MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW()': FunctionFragment;
    'MIN_CROSS_DOMAIN_GAS_LIMIT()': FunctionFragment;
    'MIN_FEE_PERIOD_DURATION()': FunctionFragment;
    'MIN_LIQUIDATION_DELAY()': FunctionFragment;
    'RATIO_FROM_TARGET_BUFFER()': FunctionFragment;
    'SETTINGS_CONTRACT_NAME()': FunctionFragment;
    'contractName()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAX_ATOMIC_TWAP_WINDOW'
      | 'MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW'
      | 'MAX_ATOMIC_VOLUME_PER_BLOCK'
      | 'MAX_CROSS_DOMAIN_GAS_LIMIT'
      | 'MAX_EXCHANGE_FEE_RATE'
      | 'MAX_FEE_PERIOD_DURATION'
      | 'MAX_ISSUANCE_RATIO'
      | 'MAX_LIQUIDATION_DELAY'
      | 'MAX_LIQUIDATION_PENALTY'
      | 'MAX_LIQUIDATION_RATIO'
      | 'MAX_MINIMUM_STAKE_TIME'
      | 'MAX_TARGET_THRESHOLD'
      | 'MAX_WRAPPER_BURN_FEE_RATE'
      | 'MAX_WRAPPER_MINT_FEE_RATE'
      | 'MIN_ATOMIC_TWAP_WINDOW'
      | 'MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW'
      | 'MIN_CROSS_DOMAIN_GAS_LIMIT'
      | 'MIN_FEE_PERIOD_DURATION'
      | 'MIN_LIQUIDATION_DELAY'
      | 'RATIO_FROM_TARGET_BUFFER'
      | 'SETTINGS_CONTRACT_NAME'
      | 'contractName'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MAX_ATOMIC_TWAP_WINDOW', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'MAX_ATOMIC_VOLUME_PER_BLOCK', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_CROSS_DOMAIN_GAS_LIMIT', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_EXCHANGE_FEE_RATE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_FEE_PERIOD_DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_ISSUANCE_RATIO', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_LIQUIDATION_DELAY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_LIQUIDATION_PENALTY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_LIQUIDATION_RATIO', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_MINIMUM_STAKE_TIME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_TARGET_THRESHOLD', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_WRAPPER_BURN_FEE_RATE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_WRAPPER_MINT_FEE_RATE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MIN_ATOMIC_TWAP_WINDOW', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'MIN_CROSS_DOMAIN_GAS_LIMIT', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MIN_FEE_PERIOD_DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MIN_LIQUIDATION_DELAY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'RATIO_FROM_TARGET_BUFFER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SETTINGS_CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'contractName', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'MAX_ATOMIC_TWAP_WINDOW', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'MAX_ATOMIC_VOLUME_PER_BLOCK', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_CROSS_DOMAIN_GAS_LIMIT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_EXCHANGE_FEE_RATE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_FEE_PERIOD_DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_ISSUANCE_RATIO', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_LIQUIDATION_DELAY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_LIQUIDATION_PENALTY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_LIQUIDATION_RATIO', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_MINIMUM_STAKE_TIME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_TARGET_THRESHOLD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_WRAPPER_BURN_FEE_RATE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_WRAPPER_MINT_FEE_RATE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MIN_ATOMIC_TWAP_WINDOW', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'MIN_CROSS_DOMAIN_GAS_LIMIT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MIN_FEE_PERIOD_DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MIN_LIQUIDATION_DELAY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'RATIO_FROM_TARGET_BUFFER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SETTINGS_CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'contractName', data: BytesLike): Result;

  events: {};
}

export interface SystemSettingsLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SystemSettingsLibInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_ATOMIC_VOLUME_PER_BLOCK(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_EXCHANGE_FEE_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_ISSUANCE_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_LIQUIDATION_PENALTY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_LIQUIDATION_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_MINIMUM_STAKE_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_TARGET_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WRAPPER_BURN_FEE_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WRAPPER_MINT_FEE_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    RATIO_FROM_TARGET_BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;

    SETTINGS_CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;

    contractName(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_ATOMIC_VOLUME_PER_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_EXCHANGE_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_ISSUANCE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_LIQUIDATION_PENALTY(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_LIQUIDATION_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_MINIMUM_STAKE_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_TARGET_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WRAPPER_BURN_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WRAPPER_MINT_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  RATIO_FROM_TARGET_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

  SETTINGS_CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  contractName(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ATOMIC_VOLUME_PER_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_EXCHANGE_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ISSUANCE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LIQUIDATION_PENALTY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LIQUIDATION_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MINIMUM_STAKE_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TARGET_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WRAPPER_BURN_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WRAPPER_MINT_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    RATIO_FROM_TARGET_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    SETTINGS_CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    contractName(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    MAX_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ATOMIC_VOLUME_PER_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_EXCHANGE_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_ISSUANCE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LIQUIDATION_PENALTY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LIQUIDATION_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MINIMUM_STAKE_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TARGET_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WRAPPER_BURN_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WRAPPER_MINT_FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    RATIO_FROM_TARGET_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    SETTINGS_CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    contractName(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_ATOMIC_VOLUME_PER_BLOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_EXCHANGE_FEE_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_ISSUANCE_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_LIQUIDATION_PENALTY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_LIQUIDATION_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_MINIMUM_STAKE_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_TARGET_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WRAPPER_BURN_FEE_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WRAPPER_MINT_FEE_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_ATOMIC_TWAP_WINDOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_CROSS_DOMAIN_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_FEE_PERIOD_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_LIQUIDATION_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RATIO_FROM_TARGET_BUFFER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SETTINGS_CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractName(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
