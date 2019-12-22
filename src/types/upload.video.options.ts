import { IgApiClient } from '..';

export interface UploadVideoOptions {
  video: Buffer;
  uploadId?: string;
  duration: number;
  width?: number;
  height?: number;
  isSidecar?: boolean;
  forAlbum?: boolean;
  isDirect?: boolean;
  isDirectVoice?: boolean;
  mediaType?: string;
  forDirectStory?: boolean;
  isIgtvVideo?: boolean;
  waterfallId?: string;
  uploadName?: string;
  offset?: number;
}

export interface UploadVideoSegmentInitOptions {
  waterfallId: string;
  ruploadParams;
  transferId: string;
  streamId: string;
  startOffset: number;
}

export interface UploadVideoSegmentTransferOptions {
  waterfallId: string;
  ruploadParams;
  transferId: string;
  streamId: string;
  startOffset: number;
  segment: Buffer;
}

export type SegmentDivider = (options: { buffer: Buffer; client: IgApiClient }) => Buffer[];

export interface UploadSegmentedVideoOptions extends UploadVideoOptions {
  segmentDivider?: SegmentDivider;
  // only supported by segmented upload for now
  retryContext?: UploadRetryContext;
  // all segments are currently video-segments
  segments?: Buffer[];
}

export interface UploadRetryContext {
  num_step_auto_retry: number;
  num_reupload: number;
  num_step_manual_retry: number;
}

export const SEGMENT_DIVIDERS = {
  totalSections(numSections): SegmentDivider {
    return ({ buffer }) => {
      const sections = [];
      const sectionSize = Math.floor(buffer.byteLength / numSections);
      for (let i = 0; i < numSections - 1; i++) {
        sections.push(buffer.slice(i * sectionSize, Math.min((i + 1) * sectionSize, buffer.byteLength)));
      }
      sections.push(buffer.slice(sectionSize * (numSections - 1)));
      return sections;
    };
  },
  sectionSize(sectionSize): SegmentDivider {
    return ({ buffer }) => {
      const sections = [];
      for (let i = 0; i < buffer.byteLength; ) {
        const section = buffer.slice(i, Math.min(i + sectionSize, buffer.byteLength));
        sections.push(section);
        i += section.byteLength;
      }
      return sections;
    };
  },
};
