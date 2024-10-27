import { PropsWithChildren } from 'react';
import ThemeManagerRegistry from './ThemeManager/registry';
import { getManagersPersistentStateFromCookies } from '@/managers/utils';

export interface ManagersRegistryProps extends PropsWithChildren {
  persistentState: Awaited<ReturnType<typeof getManagersPersistentStateFromCookies>>;
}

const ManagersRegistry = ({ persistentState, children }: ManagersRegistryProps) => {
  return (
    <ThemeManagerRegistry
      colorScheme={persistentState.theme.colorScheme}
      direction={persistentState.theme.direction}
      primaryColor={persistentState.theme.primaryColor}
    >
      {children}
    </ThemeManagerRegistry>
  );
};

export default ManagersRegistry;
