import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';

export const useNavigation = () => {
  const router = useRouter();

  return {
    goToAbout: () => router.push(`${ROUTES.ABOUT}`),
    goToContact: () => router.push(`${ROUTES.CONTACT}`),
    goToServices: () => router.push(`${ROUTES.SERVICES}`),
    goToLogin: () => router.push(`${ROUTES.LOGIN}`),
    goToSignup: () => router.push(`${ROUTES.SIGNUP}`),
    goToHome: () => router.push(`${ROUTES.HOME}`),
    goToDashboard: () => router.push(`${ROUTES.DASHBOARD}`),
    goToTransactions: () => router.push(`${ROUTES.TRANSACTIONS}`),
  };
};
