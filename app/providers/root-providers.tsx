import {
  LinkProvider,
  MedusaProvider,
  StorefrontProvider,
  StorefrontState
} from '@marketplace/ui-components/providers';
import { FC, PropsWithChildren } from 'react';

export interface RootProvidersProps extends PropsWithChildren {
  storefrontState: StorefrontState;
}

export const RootProviders: FC<RootProvidersProps> = ({ children, storefrontState }) => (
  <LinkProvider>
    <MedusaProvider>
      <StorefrontProvider data={storefrontState}>{children}</StorefrontProvider>
    </MedusaProvider>
  </LinkProvider>
);
