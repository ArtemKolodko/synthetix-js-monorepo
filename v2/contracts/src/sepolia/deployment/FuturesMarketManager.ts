// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'FuturesMarketManager';
export const address = '0xA73A7B754Ec870b3738D0654cA75b7d0eEbdb460';
export const source = 'EmptyFuturesMarketManager';
export const abi = [
  'function CONTRACT_NAME() view returns (bytes32)',
  'function addEndorsedAddresses(address[] addresses)',
  'function allEndorsedAddresses() view returns (address[])',
  'function allMarkets() view returns (address[])',
  'function allMarkets(bool proxiedMarkets) view returns (address[])',
  'function isEndorsed(address account) view returns (bool)',
  'function marketForKey(bytes32 marketKey) view returns (address)',
  'function markets(uint256 index, uint256 pageSize, bool proxiedMarkets) view returns (address[])',
  'function markets(uint256 index, uint256 pageSize) view returns (address[])',
  'function marketsForKeys(bytes32[] marketKeys) view returns (address[])',
  'function numMarkets() view returns (uint256)',
  'function numMarkets(bool proxiedMarkets) view returns (uint256)',
  'function removeEndorsedAddresses(address[] addresses)',
  'function totalDebt() view returns (uint256 debt, bool isInvalid)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface FuturesMarketManagerInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'addEndorsedAddresses(address[])': FunctionFragment;
    'allEndorsedAddresses()': FunctionFragment;
    'allMarkets()': FunctionFragment;
    'allMarkets(bool)': FunctionFragment;
    'isEndorsed(address)': FunctionFragment;
    'marketForKey(bytes32)': FunctionFragment;
    'markets(uint256,uint256,bool)': FunctionFragment;
    'markets(uint256,uint256)': FunctionFragment;
    'marketsForKeys(bytes32[])': FunctionFragment;
    'numMarkets()': FunctionFragment;
    'numMarkets(bool)': FunctionFragment;
    'removeEndorsedAddresses(address[])': FunctionFragment;
    'totalDebt()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'addEndorsedAddresses'
      | 'allEndorsedAddresses'
      | 'allMarkets()'
      | 'allMarkets(bool)'
      | 'isEndorsed'
      | 'marketForKey'
      | 'markets(uint256,uint256,bool)'
      | 'markets(uint256,uint256)'
      | 'marketsForKeys'
      | 'numMarkets()'
      | 'numMarkets(bool)'
      | 'removeEndorsedAddresses'
      | 'totalDebt'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addEndorsedAddresses',
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(functionFragment: 'allEndorsedAddresses', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allMarkets()', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'allMarkets(bool)',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: 'isEndorsed', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'marketForKey', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'markets(uint256,uint256,bool)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'markets(uint256,uint256)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'marketsForKeys',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: 'numMarkets()', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'numMarkets(bool)',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeEndorsedAddresses',
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(functionFragment: 'totalDebt', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addEndorsedAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allEndorsedAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allMarkets()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allMarkets(bool)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isEndorsed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketForKey', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'markets(uint256,uint256,bool)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'markets(uint256,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketsForKeys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'numMarkets()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'numMarkets(bool)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeEndorsedAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalDebt', data: BytesLike): Result;

  events: {};
}

export interface FuturesMarketManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FuturesMarketManagerInterface;

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
    CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;

    addEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allEndorsedAddresses(overrides?: CallOverrides): Promise<[string[]]>;

    'allMarkets()'(overrides?: CallOverrides): Promise<[string[]]>;

    'allMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    isEndorsed(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    marketForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    'markets(uint256,uint256,bool)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    'markets(uint256,uint256)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    marketsForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    'numMarkets()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    'numMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { debt: BigNumber; isInvalid: boolean }>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  addEndorsedAddresses(
    addresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allEndorsedAddresses(overrides?: CallOverrides): Promise<string[]>;

  'allMarkets()'(overrides?: CallOverrides): Promise<string[]>;

  'allMarkets(bool)'(
    proxiedMarkets: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isEndorsed(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  marketForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  'markets(uint256,uint256,bool)'(
    index: PromiseOrValue<BigNumberish>,
    pageSize: PromiseOrValue<BigNumberish>,
    proxiedMarkets: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  'markets(uint256,uint256)'(
    index: PromiseOrValue<BigNumberish>,
    pageSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  marketsForKeys(
    marketKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  'numMarkets()'(overrides?: CallOverrides): Promise<BigNumber>;

  'numMarkets(bool)'(
    proxiedMarkets: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeEndorsedAddresses(
    addresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalDebt(
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { debt: BigNumber; isInvalid: boolean }>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    addEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    allEndorsedAddresses(overrides?: CallOverrides): Promise<string[]>;

    'allMarkets()'(overrides?: CallOverrides): Promise<string[]>;

    'allMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isEndorsed(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    marketForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    'markets(uint256,uint256,bool)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    'markets(uint256,uint256)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    marketsForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    'numMarkets()'(overrides?: CallOverrides): Promise<BigNumber>;

    'numMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    totalDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { debt: BigNumber; isInvalid: boolean }>;
  };

  filters: {};

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    addEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allEndorsedAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    'allMarkets()'(overrides?: CallOverrides): Promise<BigNumber>;

    'allMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isEndorsed(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    marketForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'markets(uint256,uint256,bool)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'markets(uint256,uint256)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketsForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'numMarkets()'(overrides?: CallOverrides): Promise<BigNumber>;

    'numMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allEndorsedAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'allMarkets()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'allMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEndorsed(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'markets(uint256,uint256,bool)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'markets(uint256,uint256)'(
      index: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketsForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'numMarkets()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'numMarkets(bool)'(
      proxiedMarkets: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeEndorsedAddresses(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
