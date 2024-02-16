import { headerStateOnlyBackButton } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import * as S from './LoginPage.styled';
import IconLogo from '../../components/icons/IconLogo';
import { theme } from '../../styles/theme';
import LoginForm from '../../components/login/LoginForm/LoginForm';
import SocialLogin from '../../components/login/SocialLogin/SocialLogin';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '../../constants/path';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { motion } from 'framer-motion';
import { useRouter } from '../../hooks/useRouter';
import { motionStyle } from '../../styles/motion';

const LoginPage = () => {
  // login 유저 redirect
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) {
      navigate(ROUTE_PATH.root);
    }
    // eslint-disable-next-line
  }, []);

  // 헤더 상태 변경
  useSetHeaderState(headerStateOnlyBackButton);

  // 이전에 방문하려던 페이지 저장
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState(ROUTE_PATH.root);

  useEffect(() => {
    if (location?.state?.path !== null) {
      setRedirectPath(location?.state?.path);
    }
  }, [location?.state]);

  return (
    <S.SectionLogin>
      <motion.div
        initial={motionStyle.pageOpen.initial}
        animate={motionStyle.pageOpen.animate}
        transition={motionStyle.pageOpen.transition}
      >
        <S.Logo>
          <IconLogo color={theme.color.BLACK} />
        </S.Logo>

        <S.Title>
          <h1>로그인</h1>
        </S.Title>

        <LoginForm redirectPath={redirectPath} />

        <S.CreateAccount>
          <a
            href={ROUTE_PATH.join}
            onClick={(e) => {
              e.preventDefault();
              navigate(ROUTE_PATH.join, { state: { path: redirectPath } });
            }}
          >
            계정 만들기
          </a>
        </S.CreateAccount>

        <S.Title>
          <h1>또는 다음으로 계속하기</h1>
        </S.Title>

        <SocialLogin redirectPath={redirectPath} />
      </motion.div>
    </S.SectionLogin>
  );
};

export default LoginPage;
