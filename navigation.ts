import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { routing } from './middleware';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
