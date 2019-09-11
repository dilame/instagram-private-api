import { IgAppModule } from './common.types';

export interface CreateHighlightsReelOptions {
  mediaIds: string[];
  title: string;
  coverId?: string;
  source?: IgAppModule;
}
