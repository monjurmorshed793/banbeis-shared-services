export interface INavigation {
  id: string;
  sequence: number;
  route: string;
  label: string;
  icon: string;
  roles: string;
  subMenus: INavigation[];
}
