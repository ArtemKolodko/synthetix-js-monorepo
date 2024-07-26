// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'SupplySchedule';
export const address = '0xbD3959ee78B36cD89E5BB5BfCCd535f90447A63a';
export const source = 'SupplySchedule';
export const abi = [
  'constructor(address _owner, uint256 _lastMintEvent, uint256 _currentWeek)',
  'event InflationAmountUpdated(uint256 newInflationAmount)',
  'event MaxInflationAmountUpdated(uint256 newInflationAmount)',
  'event MinterRewardUpdated(uint256 newRewardAmount)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event SupplyMinted(uint256 supplyMinted, uint256 numberOfWeeksIssued, uint256 lastMintEvent, uint256 timestamp)',
  'event SynthetixProxyUpdated(address newAddress)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function INFLATION_START_DATE() view returns (uint256)',
  'function MAX_MINTER_REWARD() view returns (uint256)',
  'function MINT_BUFFER() view returns (uint256)',
  'function MINT_PERIOD_DURATION() view returns (uint256)',
  'function acceptOwnership()',
  'function inflationAmount() view returns (uint256)',
  'function isMintable() view returns (bool)',
  'function lastMintEvent() view returns (uint256)',
  'function maxInflationAmount() view returns (uint256)',
  'function mintableSupply() view returns (uint256)',
  'function minterReward() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function recordMintEvent(uint256 supplyMinted) returns (uint256)',
  'function setInflationAmount(uint256 amount)',
  'function setMaxInflationAmount(uint256 amount)',
  'function setMinterReward(uint256 amount)',
  'function setSynthetixProxy(address _synthetixProxy)',
  'function synthetixProxy() view returns (address)',
  'function weekCounter() view returns (uint256)',
  'function weeksSinceLastIssuance() view returns (uint256)',
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
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface SupplyScheduleInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'INFLATION_START_DATE()': FunctionFragment;
    'MAX_MINTER_REWARD()': FunctionFragment;
    'MINT_BUFFER()': FunctionFragment;
    'MINT_PERIOD_DURATION()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'inflationAmount()': FunctionFragment;
    'isMintable()': FunctionFragment;
    'lastMintEvent()': FunctionFragment;
    'maxInflationAmount()': FunctionFragment;
    'mintableSupply()': FunctionFragment;
    'minterReward()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'recordMintEvent(uint256)': FunctionFragment;
    'setInflationAmount(uint256)': FunctionFragment;
    'setMaxInflationAmount(uint256)': FunctionFragment;
    'setMinterReward(uint256)': FunctionFragment;
    'setSynthetixProxy(address)': FunctionFragment;
    'synthetixProxy()': FunctionFragment;
    'weekCounter()': FunctionFragment;
    'weeksSinceLastIssuance()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'INFLATION_START_DATE'
      | 'MAX_MINTER_REWARD'
      | 'MINT_BUFFER'
      | 'MINT_PERIOD_DURATION'
      | 'acceptOwnership'
      | 'inflationAmount'
      | 'isMintable'
      | 'lastMintEvent'
      | 'maxInflationAmount'
      | 'mintableSupply'
      | 'minterReward'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'recordMintEvent'
      | 'setInflationAmount'
      | 'setMaxInflationAmount'
      | 'setMinterReward'
      | 'setSynthetixProxy'
      | 'synthetixProxy'
      | 'weekCounter'
      | 'weeksSinceLastIssuance'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'INFLATION_START_DATE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_MINTER_REWARD', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MINT_BUFFER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MINT_PERIOD_DURATION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'inflationAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isMintable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastMintEvent', values?: undefined): string;
  encodeFunctionData(functionFragment: 'maxInflationAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mintableSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'minterReward', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'recordMintEvent',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setInflationAmount',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxInflationAmount',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMinterReward',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setSynthetixProxy',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'synthetixProxy', values?: undefined): string;
  encodeFunctionData(functionFragment: 'weekCounter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'weeksSinceLastIssuance', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'INFLATION_START_DATE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_MINTER_REWARD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MINT_BUFFER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MINT_PERIOD_DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'inflationAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isMintable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastMintEvent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxInflationAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintableSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minterReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recordMintEvent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInflationAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxInflationAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinterReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSynthetixProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'synthetixProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'weekCounter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'weeksSinceLastIssuance', data: BytesLike): Result;

  events: {
    'InflationAmountUpdated(uint256)': EventFragment;
    'MaxInflationAmountUpdated(uint256)': EventFragment;
    'MinterRewardUpdated(uint256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'SupplyMinted(uint256,uint256,uint256,uint256)': EventFragment;
    'SynthetixProxyUpdated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'InflationAmountUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MaxInflationAmountUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinterRewardUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SupplyMinted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SynthetixProxyUpdated'): EventFragment;
}

export interface InflationAmountUpdatedEventObject {
  newInflationAmount: BigNumber;
}
export type InflationAmountUpdatedEvent = TypedEvent<
  [BigNumber],
  InflationAmountUpdatedEventObject
>;

export type InflationAmountUpdatedEventFilter = TypedEventFilter<InflationAmountUpdatedEvent>;

export interface MaxInflationAmountUpdatedEventObject {
  newInflationAmount: BigNumber;
}
export type MaxInflationAmountUpdatedEvent = TypedEvent<
  [BigNumber],
  MaxInflationAmountUpdatedEventObject
>;

export type MaxInflationAmountUpdatedEventFilter = TypedEventFilter<MaxInflationAmountUpdatedEvent>;

export interface MinterRewardUpdatedEventObject {
  newRewardAmount: BigNumber;
}
export type MinterRewardUpdatedEvent = TypedEvent<[BigNumber], MinterRewardUpdatedEventObject>;

export type MinterRewardUpdatedEventFilter = TypedEventFilter<MinterRewardUpdatedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface SupplyMintedEventObject {
  supplyMinted: BigNumber;
  numberOfWeeksIssued: BigNumber;
  lastMintEvent: BigNumber;
  timestamp: BigNumber;
}
export type SupplyMintedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  SupplyMintedEventObject
>;

export type SupplyMintedEventFilter = TypedEventFilter<SupplyMintedEvent>;

export interface SynthetixProxyUpdatedEventObject {
  newAddress: string;
}
export type SynthetixProxyUpdatedEvent = TypedEvent<[string], SynthetixProxyUpdatedEventObject>;

export type SynthetixProxyUpdatedEventFilter = TypedEventFilter<SynthetixProxyUpdatedEvent>;

export interface SupplySchedule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SupplyScheduleInterface;

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

    INFLATION_START_DATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_MINTER_REWARD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINT_BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINT_PERIOD_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    inflationAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isMintable(overrides?: CallOverrides): Promise<[boolean]>;

    lastMintEvent(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxInflationAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintableSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    minterReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recordMintEvent(
      supplyMinted: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinterReward(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSynthetixProxy(
      _synthetixProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    synthetixProxy(overrides?: CallOverrides): Promise<[string]>;

    weekCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    weeksSinceLastIssuance(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  INFLATION_START_DATE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_MINTER_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

  MINT_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

  MINT_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  inflationAmount(overrides?: CallOverrides): Promise<BigNumber>;

  isMintable(overrides?: CallOverrides): Promise<boolean>;

  lastMintEvent(overrides?: CallOverrides): Promise<BigNumber>;

  maxInflationAmount(overrides?: CallOverrides): Promise<BigNumber>;

  mintableSupply(overrides?: CallOverrides): Promise<BigNumber>;

  minterReward(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recordMintEvent(
    supplyMinted: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInflationAmount(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxInflationAmount(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinterReward(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSynthetixProxy(
    _synthetixProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  synthetixProxy(overrides?: CallOverrides): Promise<string>;

  weekCounter(overrides?: CallOverrides): Promise<BigNumber>;

  weeksSinceLastIssuance(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    INFLATION_START_DATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MINTER_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    MINT_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    MINT_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    inflationAmount(overrides?: CallOverrides): Promise<BigNumber>;

    isMintable(overrides?: CallOverrides): Promise<boolean>;

    lastMintEvent(overrides?: CallOverrides): Promise<BigNumber>;

    maxInflationAmount(overrides?: CallOverrides): Promise<BigNumber>;

    mintableSupply(overrides?: CallOverrides): Promise<BigNumber>;

    minterReward(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recordMintEvent(
      supplyMinted: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinterReward(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setSynthetixProxy(
      _synthetixProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    synthetixProxy(overrides?: CallOverrides): Promise<string>;

    weekCounter(overrides?: CallOverrides): Promise<BigNumber>;

    weeksSinceLastIssuance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'InflationAmountUpdated(uint256)'(newInflationAmount?: null): InflationAmountUpdatedEventFilter;
    InflationAmountUpdated(newInflationAmount?: null): InflationAmountUpdatedEventFilter;

    'MaxInflationAmountUpdated(uint256)'(
      newInflationAmount?: null
    ): MaxInflationAmountUpdatedEventFilter;
    MaxInflationAmountUpdated(newInflationAmount?: null): MaxInflationAmountUpdatedEventFilter;

    'MinterRewardUpdated(uint256)'(newRewardAmount?: null): MinterRewardUpdatedEventFilter;
    MinterRewardUpdated(newRewardAmount?: null): MinterRewardUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'SupplyMinted(uint256,uint256,uint256,uint256)'(
      supplyMinted?: null,
      numberOfWeeksIssued?: null,
      lastMintEvent?: null,
      timestamp?: null
    ): SupplyMintedEventFilter;
    SupplyMinted(
      supplyMinted?: null,
      numberOfWeeksIssued?: null,
      lastMintEvent?: null,
      timestamp?: null
    ): SupplyMintedEventFilter;

    'SynthetixProxyUpdated(address)'(newAddress?: null): SynthetixProxyUpdatedEventFilter;
    SynthetixProxyUpdated(newAddress?: null): SynthetixProxyUpdatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    INFLATION_START_DATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MINTER_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    MINT_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    MINT_PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    inflationAmount(overrides?: CallOverrides): Promise<BigNumber>;

    isMintable(overrides?: CallOverrides): Promise<BigNumber>;

    lastMintEvent(overrides?: CallOverrides): Promise<BigNumber>;

    maxInflationAmount(overrides?: CallOverrides): Promise<BigNumber>;

    mintableSupply(overrides?: CallOverrides): Promise<BigNumber>;

    minterReward(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recordMintEvent(
      supplyMinted: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinterReward(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSynthetixProxy(
      _synthetixProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    synthetixProxy(overrides?: CallOverrides): Promise<BigNumber>;

    weekCounter(overrides?: CallOverrides): Promise<BigNumber>;

    weeksSinceLastIssuance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INFLATION_START_DATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_MINTER_REWARD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINT_BUFFER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINT_PERIOD_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    inflationAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isMintable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastMintEvent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxInflationAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintableSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minterReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recordMintEvent(
      supplyMinted: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxInflationAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinterReward(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSynthetixProxy(
      _synthetixProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    synthetixProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weekCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weeksSinceLastIssuance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
