/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  createdAt: any;
  role: 'user' | 'admin';
}

export interface Manager {
  id: string;
  name: string;
  role: string;
  bio: string;
  telegram: string;
  avatarUrl: string;
}

export const LOGO_URL = "/artifact_1747493427384.png";
