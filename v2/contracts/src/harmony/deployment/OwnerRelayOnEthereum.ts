// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'OwnerRelayOnEthereum';
export const address = '0x130F1EAB180ea48EbFBDe3179038D32134Cc107A';
export const source = 'OwnerRelayOnEthereum';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event RelayBatchInitiated(address[] targets, bytes[] payloads)',
  'event RelayInitiated(address target, bytes payload)',
  'function acceptOwnership()',
  'function initiateRelay(address target, bytes payload, uint32 crossDomainGasLimit)',
  'function initiateRelayBatch(address[] targets, bytes[] payloads, uint32 crossDomainGasLimit)',
  'function isResolverCached() view returns (bool)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
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

export interface OwnerRelayOnEthereumInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'initiateRelay(address,bytes,uint32)': FunctionFragment;
    'initiateRelayBatch(address[],bytes[],uint32)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'initiateRelay'
      | 'initiateRelayBatch'
      | 'isResolverCached'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'rebuildCache'
      | 'resolver'
      | 'resolverAddressesRequired'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initiateRelay',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initiateRelayBatch',
    values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>]
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

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initiateRelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initiateRelayBatch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'RelayBatchInitiated(address[],bytes[])': EventFragment;
    'RelayInitiated(address,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RelayBatchInitiated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RelayInitiated'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

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

export interface RelayBatchInitiatedEventObject {
  targets: string[];
  payloads: string[];
}
export type RelayBatchInitiatedEvent = TypedEvent<
  [string[], string[]],
  RelayBatchInitiatedEventObject
>;

export type RelayBatchInitiatedEventFilter = TypedEventFilter<RelayBatchInitiatedEvent>;

export interface RelayInitiatedEventObject {
  target: string;
  payload: string;
}
export type RelayInitiatedEvent = TypedEvent<[string, string], RelayInitiatedEventObject>;

export type RelayInitiatedEventFilter = TypedEventFilter<RelayInitiatedEvent>;

export interface OwnerRelayOnEthereum extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnerRelayOnEthereumInterface;

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

    initiateRelay(
      target: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiateRelayBatch(
      targets: PromiseOrValue<string>[],
      payloads: PromiseOrValue<BytesLike>[],
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateRelay(
    target: PromiseOrValue<string>,
    payload: PromiseOrValue<BytesLike>,
    crossDomainGasLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateRelayBatch(
    targets: PromiseOrValue<string>[],
    payloads: PromiseOrValue<BytesLike>[],
    crossDomainGasLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    initiateRelay(
      target: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateRelayBatch(
      targets: PromiseOrValue<string>[],
      payloads: PromiseOrValue<BytesLike>[],
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'RelayBatchInitiated(address[],bytes[])'(
      targets?: null,
      payloads?: null
    ): RelayBatchInitiatedEventFilter;
    RelayBatchInitiated(targets?: null, payloads?: null): RelayBatchInitiatedEventFilter;

    'RelayInitiated(address,bytes)'(target?: null, payload?: null): RelayInitiatedEventFilter;
    RelayInitiated(target?: null, payload?: null): RelayInitiatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    initiateRelay(
      target: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiateRelayBatch(
      targets: PromiseOrValue<string>[],
      payloads: PromiseOrValue<BytesLike>[],
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateRelay(
      target: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateRelayBatch(
      targets: PromiseOrValue<string>[],
      payloads: PromiseOrValue<BytesLike>[],
      crossDomainGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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
  };
}
