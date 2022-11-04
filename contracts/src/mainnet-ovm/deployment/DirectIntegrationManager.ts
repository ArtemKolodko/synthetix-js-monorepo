// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'DirectIntegrationManager';
export const address = '0x186c50515e6Ee95cEC381d7f6Fe72C67085dBCb4';
export const source = 'DirectIntegrationManager';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event IntegrationParametersSet(address indexed integration, bytes32 indexed currencyKey, tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay) overrides)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function getExchangeParameters(address integration, bytes32 currencyKey) view returns (tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay) overrides)',
  'function isResolverCached() view returns (bool)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setExchangeParameters(address integration, bytes32[] currencyKeys, tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay) settings)',
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

export declare namespace IDirectIntegrationManager {
  export type ParameterIntegrationSettingsStruct = {
    currencyKey: PromiseOrValue<BytesLike>;
    dexPriceAggregator: PromiseOrValue<string>;
    atomicEquivalentForDexPricing: PromiseOrValue<string>;
    atomicExchangeFeeRate: PromiseOrValue<BigNumberish>;
    atomicTwapWindow: PromiseOrValue<BigNumberish>;
    atomicMaxVolumePerBlock: PromiseOrValue<BigNumberish>;
    atomicVolatilityConsiderationWindow: PromiseOrValue<BigNumberish>;
    atomicVolatilityUpdateThreshold: PromiseOrValue<BigNumberish>;
    exchangeFeeRate: PromiseOrValue<BigNumberish>;
    exchangeMaxDynamicFee: PromiseOrValue<BigNumberish>;
    exchangeDynamicFeeRounds: PromiseOrValue<BigNumberish>;
    exchangeDynamicFeeThreshold: PromiseOrValue<BigNumberish>;
    exchangeDynamicFeeWeightDecay: PromiseOrValue<BigNumberish>;
  };

  export type ParameterIntegrationSettingsStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    currencyKey: string;
    dexPriceAggregator: string;
    atomicEquivalentForDexPricing: string;
    atomicExchangeFeeRate: BigNumber;
    atomicTwapWindow: BigNumber;
    atomicMaxVolumePerBlock: BigNumber;
    atomicVolatilityConsiderationWindow: BigNumber;
    atomicVolatilityUpdateThreshold: BigNumber;
    exchangeFeeRate: BigNumber;
    exchangeMaxDynamicFee: BigNumber;
    exchangeDynamicFeeRounds: BigNumber;
    exchangeDynamicFeeThreshold: BigNumber;
    exchangeDynamicFeeWeightDecay: BigNumber;
  };
}

export interface DirectIntegrationManagerInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'getExchangeParameters(address,bytes32)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'setExchangeParameters(address,bytes32[],(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'getExchangeParameters'
      | 'isResolverCached'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'rebuildCache'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'setExchangeParameters'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getExchangeParameters',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setExchangeParameters',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      IDirectIntegrationManager.ParameterIntegrationSettingsStruct
    ]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getExchangeParameters', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setExchangeParameters', data: BytesLike): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'IntegrationParametersSet(address,bytes32,tuple)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'IntegrationParametersSet'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface IntegrationParametersSetEventObject {
  integration: string;
  currencyKey: string;
  overrides: IDirectIntegrationManager.ParameterIntegrationSettingsStructOutput;
}
export type IntegrationParametersSetEvent = TypedEvent<
  [string, string, IDirectIntegrationManager.ParameterIntegrationSettingsStructOutput],
  IntegrationParametersSetEventObject
>;

export type IntegrationParametersSetEventFilter = TypedEventFilter<IntegrationParametersSetEvent>;

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

export interface DirectIntegrationManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DirectIntegrationManagerInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [IDirectIntegrationManager.ParameterIntegrationSettingsStructOutput] & {
        overrides: IDirectIntegrationManager.ParameterIntegrationSettingsStructOutput;
      }
    >;

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

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    setExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKeys: PromiseOrValue<BytesLike>[],
      settings: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getExchangeParameters(
    integration: PromiseOrValue<string>,
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IDirectIntegrationManager.ParameterIntegrationSettingsStructOutput>;

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

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  setExchangeParameters(
    integration: PromiseOrValue<string>,
    currencyKeys: PromiseOrValue<BytesLike>[],
    settings: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    getExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IDirectIntegrationManager.ParameterIntegrationSettingsStructOutput>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    setExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKeys: PromiseOrValue<BytesLike>[],
      settings: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'IntegrationParametersSet(address,bytes32,tuple)'(
      integration?: PromiseOrValue<string> | null,
      currencyKey?: PromiseOrValue<BytesLike> | null,
      overrides?: null
    ): IntegrationParametersSetEventFilter;
    IntegrationParametersSet(
      integration?: PromiseOrValue<string> | null,
      currencyKey?: PromiseOrValue<BytesLike> | null,
      overrides?: null
    ): IntegrationParametersSetEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    setExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKeys: PromiseOrValue<BytesLike>[],
      settings: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setExchangeParameters(
      integration: PromiseOrValue<string>,
      currencyKeys: PromiseOrValue<BytesLike>[],
      settings: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
