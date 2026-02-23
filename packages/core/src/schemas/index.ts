/**
 * @module @minions-oss-releases/sdk/schemas
 * Custom MinionType schemas for Minions Oss-releases.
 */

import type { MinionType } from 'minions-sdk';

export const releaseType: MinionType = {
  id: 'oss-releases-release',
  name: 'Release',
  slug: 'release',
  description: 'A versioned release of an OSS project.',
  icon: '🚀',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'version', type: 'string', label: 'version' },
    { name: 'changelog', type: 'string', label: 'changelog' },
    { name: 'featureIds', type: 'string', label: 'featureIds' },
    { name: 'releasedAt', type: 'string', label: 'releasedAt' },
    { name: 'publishedTo', type: 'string', label: 'publishedTo' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const publishreceiptType: MinionType = {
  id: 'oss-releases-publish-receipt',
  name: 'Publish receipt',
  slug: 'publish-receipt',
  description: 'Confirmation of a package publish to a registry.',
  icon: '✅',
  schema: [
    { name: 'releaseId', type: 'string', label: 'releaseId' },
    { name: 'registry', type: 'select', label: 'registry' },
    { name: 'packageUrl', type: 'string', label: 'packageUrl' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const customTypes: MinionType[] = [
  releaseType,
  publishreceiptType,
];

