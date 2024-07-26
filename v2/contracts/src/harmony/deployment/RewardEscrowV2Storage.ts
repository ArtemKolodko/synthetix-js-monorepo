// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'RewardEscrowV2Storage';
export const address = '0x39B5cfeDd40dA6EaE4422763e407cA77EF81209D';
export const source = 'RewardEscrowV2Storage';
export const abi = [
  'constructor(address _owner, address _associatedContract)',
  'event AssociatedContractUpdated(address associatedContract)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function accountVestingEntryIDs(address account, uint256 index) view returns (uint256)',
  'function addVestingEntry(address account, tuple(uint64 endTime, uint256 escrowAmount) entry) returns (uint256)',
  'function associatedContract() view returns (address)',
  'function fallbackRewardEscrow() view returns (address)',
  'function firstNonFallbackId() view returns (uint256)',
  'function nextEntryId() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function numVestingEntries(address account) view returns (uint256)',
  'function owner() view returns (address)',
  'function setAssociatedContract(address _associatedContract)',
  'function setFallbackRewardEscrow(address _fallbackRewardEscrow)',
  'function setZeroAmount(address account, uint256 entryId)',
  'function setZeroAmountUntilTarget(address account, uint256 startIndex, uint256 targetAmount) returns (uint256 total, uint256 endIndex, uint256 lastEntryTime)',
  'function totalEscrowedAccountBalance(address account) view returns (uint256)',
  'function totalEscrowedBalance() view returns (uint256)',
  'function totalVestedAccountBalance(address account) view returns (uint256)',
  'function updateEscrowAccountBalance(address account, int256 delta)',
  'function updateTotalEscrowedBalance(int256 delta)',
  'function updateVestedAccountBalance(address account, int256 delta)',
  'function vestingSchedules(address account, uint256 entryId) view returns (tuple(uint64 endTime, uint256 escrowAmount) entry)',
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

export declare namespace VestingEntries {
  export type VestingEntryStruct = {
    endTime: PromiseOrValue<BigNumberish>;
    escrowAmount: PromiseOrValue<BigNumberish>;
  };

  export type VestingEntryStructOutput = [BigNumber, BigNumber] & {
    endTime: BigNumber;
    escrowAmount: BigNumber;
  };
}

export interface RewardEscrowV2StorageInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'accountVestingEntryIDs(address,uint256)': FunctionFragment;
    'addVestingEntry(address,(uint64,uint256))': FunctionFragment;
    'associatedContract()': FunctionFragment;
    'fallbackRewardEscrow()': FunctionFragment;
    'firstNonFallbackId()': FunctionFragment;
    'nextEntryId()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'numVestingEntries(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'setAssociatedContract(address)': FunctionFragment;
    'setFallbackRewardEscrow(address)': FunctionFragment;
    'setZeroAmount(address,uint256)': FunctionFragment;
    'setZeroAmountUntilTarget(address,uint256,uint256)': FunctionFragment;
    'totalEscrowedAccountBalance(address)': FunctionFragment;
    'totalEscrowedBalance()': FunctionFragment;
    'totalVestedAccountBalance(address)': FunctionFragment;
    'updateEscrowAccountBalance(address,int256)': FunctionFragment;
    'updateTotalEscrowedBalance(int256)': FunctionFragment;
    'updateVestedAccountBalance(address,int256)': FunctionFragment;
    'vestingSchedules(address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'acceptOwnership'
      | 'accountVestingEntryIDs'
      | 'addVestingEntry'
      | 'associatedContract'
      | 'fallbackRewardEscrow'
      | 'firstNonFallbackId'
      | 'nextEntryId'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'numVestingEntries'
      | 'owner'
      | 'setAssociatedContract'
      | 'setFallbackRewardEscrow'
      | 'setZeroAmount'
      | 'setZeroAmountUntilTarget'
      | 'totalEscrowedAccountBalance'
      | 'totalEscrowedBalance'
      | 'totalVestedAccountBalance'
      | 'updateEscrowAccountBalance'
      | 'updateTotalEscrowedBalance'
      | 'updateVestedAccountBalance'
      | 'vestingSchedules'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'accountVestingEntryIDs',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'addVestingEntry',
    values: [PromiseOrValue<string>, VestingEntries.VestingEntryStruct]
  ): string;
  encodeFunctionData(functionFragment: 'associatedContract', values?: undefined): string;
  encodeFunctionData(functionFragment: 'fallbackRewardEscrow', values?: undefined): string;
  encodeFunctionData(functionFragment: 'firstNonFallbackId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nextEntryId', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'numVestingEntries',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setAssociatedContract',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFallbackRewardEscrow',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setZeroAmount',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setZeroAmountUntilTarget',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'totalEscrowedAccountBalance',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'totalEscrowedBalance', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalVestedAccountBalance',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateEscrowAccountBalance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateTotalEscrowedBalance',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateVestedAccountBalance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'vestingSchedules',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accountVestingEntryIDs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addVestingEntry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'associatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'fallbackRewardEscrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'firstNonFallbackId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nextEntryId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'numVestingEntries', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFallbackRewardEscrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setZeroAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setZeroAmountUntilTarget', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalEscrowedAccountBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalEscrowedBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalVestedAccountBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateEscrowAccountBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateTotalEscrowedBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateVestedAccountBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vestingSchedules', data: BytesLike): Result;

  events: {
    'AssociatedContractUpdated(address)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AssociatedContractUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
}

export interface AssociatedContractUpdatedEventObject {
  associatedContract: string;
}
export type AssociatedContractUpdatedEvent = TypedEvent<
  [string],
  AssociatedContractUpdatedEventObject
>;

export type AssociatedContractUpdatedEventFilter = TypedEventFilter<AssociatedContractUpdatedEvent>;

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

export interface RewardEscrowV2Storage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RewardEscrowV2StorageInterface;

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

    accountVestingEntryIDs(
      account: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addVestingEntry(
      account: PromiseOrValue<string>,
      entry: VestingEntries.VestingEntryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    associatedContract(overrides?: CallOverrides): Promise<[string]>;

    fallbackRewardEscrow(overrides?: CallOverrides): Promise<[string]>;

    firstNonFallbackId(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextEntryId(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    numVestingEntries(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFallbackRewardEscrow(
      _fallbackRewardEscrow: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setZeroAmount(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setZeroAmountUntilTarget(
      account: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalEscrowedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalEscrowedBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalVestedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateEscrowAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateTotalEscrowedBalance(
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateVestedAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vestingSchedules(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [VestingEntries.VestingEntryStructOutput] & { entry: VestingEntries.VestingEntryStructOutput }
    >;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  accountVestingEntryIDs(
    account: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addVestingEntry(
    account: PromiseOrValue<string>,
    entry: VestingEntries.VestingEntryStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  associatedContract(overrides?: CallOverrides): Promise<string>;

  fallbackRewardEscrow(overrides?: CallOverrides): Promise<string>;

  firstNonFallbackId(overrides?: CallOverrides): Promise<BigNumber>;

  nextEntryId(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  numVestingEntries(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAssociatedContract(
    _associatedContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFallbackRewardEscrow(
    _fallbackRewardEscrow: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setZeroAmount(
    account: PromiseOrValue<string>,
    entryId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setZeroAmountUntilTarget(
    account: PromiseOrValue<string>,
    startIndex: PromiseOrValue<BigNumberish>,
    targetAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalEscrowedAccountBalance(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalEscrowedBalance(overrides?: CallOverrides): Promise<BigNumber>;

  totalVestedAccountBalance(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateEscrowAccountBalance(
    account: PromiseOrValue<string>,
    delta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateTotalEscrowedBalance(
    delta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateVestedAccountBalance(
    account: PromiseOrValue<string>,
    delta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vestingSchedules(
    account: PromiseOrValue<string>,
    entryId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VestingEntries.VestingEntryStructOutput>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    accountVestingEntryIDs(
      account: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addVestingEntry(
      account: PromiseOrValue<string>,
      entry: VestingEntries.VestingEntryStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    associatedContract(overrides?: CallOverrides): Promise<string>;

    fallbackRewardEscrow(overrides?: CallOverrides): Promise<string>;

    firstNonFallbackId(overrides?: CallOverrides): Promise<BigNumber>;

    nextEntryId(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    numVestingEntries(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFallbackRewardEscrow(
      _fallbackRewardEscrow: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setZeroAmount(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setZeroAmountUntilTarget(
      account: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        total: BigNumber;
        endIndex: BigNumber;
        lastEntryTime: BigNumber;
      }
    >;

    totalEscrowedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalEscrowedBalance(overrides?: CallOverrides): Promise<BigNumber>;

    totalVestedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateEscrowAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTotalEscrowedBalance(
      delta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateVestedAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    vestingSchedules(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VestingEntries.VestingEntryStructOutput>;
  };

  filters: {
    'AssociatedContractUpdated(address)'(
      associatedContract?: null
    ): AssociatedContractUpdatedEventFilter;
    AssociatedContractUpdated(associatedContract?: null): AssociatedContractUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    accountVestingEntryIDs(
      account: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addVestingEntry(
      account: PromiseOrValue<string>,
      entry: VestingEntries.VestingEntryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    associatedContract(overrides?: CallOverrides): Promise<BigNumber>;

    fallbackRewardEscrow(overrides?: CallOverrides): Promise<BigNumber>;

    firstNonFallbackId(overrides?: CallOverrides): Promise<BigNumber>;

    nextEntryId(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    numVestingEntries(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFallbackRewardEscrow(
      _fallbackRewardEscrow: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setZeroAmount(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setZeroAmountUntilTarget(
      account: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalEscrowedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalEscrowedBalance(overrides?: CallOverrides): Promise<BigNumber>;

    totalVestedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateEscrowAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateTotalEscrowedBalance(
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateVestedAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vestingSchedules(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    accountVestingEntryIDs(
      account: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addVestingEntry(
      account: PromiseOrValue<string>,
      entry: VestingEntries.VestingEntryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    associatedContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fallbackRewardEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    firstNonFallbackId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextEntryId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numVestingEntries(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssociatedContract(
      _associatedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFallbackRewardEscrow(
      _fallbackRewardEscrow: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setZeroAmount(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setZeroAmountUntilTarget(
      account: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalEscrowedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalEscrowedBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalVestedAccountBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateEscrowAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateTotalEscrowedBalance(
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateVestedAccountBalance(
      account: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vestingSchedules(
      account: PromiseOrValue<string>,
      entryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
