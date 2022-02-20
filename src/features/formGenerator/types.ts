export type IPage = 'config' | 'result';

export interface INavProps {
  callback: (name: IPage) => void;
  current: IPage;
}
