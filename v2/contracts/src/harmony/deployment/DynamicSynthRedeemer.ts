// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'DynamicSynthRedeemer';
export const address = '0x772db734795f55f05D6ad9c437E5aEF9FBA135a1';
export const source = 'DynamicSynthRedeemer';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event DiscountRateUpdated(uint256 discountRate)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event RedemptionResumed()',
  'event RedemptionSuspended()',
  'event SynthRedeemed(address synth, address account, uint256 amountOfSynth, uint256 amountInsUSD)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function discountRate() view returns (uint256)',
  'function getDiscountRate() view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function redeem(bytes32 currencyKey)',
  'function redeemAll(bytes32[] currencyKeys)',
  'function redeemPartial(bytes32 currencyKey, uint256 amountOfSynth)',
  'function redemptionActive() view returns (bool)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function resumeRedemption()',
  'function setDiscountRate(uint256 _newRate)',
  'function suspendRedemption()',
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

export interface DynamicSynthRedeemerInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'discountRate()': FunctionFragment;
    'getDiscountRate()': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'redeem(bytes32)': FunctionFragment;
    'redeemAll(bytes32[])': FunctionFragment;
    'redeemPartial(bytes32,uint256)': FunctionFragment;
    'redemptionActive()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'resumeRedemption()': FunctionFragment;
    'setDiscountRate(uint256)': FunctionFragment;
    'suspendRedemption()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'acceptOwnership'
      | 'discountRate'
      | 'getDiscountRate'
      | 'isResolverCached'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'rebuildCache'
      | 'redeem'
      | 'redeemAll'
      | 'redeemPartial'
      | 'redemptionActive'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'resumeRedemption'
      | 'setDiscountRate'
      | 'suspendRedemption'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'discountRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getDiscountRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(functionFragment: 'redeem', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'redeemAll', values: [PromiseOrValue<BytesLike>[]]): string;
  encodeFunctionData(
    functionFragment: 'redeemPartial',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'redemptionActive', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resumeRedemption', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setDiscountRate',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'suspendRedemption', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'discountRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDiscountRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redeemAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redeemPartial', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redemptionActive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resumeRedemption', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDiscountRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'suspendRedemption', data: BytesLike): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'DiscountRateUpdated(uint256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'RedemptionResumed()': EventFragment;
    'RedemptionSuspended()': EventFragment;
    'SynthRedeemed(address,address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DiscountRateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RedemptionResumed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RedemptionSuspended'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SynthRedeemed'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface DiscountRateUpdatedEventObject {
  discountRate: BigNumber;
}
export type DiscountRateUpdatedEvent = TypedEvent<[BigNumber], DiscountRateUpdatedEventObject>;

export type DiscountRateUpdatedEventFilter = TypedEventFilter<DiscountRateUpdatedEvent>;

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

export interface RedemptionResumedEventObject {}
export type RedemptionResumedEvent = TypedEvent<[], RedemptionResumedEventObject>;

export type RedemptionResumedEventFilter = TypedEventFilter<RedemptionResumedEvent>;

export interface RedemptionSuspendedEventObject {}
export type RedemptionSuspendedEvent = TypedEvent<[], RedemptionSuspendedEventObject>;

export type RedemptionSuspendedEventFilter = TypedEventFilter<RedemptionSuspendedEvent>;

export interface SynthRedeemedEventObject {
  synth: string;
  account: string;
  amountOfSynth: BigNumber;
  amountInsUSD: BigNumber;
}
export type SynthRedeemedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  SynthRedeemedEventObject
>;

export type SynthRedeemedEventFilter = TypedEventFilter<SynthRedeemedEvent>;

export interface DynamicSynthRedeemer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DynamicSynthRedeemerInterface;

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

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    discountRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDiscountRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeem(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemAll(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemPartial(
      currencyKey: PromiseOrValue<BytesLike>,
      amountOfSynth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redemptionActive(overrides?: CallOverrides): Promise<[boolean]>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    resumeRedemption(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDiscountRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    suspendRedemption(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  discountRate(overrides?: CallOverrides): Promise<BigNumber>;

  getDiscountRate(overrides?: CallOverrides): Promise<BigNumber>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeem(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemAll(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemPartial(
    currencyKey: PromiseOrValue<BytesLike>,
    amountOfSynth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redemptionActive(overrides?: CallOverrides): Promise<boolean>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  resumeRedemption(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDiscountRate(
    _newRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  suspendRedemption(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    discountRate(overrides?: CallOverrides): Promise<BigNumber>;

    getDiscountRate(overrides?: CallOverrides): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    redeem(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    redeemAll(currencyKeys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;

    redeemPartial(
      currencyKey: PromiseOrValue<BytesLike>,
      amountOfSynth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    redemptionActive(overrides?: CallOverrides): Promise<boolean>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    resumeRedemption(overrides?: CallOverrides): Promise<void>;

    setDiscountRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    suspendRedemption(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'DiscountRateUpdated(uint256)'(discountRate?: null): DiscountRateUpdatedEventFilter;
    DiscountRateUpdated(discountRate?: null): DiscountRateUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'RedemptionResumed()'(): RedemptionResumedEventFilter;
    RedemptionResumed(): RedemptionResumedEventFilter;

    'RedemptionSuspended()'(): RedemptionSuspendedEventFilter;
    RedemptionSuspended(): RedemptionSuspendedEventFilter;

    'SynthRedeemed(address,address,uint256,uint256)'(
      synth?: null,
      account?: null,
      amountOfSynth?: null,
      amountInsUSD?: null
    ): SynthRedeemedEventFilter;
    SynthRedeemed(
      synth?: null,
      account?: null,
      amountOfSynth?: null,
      amountInsUSD?: null
    ): SynthRedeemedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    discountRate(overrides?: CallOverrides): Promise<BigNumber>;

    getDiscountRate(overrides?: CallOverrides): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    redeem(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemAll(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemPartial(
      currencyKey: PromiseOrValue<BytesLike>,
      amountOfSynth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redemptionActive(overrides?: CallOverrides): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    resumeRedemption(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setDiscountRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    suspendRedemption(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    discountRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDiscountRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemAll(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemPartial(
      currencyKey: PromiseOrValue<BytesLike>,
      amountOfSynth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redemptionActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resumeRedemption(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDiscountRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    suspendRedemption(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
