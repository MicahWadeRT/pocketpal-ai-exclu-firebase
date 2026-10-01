/**
 * App Check is intentionally unavailable in the community build.
 *
 * Keeping these functions as a small compatibility layer lets benchmark and
 * feedback requests fail gracefully without requiring Firebase at build time.
 */
export const initializeAppCheck = async () => undefined;

export const getAppCheckToken = async (): Promise<string | null> => null;
