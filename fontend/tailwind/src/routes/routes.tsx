import PseudoClass from '../pages/pseudo-class';

type RouteItem = {
  path: string;
  label: string;
  component: React.ReactElement;
};

const routes: RouteItem[] = [
  {
    path: '/pseudoClass',
    label: '伪类',
    component: <PseudoClass />,
  },
];

export default routes;
