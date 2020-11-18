import { Plugin as PluginType } from 'ts-migrate-server';
import stripTSIgnorePlugin from './plugins/strip-ts-ignore';
import tsIgnorePlugin from './plugins/ts-ignore';
import updateSourceText, {
  SourceTextUpdate as SourceTextUpdateType,
} from './utils/updateSourceText';

export type Plugin<T = {}> = PluginType<T>;
export type SourceTextUpdate = SourceTextUpdateType;

export { stripTSIgnorePlugin, tsIgnorePlugin };

export { updateSourceText };
