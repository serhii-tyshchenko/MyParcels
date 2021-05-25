import { BaseLayout } from 'modules/layouts';
import { AddParcelForm, ParcelList } from 'modules/parcels';

const Home = () => (
  <BaseLayout>
    <AddParcelForm />
    <ParcelList />
  </BaseLayout>
);

export { Home };
