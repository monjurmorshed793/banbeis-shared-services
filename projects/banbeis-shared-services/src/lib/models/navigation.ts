export interface INavigation {
  id: string;
  route: string;
  label: string;
  icon: string;
  child: INavigation[];
}
