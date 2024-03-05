/**
 * firebase realtimeDB에서 쇼케이스 정보를 가져옵니다.
 */

import { get, ref } from 'firebase/database';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

export const getShowcaseData = async () => {
  const showcase = await get(ref(firebaseDB, `${queryAPI.queryKey.showcase}`))
    .then((snapshot) => {
      const data = snapshot.val() || null;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  return showcase;
};