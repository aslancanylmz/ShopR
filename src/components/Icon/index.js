import React from 'react';
import Svg, { Circle, G, Path, Rect, Defs, ClipPath, LinearGradient, Stop, Polygon, Ellipse } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';

const iconNames = {
  Success: 'Success',
  Profile: 'Profile',
  Coupon: 'Coupon',
  Cart: 'Cart',
  Home: 'Home',
  Forward: 'Forward'
};
const Icon = ({ iconName, style, onPress, width, height, color }) => {
  switch (iconName) {
    case 'Success':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '60'} height={height ?? '60'} viewBox='0 0 60 60' fill='none'>
            <Path
              d='M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM39.659 20.909L26.25 34.318L20.341 28.409C19.4623 27.5303 18.0377 27.5303 17.159 28.409C16.2803 29.2877 16.2803 30.7123 17.159 31.591L24.659 39.091C25.5377 39.9697 26.9623 39.9697 27.841 39.091L42.841 24.091C43.7197 23.2123 43.7197 21.7877 42.841 20.909C41.9623 20.0303 40.5377 20.0303 39.659 20.909Z'
              fill={color ?? COLORS.successColor}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Profile':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '26'} height={height ?? '26'} viewBox='0 0 18 18' fill='none'>
            <Path
              d='M2 14.85C2.9 13.9667 3.946 13.2707 5.138 12.762C6.32933 12.254 7.61667 12 9 12C10.3833 12 11.671 12.254 12.863 12.762C14.0543 13.2707 15.1 13.9667 16 14.85V2H2V14.85ZM9 10C8.03333 10 7.20833 9.65833 6.525 8.975C5.84167 8.29167 5.5 7.46667 5.5 6.5C5.5 5.53333 5.84167 4.70833 6.525 4.025C7.20833 3.34167 8.03333 3 9 3C9.96667 3 10.7917 3.34167 11.475 4.025C12.1583 4.70833 12.5 5.53333 12.5 6.5C12.5 7.46667 12.1583 8.29167 11.475 8.975C10.7917 9.65833 9.96667 10 9 10ZM2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2Z'
              fill={color ?? COLORS.black}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Coupon':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '32'} height={height ?? '32'} viewBox='0 0 20 16' fill='none'>
            <Path
              d='M12.8 4L14 5.2L7.2 12L6 10.8L12.8 4ZM2 0H18C19.11 0 20 0.89 20 2V6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8C18 8.53043 18.2107 9.03914 18.5858 9.41421C18.9609 9.78929 19.4696 10 20 10V14C20 15.11 19.11 16 18 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V10C1.11 10 2 9.11 2 8C2 7.46957 1.78929 6.96086 1.41421 6.58579C1.03914 6.21071 0.530433 6 0 6V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0ZM2 2V4.54C2.60768 4.8904 3.11236 5.39466 3.46325 6.00205C3.81415 6.60944 3.9989 7.29854 3.9989 8C3.9989 8.70146 3.81415 9.39056 3.46325 9.99795C3.11236 10.6053 2.60768 11.1096 2 11.46V14H18V11.46C17.3923 11.1096 16.8876 10.6053 16.5367 9.99795C16.1858 9.39056 16.0011 8.70146 16.0011 8C16.0011 7.29854 16.1858 6.60944 16.5367 6.00205C16.8876 5.39466 17.3923 4.8904 18 4.54V2H2ZM7.5 4C8.33 4 9 4.67 9 5.5C9 6.33 8.33 7 7.5 7C6.67 7 6 6.33 6 5.5C6 4.67 6.67 4 7.5 4ZM12.5 9C13.33 9 14 9.67 14 10.5C14 11.33 13.33 12 12.5 12C11.67 12 11 11.33 11 10.5C11 9.67 11.67 9 12.5 9Z'
              fill={color ?? COLORS.black}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Cart':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '32'} height={height ?? '37'} viewBox='0 0 40 37' fill='none'>
            <Path
              d='M17.1137 33.5429C17.1137 34.2198 16.913 34.8816 16.5369 35.4444C16.1608 36.0073 15.6262 36.446 15.0008 36.7051C14.3754 36.9641 13.6872 37.0319 13.0232 36.8998C12.3593 36.7678 11.7494 36.4418 11.2707 35.9631C10.792 35.4844 10.4661 34.8745 10.334 34.2106C10.2019 33.5467 10.2697 32.8585 10.5288 32.233C10.7878 31.6076 11.2265 31.073 11.7894 30.6969C12.3523 30.3209 13.014 30.1201 13.691 30.1201C14.5973 30.1246 15.4653 30.4867 16.1062 31.1276C16.7471 31.7685 17.1092 32.6365 17.1137 33.5429V33.5429ZM31.4892 30.1201C30.8123 30.1201 30.1505 30.3209 29.5876 30.6969C29.0248 31.073 28.5861 31.6076 28.327 32.233C28.068 32.8585 28.0002 33.5467 28.1322 34.2106C28.2643 34.8745 28.5903 35.4844 29.069 35.9631C29.5476 36.4418 30.1575 36.7678 30.8215 36.8998C31.4854 37.0319 32.1736 36.9641 32.799 36.7051C33.4245 36.446 33.959 36.0073 34.3351 35.4444C34.7112 34.8816 34.9119 34.2198 34.9119 33.5429C34.9075 32.6365 34.5454 31.7685 33.9045 31.1276C33.2636 30.4867 32.3956 30.1246 31.4892 30.1201V30.1201ZM39.9263 9.46388L35.7847 23.9078C35.4961 24.9068 34.8915 25.7852 34.0615 26.4116C33.2316 27.0379 32.2209 27.3784 31.1812 27.3819H13.999C12.9592 27.3784 11.9486 27.0379 11.1186 26.4116C10.2887 25.7852 9.68404 24.9068 9.39542 23.9078L5.27102 9.4981C5.27102 9.48099 5.25391 9.44676 5.25391 9.42965L3.73079 4.10729H2.05364C1.50898 4.10729 0.986631 3.89092 0.601498 3.50579C0.216365 3.12066 0 2.5983 0 2.05364C0 1.50898 0.216365 0.986631 0.601498 0.601498C0.986631 0.216366 1.50898 0 2.05364 0H4.2442C4.98784 0.00564029 5.71004 0.249755 6.3046 0.696444C6.89916 1.14313 7.33469 1.76882 7.54714 2.48149L8.77933 6.84548H37.9411C38.2587 6.8473 38.5717 6.92216 38.8558 7.0643C39.1399 7.20643 39.3874 7.41201 39.5794 7.66514C39.7713 7.91827 39.9024 8.21215 39.9625 8.52406C40.0227 8.83597 40.0103 9.15753 39.9263 9.46388V9.46388ZM35.22 10.9528H9.96017L13.3316 22.7783C13.3754 22.9214 13.4638 23.0467 13.5838 23.136C13.7039 23.2253 13.8494 23.2739 13.999 23.2746H31.1812C31.3308 23.2739 31.4763 23.2253 31.5963 23.136C31.7164 23.0467 31.8048 22.9214 31.8486 22.7783L35.22 10.9528Z'
              fill={color ?? COLORS.black}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Home':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '32'} height={height ?? '25'} viewBox='0 0 40 32' fill='none'>
            <G clipPath='url(#clip0_489_8)'>
              <Path
                d='M33.8461 18.4615V30C33.8461 30.4167 33.6939 30.7772 33.3894 31.0817C33.0849 31.3862 32.7243 31.5385 32.3077 31.5385H23.0769V22.3077H16.9231V31.5385H7.69229C7.27563 31.5385 6.91505 31.3862 6.61056 31.0817C6.30608 30.7772 6.15383 30.4167 6.15383 30V18.4615C6.15383 18.4455 6.15784 18.4215 6.16585 18.3894C6.17386 18.3574 6.17787 18.3333 6.17787 18.3173L20 6.92307L33.8221 18.3173C33.8381 18.3494 33.8461 18.3974 33.8461 18.4615ZM39.2067 16.8029L37.7163 18.5817C37.5881 18.726 37.4199 18.8141 37.2115 18.8462H37.1394C36.9311 18.8462 36.7628 18.7901 36.6346 18.6779L20 4.80769L3.36537 18.6779C3.17306 18.8061 2.98075 18.8622 2.78845 18.8462C2.58011 18.8141 2.41184 18.726 2.28364 18.5817L0.793255 16.8029C0.665049 16.6426 0.60896 16.4543 0.624985 16.238C0.641011 16.0216 0.729152 15.8494 0.889408 15.7212L18.1731 1.32211C18.6859 0.905446 19.2949 0.697113 20 0.697113C20.7051 0.697113 21.3141 0.905446 21.8269 1.32211L27.6923 6.22596V1.53846C27.6923 1.3141 27.7644 1.12981 27.9086 0.985575C28.0529 0.841344 28.2372 0.769228 28.4615 0.769228H33.0769C33.3013 0.769228 33.4856 0.841344 33.6298 0.985575C33.774 1.12981 33.8461 1.3141 33.8461 1.53846V11.3462L39.1106 15.7212C39.2708 15.8494 39.359 16.0216 39.375 16.238C39.391 16.4543 39.3349 16.6426 39.2067 16.8029Z'
                fill={color ?? COLORS.black}
              />
            </G>
            <Defs>
              <ClipPath id='clip0_489_8'>
                <Rect width='40' height='31.5385' fill='white' />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>
      );
    case 'Forward':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '24'} height={height ?? '24'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/Svg'>
            <Path
              d='M9.99999 18.9999C9.76634 19.0004 9.5399 18.919 9.35999 18.7699C9.25873 18.686 9.17503 18.5829 9.11368 18.4665C9.05233 18.3502 9.01453 18.2229 9.00245 18.0919C8.99038 17.9609 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.461 9.22999 17.3599L13.71 11.9999L9.38999 6.62994C9.30692 6.52765 9.24489 6.40996 9.20746 6.28362C9.17003 6.15728 9.15794 6.02479 9.17187 5.89376C9.18581 5.76273 9.22551 5.63575 9.28868 5.52011C9.35186 5.40447 9.43726 5.30246 9.53999 5.21994C9.64346 5.1289 9.76462 5.06024 9.89588 5.01825C10.0271 4.97626 10.1657 4.96185 10.3028 4.97594C10.4399 4.99002 10.5726 5.03229 10.6925 5.1001C10.8125 5.1679 10.9172 5.25977 11 5.36994L15.83 11.3699C15.9771 11.5489 16.0575 11.7733 16.0575 12.0049C16.0575 12.2366 15.9771 12.461 15.83 12.6399L10.83 18.6399C10.7297 18.761 10.6022 18.8566 10.458 18.9192C10.3138 18.9817 10.1569 19.0094 9.99999 18.9999Z'
              fill={color ?? COLORS.black}
            />
          </Svg>
        </TouchableOpacity>
      );

    default:
      break;
  }
};

export { Icon, iconNames };
