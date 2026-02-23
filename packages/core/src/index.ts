/**
 * Minions Oss-releases SDK
 *
 * Release definitions, changelogs, and publish receipts
 *
 * @module @minions-oss-releases/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Oss-releases.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
