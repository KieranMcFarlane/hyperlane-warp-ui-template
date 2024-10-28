import { memo } from 'react';

import { Color } from '../../styles/Color';
import { IconProps } from './types';

function _WalletIcon({
  width = 17,
  height = 14,
  className,
  color = Color.black,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 14"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3.33333 13.4737C2.41667 13.4737 1.63194 13.1439 0.979167 12.4842C0.326389 11.8246 0 11.0316 0 10.1053V3.36842C0 2.44211 0.326389 1.64912 0.979167 0.989474C1.63194 0.329825 2.41667 0 3.33333 0H13.3333C14.25 0 15.0347 0.329825 15.6875 0.989474C16.3403 1.64912 16.6667 2.44211 16.6667 3.36842V10.1053C16.6667 11.0316 16.3403 11.8246 15.6875 12.4842C15.0347 13.1439 14.25 13.4737 13.3333 13.4737H3.33333ZM3.33333 3.57895H13.3333C13.7361 3.57895 14.1146 3.64211 14.4687 3.76842C14.8229 3.89474 15.1389 4.07719 15.4167 4.31579V3.36842C15.4167 2.77895 15.2153 2.2807 14.8125 1.87368C14.4097 1.46667 13.9167 1.26316 13.3333 1.26316H3.33333C2.75 1.26316 2.25694 1.46667 1.85417 1.87368C1.45139 2.2807 1.25 2.77895 1.25 3.36842V4.31579C1.52778 4.07719 1.84375 3.89474 2.19792 3.76842C2.55208 3.64211 2.93056 3.57895 3.33333 3.57895ZM1.3125 6.4421L11.25 8.86316C11.3472 8.89123 11.4479 8.89474 11.5521 8.87368C11.6562 8.85263 11.7431 8.80702 11.8125 8.73684L15.1458 5.91579C14.9653 5.59298 14.7153 5.33333 14.3958 5.13684C14.0764 4.94035 13.7222 4.84211 13.3333 4.84211H3.33333C2.84722 4.84211 2.41667 4.99298 2.04167 5.29474C1.66667 5.59649 1.42361 5.97895 1.3125 6.4421Z"
        fill={color}
      />
    </svg>
  );
}

export const WalletIcon = memo(_WalletIcon);