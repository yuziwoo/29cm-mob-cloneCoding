import { useCallback, useState } from 'react';
import * as S from './CreateAccountForm.styled';
import { createEmailUser } from '../../../api/firebase';
import { useRouter } from '../../../hooks/useRouter';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import TextInput from '../../common/TextInput/TextInput';
import { validateEmail } from '../../../utils/validateEmail';
import { validatePassword } from '../../../utils/validatePassword';
import { FormData } from '../../../types/login';

const CreateAccountForm = ({ redirectPath }: { redirectPath: string }) => {
  const { navigate } = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.id.isValid || !formData.password.isValid) {
      window.alert(
        !formData.id.isValid ? '이메일 주소를 확인해주세요.' : '패스워드를 확인해주세요.'
      );
      return;
    }
    createEmailUser({ email: formData.id.state, password: formData.password.state }, () => {
      navigate(redirectPath);
    });
  };

  const [formData, setFormData] = useState<FormData>({
    id: {
      state: '',
      isValid: null,
    },
    password: {
      state: '',
      isValid: null,
    },
  });

  const handleIdInputChange = useCallback((input: string) => {
    setFormData((prevData) => ({
      id: { state: input, isValid: validateEmail(input) },
      password: prevData.password,
    }));
  }, []);

  const handlePasswordInputChange = useCallback((input: string) => {
    setFormData((prevData) => ({
      id: prevData.id,
      password: { state: input, isValid: validatePassword(input) },
    }));
  }, []);

  return (
    <S.CreateAccount onSubmit={handleSubmit}>
      <TextInput
        type="email"
        id="login-form-id"
        onChange={handleIdInputChange}
        isValid={formData.id.isValid}
        placeholder="이메일*"
        maxLength={50}
        required={true}
        invalidMessage="잘못된 형식의 이메일 주소입니다."
      />
      <TextInput
        type="password"
        id="login-form-password"
        isValid={formData.password.isValid}
        onChange={handlePasswordInputChange}
        placeholder="패스워드*"
        maxLength={20}
        required={true}
        invalidMessage="영문, 숫자, 특수문자를 6자 이상 조합하여주세요."
        fixedPaddingBottom="40px"
      />

      <motion.div
        style={{ display: 'inline-block' }}
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        <S.Submit>
          <p>회원가입</p>
        </S.Submit>
      </motion.div>
    </S.CreateAccount>
  );
};

export default CreateAccountForm;