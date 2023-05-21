import * as API from '@/utils/api';
import { useEffect, useState } from 'react';
import { getUserInfo } from '@/utils/util';
import auth from '@/components/common/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';


const apiTest = () => {
  const [post, setPost] = useState<string>('');

  interface jsonType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  interface catType {
    id: number;
    name: string;
  }

  const getModel = async (sumdata: string) => {
    const jsonData = JSON.stringify({
      text: sumdata,
    });
    try {
      const response = await axios.post(
        'http://kdt-ai6-team10.elicecoding.com:5000/summarize',
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('res', response.data.summary);
    } catch (error) {
      console.log('error', error);
    }
  };

  const apiTest = async (): Promise<string> => {
    // const response = await API.get<jsonType>('/posts');

    const response = await API.get<string>('/posts/10');
    return response;
  };

  const getCategories = async (): Promise<catType> => {
    const response = await API.get<catType>('/categories');
    return response;
  };

  const testAPI = async () => {
    const result = await getModel(`
    REST 아키텍처와 gRPC 아키텍처의 차이점을 보여주는 몇 가지 샘플 프로젝트를 살펴보겠습니다. 우리가 살펴볼 모든 프로젝트는 Svelte로 구축된 간단한 프런트엔드 UI와 NodeJS 백엔드 API를 갖춘 풀스택 주소록 앱으로 구현되어 있습니다. 샘플 프로젝트 모노레포는 깃허브의 anthonydmays/grpc-vs-rest에서 찾을 수 있습니다.

    간단하게 설명하기 위해 몇 가지 주요 제약 조건과 함께 제가 구현한 몇 가지 기능만 소개합니다.
    
    기본적인 CRUD 작업을 구현합니다. 이 기능적 요구 사항에서 특별한 것은 없습니다. 모든 연락처를 나열할 수 있고 단일 연락처를 생성, 업데이트 또는 삭제할 수 있으면 됩니다.
    풀스택 타입 안전성. 전체 코드베이스가 타입 안전성을 보장하고 자동 완성 같은 최신 IDE 기능을 지원할 수 있어야 합니다.
    브라우저에서 사용할 수 있는 API. 모든 클라이언트가 브라우저 환경에서 API를 사용할 수 있어야 합니다.
    단위 테스트할 수 있는 코드. 기대하는 동작을 보장하기 위한 API 단위 테스트를 매우 간단하게 작성할 수 있어야 합니다.
    최소한의 차이. 아키텍처 간의 차이점을 강조하기 위해 몇 가지 모범 사례를 희생하면서까지 샘플 프로젝트 간의 차이점을 최소화하기 위해 최선을 다했습니다. 이 데모는 프로덕션에 바로 사용할 수 있는 시스템을 작성하는 방법을 보여주기 위한 것이 아니라 각 아키텍처를 충분히 이해하는 데 도움이 되도록 설계되었습니다.    `);
    console.log('test', result, typeof result);
    // setPost(result.data.content)
  };

  // export const getUserInfo = () => {
  //   const user = auth.currentUser;

  //   const email = user?.email;
  //   const nickname = user?.displayName;

  //   return { email, nickname };
  // };

  // useEffect(()=>{
  //   const response = getCategories()
  //   console.log('cate' , response)
  // },[])
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const localToken = async() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       return user
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }

  // useEffect(() => {
  //   const user = localStorage.getItem('token');
  //   console.log('userinfo', user);
  //   testAPI();
  // }, []);

  let [currentUser, setUser] = useState(null);

  useEffect(() => {}), [];

  return (
    <>
      <div>
        <button type="button" onClick={testAPI}>
          test api
        </button>
        {/* <div dangerouslySetInnerHTML={{ __html: post }} /> */}
      </div>
    </>
  );
};

export default apiTest;
