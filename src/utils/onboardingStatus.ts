import AsyncStorage from '@react-native-async-storage/async-storage';
import {OnboardingStatus} from '../types/onboardingStatus.ts';

export async function setOnboardingStatus(status: OnboardingStatus) {
  return AsyncStorage.setItem('onboardingStatus', status);
}

export async function getOnboardingStatus(): Promise<OnboardingStatus> {
  const status = await AsyncStorage.getItem('onboardingStatus');

  if (!status) {
    return 'notSeen';
  }

  return status as OnboardingStatus;
}
