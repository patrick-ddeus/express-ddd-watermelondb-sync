export interface SyncPullChangesUseCase {
  handle(input: SyncPullChanges.Input): SyncPullChanges.Output;
}

export namespace SyncPullChanges {
  export type Input = { lastPulledAt: Timestamp; schemaVersion?: number };
  export type Output = Promise<{
    changes: IResponseChangesRaw;
    timestamp: Timestamp;
  }>;
}

export type Timestamp = string;

export interface ChangesRaw<T> {
  [model: string]: {
    created?: Array<T>;
    updated?: Array<T>;
    deleted?: Array<string>;
  };
}

export interface IResponseChangesRaw {
  [model: string]: {
    created?: Array<any>;
    updated?: Array<any>;
    deleted?: Array<string>;
  };
}
