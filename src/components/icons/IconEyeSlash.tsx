import { theme } from '../../styles/theme';

interface IconEyeSlashProps {
  color?: string;
}

const IconEyeSlash = ({ color = theme.color.BLACK }: IconEyeSlashProps) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.7379 23.4061L1.57543 2.95337C1.50367 2.89591 1.4213 2.85316 1.33301 2.82754C1.24473 2.80192 1.15226 2.79394 1.0609 2.80406C0.96953 2.81417 0.88105 2.84218 0.800509 2.8865C0.719968 2.93081 0.648943 2.99055 0.59149 3.0623L0.15399 3.60874C0.0964019 3.68053 0.0535337 3.76296 0.0278386 3.85133C0.00214337 3.9397 -0.00587447 4.03227 0.00424382 4.12374C0.0143621 4.21521 0.0424179 4.30379 0.0868059 4.3844C0.131194 4.46502 0.191043 4.53609 0.262928 4.59355L26.4254 25.0462C26.4972 25.1037 26.5796 25.1465 26.6678 25.1721C26.7561 25.1977 26.8486 25.2057 26.94 25.1956C27.0313 25.1854 27.1198 25.1574 27.2003 25.1131C27.2809 25.0688 27.3519 25.0091 27.4094 24.9373L27.8469 24.3909C27.9045 24.3191 27.9473 24.2367 27.973 24.1483C27.9987 24.0599 28.0067 23.9673 27.9966 23.8759C27.9865 23.7844 27.9584 23.6958 27.9141 23.6152C27.8697 23.5346 27.8098 23.4635 27.7379 23.4061ZM12.985 9.20787L18.8821 13.8182C18.7849 11.1959 16.6464 9.0998 14.0004 9.0998C13.6591 9.10044 13.3188 9.13666 12.985 9.20787ZM15.0159 18.7922L9.1188 14.1818C9.21637 16.8037 11.3549 18.8998 14.0004 18.8998C14.3417 18.8991 14.682 18.863 15.0159 18.7922ZM14.0004 7.69981C18.3164 7.69981 22.2731 10.1061 24.4099 13.9998C23.8861 14.9581 23.2389 15.8436 22.4849 16.6336L24.136 17.9242C25.0553 16.9408 25.8341 15.8349 26.4504 14.6381C26.5504 14.4401 26.6026 14.2214 26.6026 13.9996C26.6026 13.7778 26.5504 13.559 26.4504 13.3611C24.0756 8.73187 19.3786 5.59981 14.0004 5.59981C12.3948 5.59981 10.8631 5.90606 9.42286 6.42274L11.4533 8.01043C12.2819 7.82231 13.1307 7.69981 14.0004 7.69981ZM14.0004 20.2998C9.68449 20.2998 5.72818 17.8936 3.59099 13.9998C4.11546 13.0415 4.76338 12.1562 5.51818 11.3665L3.86705 10.0759C2.94793 11.0591 2.16924 12.1648 1.55312 13.3615C1.45303 13.5595 1.40089 13.7782 1.40089 14C1.40089 14.2219 1.45303 14.4406 1.55312 14.6386C3.92568 19.2677 8.62268 22.3998 14.0004 22.3998C15.6061 22.3998 17.1377 22.0914 18.578 21.5769L16.5476 19.9896C15.7189 20.1773 14.8706 20.2998 14.0004 20.2998Z"
        fill={color}
      />
    </svg>
  );
};

export default IconEyeSlash;
