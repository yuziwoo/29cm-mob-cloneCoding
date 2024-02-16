import { atom } from 'recoil';
import { theme } from '../styles/theme';

export type HeaderStateProps = {
  color: string;
  viewLogo: boolean;
  viewBackButton: boolean;
  viewShadow: boolean;
  viewCategory: boolean;
  viewIcons: boolean;
};

export const headerStateRecoil = atom<HeaderStateProps>({
  key: 'headerState',
  default: {
    color: theme.color.WHITE,
    viewLogo: true,
    viewBackButton: false,
    viewShadow: true,
    viewCategory: true,
    viewIcons: true,
  },
});

export const headerStateDefault = {
  color: theme.color.WHITE,
  viewLogo: true,
  viewBackButton: false,
  viewShadow: true,
  viewCategory: true,
  viewIcons: true,
};

export const headerStateOnlyBackButton = {
  color: theme.color.BLACK,
  viewLogo: false,
  viewBackButton: true,
  viewShadow: false,
  viewCategory: false,
  viewIcons: false,
};
