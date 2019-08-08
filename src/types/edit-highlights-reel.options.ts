import { IgAppModule } from './common.types';

export interface EditHighlightsReelOptions {
  highlightId: string;
  added?: string[];
  removed?: string[];
  coverId: string;
  title: string;
  source?: IgAppModule;
}
