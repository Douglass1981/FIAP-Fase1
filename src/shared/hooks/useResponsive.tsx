import useMediaQuery from '@mui/material/useMediaQuery';
import { BREAKPOINT } from '@/constants';

export function useResponsive() {
  const isXs = useMediaQuery(`(max-width:${BREAKPOINT.sm - 1}px)`);
  const isSm = useMediaQuery(`(min-width:${BREAKPOINT.sm}px) and (max-width:${BREAKPOINT.md - 1}px)`);
  const isMd = useMediaQuery(`(min-width:${BREAKPOINT.md}px) and (max-width:${BREAKPOINT.lg - 1}px)`);
  const isLg = useMediaQuery(`(min-width:${BREAKPOINT.lg}px) and (max-width:${BREAKPOINT.xl - 1}px)`);
  const isXl = useMediaQuery(`(min-width:${BREAKPOINT.xl}px)`);

  const isMobile = useMediaQuery(`(max-width:${BREAKPOINT.md - 1}px)`);
  const isDesktop = useMediaQuery(`(min-width:${BREAKPOINT.md}px)`);

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isMobile,
    isDesktop,
  };
}
