export interface PageData<V> {
  page: (index: number) => ReadonlyArray<V>;
  pages: number;
  total: number;
  items: ReadonlyArray<ReadonlyArray<V>>;
}

export type CollectionResult<T, P> = () => Promise<{
  items: Array<T>;
  pages: P;
}>;

export interface ProjectsData {
  name: string;
  date: string;
  tags: ReadonlyArray<string>;
  thumbnailUrlImage: string;
  projectUrl: string;
  richText: string;
  company: 'OPTIMAP' | 'RAYA' | 'ALL';
}
