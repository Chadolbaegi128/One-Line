import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import {
  WritePostContainer,
  SubmitButtonContainer,
  TitleInput,
  ContentTextArea,
  SubmitButton,
  DeleteButton,
  SelectAndButtonsContainer,
  CategorySelectWrapper,
  SummaryContainer,
  SummaryButtonWrapper,
  SummaryTextarea,
} from './write-post-styled';
import { Spinner } from '../common/spinner';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Editor, IAllProps as EditorProps } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import * as API from '@/utils/api';
import { getUserInfo } from '@/utils/util';
import { CategoryType, PostType } from '@/types/getTypes';
import { CategoryFormType, PostFormType } from '@/types/formTypes';
import axios from 'axios';

const EditorDynamic = dynamic(() => import('./Editor'), {
  ssr: false,
});

const EditorForwardRef = forwardRef(
  (props: EditorProps, ref: ForwardedRef<Editor>) => {
    return <EditorDynamic {...props} forwardedRef={ref} />;
  }
);
EditorForwardRef.displayName = 'Editor';

interface Props {
  isEdit?: Boolean;
}

interface Option {
  id: string | undefined;
  value: string | undefined;
}

const WritePost = ({ isEdit }: Props) => {
  const [post, setPost] = useState<PostType>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postId, setPostId] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<TinyMCEEditor | null>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    console.log('edit', isEdit);
    if (router.isReady && isEdit) {
      const { id } = router.query;
      id && getPost(id);
      setPostId(id);
      // titleRef.current && (titleRef.current.value = '수정 타이틀' + id);
      // setEditContent('edit');
    }
  }, [router, isEdit]);

  useEffect(() => {
    getCategories();
    console.log('cate', categories);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = categories.find(option => option.name === selectedValue);
    setSelectedOption({ id: selected?.id, value: selected?.name });
    console.log('selectedOption', selectedOption);
  };

  const getPost = async (id: string) => {
    const response = await API.get<PostType>(`/posts/${id}`);
    console.log('category response : ', response.status);
    setPost(response.data.data);
  };

  useEffect(() => {
    if (post) {
      titleRef.current && (titleRef.current.value = post.title);
      summaryRef.current && (summaryRef.current.value = post.summary);
      if (post.Category) {
        setSelectedOption({ id: post.Category.id, value: post.Category.name });
      }
    }
  }, [post]);

  const getCategories = async () => {
    const response = await API.get<CategoryType>('/categories');
    console.log('category response : ', response);
    setCategories(response.data.data);
  };

  const getModel = async (data: string) => {
    const jsonData = JSON.stringify({
      text: data,
    });

    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://kdt-ai6-team10.elicecoding.com:5000/summarize',
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('res', response);
      const summary = response.data.summary;
      summaryRef.current && (summaryRef.current.value = summary.trim());
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSummary = async () => {
    const contentText = contentRef.current?.getBody().textContent;
    console.log('text : ', contentText);

    if (!contentText || contentText.length < 50) {
      alert('내용을 50자 이상 입력해주세요');
    } else {
      await getModel(contentText);
    }
  };

  const handleSubmit = async (mode: string) => {
    const title = titleRef.current?.value;
    const content = contentRef.current?.getContent();
    const summary = summaryRef.current?.value;

    if (!title) {
      alert('제목을 입력하세요');
      titleRef.current?.focus();
      return;
    }
    if (!summary) {
      alert('요약을 입력하세요');
      summaryRef.current?.focus();
      return;
    }
    if (!content) {
      alert('내용을 입력하세요');
      contentRef.current?.focus();
      return;
    }

    console.log('title : ', title);
    console.log('content : ', content);
    console.log('summary : ', summary);
    console.log('option : ', selectedOption);

    // const data = { title, content, summary };
    // if(selectedOption) {
    //   data.categoryId
    // }

    if (mode === 'edit') {
      const response = await API.patch<PostFormType>(`/posts/${postId}`, {
        title,
        content,
        summary,
        categoryId: selectedOption?.id,
      });
      console.log('post response : ', response);
    }
    if (mode === 'create') {
      const response = await API.post<PostFormType>('/posts', {
        title,
        content,
        summary,
        categoryId: selectedOption?.id,
      });
      console.log('post response : ', response);
    }

    router.push('/')
  };

  const handleDelete = async () => {
    if (confirm('게시글을 삭제하시겠습니까?')) {
      const response = await API.delete<PostFormType>(`/posts/${postId}`);
      console.log('delete response : ', response);
      router.push(`/`);
    }
  };

  const goback = () => {
    router.back();
  };

  return (
    <WritePostContainer>
      <SelectAndButtonsContainer>
        <CategorySelectWrapper>
          <select
            value={selectedOption?.value || ''}
            onChange={handleSelectChange}
          >
            <option value="" className="defaultSelect">
              ---카테고리---
            </option>
            {categories &&
              categories?.map(option => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
          </select>
        </CategorySelectWrapper>

        {isEdit ? (
          <SubmitButtonContainer>
            <SubmitButton type="button" onClick={() => handleSubmit('edit')}>
              완료
            </SubmitButton>
            <DeleteButton type="button" onClick={handleDelete}>
              삭제
            </DeleteButton>
          </SubmitButtonContainer>
        ) : (
          <SubmitButtonContainer>
            <SubmitButton type="button" onClick={() => handleSubmit('create')}>
              저장
            </SubmitButton>
            <DeleteButton type="button" onClick={goback}>
              취소
            </DeleteButton>
          </SubmitButtonContainer>
        )}
      </SelectAndButtonsContainer>
      <TitleInput
        name="title"
        placeholder="제목을 입력하세요"
        type="text"
        ref={titleRef}
        maxLength={50}
      />
      <SummaryContainer>
        <SummaryButtonWrapper>
          {isLoading ? (
            <>
              <Spinner />
              <span>요약 추천 받는 중</span>
            </>
          ) : (
            <>
              <Image
                src="/images/lightbulb.svg"
                alt="한 줄 요약 추천받기"
                width="25"
                height="25"
              />
              <button type="button" onClick={handleSummary}>
                한 줄 요약 추천받기
              </button>
            </>
          )}
        </SummaryButtonWrapper>
        <SummaryTextarea
          ref={summaryRef}
          maxLength={200}
          placeholder="한 줄 요약을 입력하세요 (내용이 50자 이상일 때는 요약 추천을 받아보세요)"
        />
      </SummaryContainer>
      <ContentTextArea>
        <EditorForwardRef
          onInit={(evt, editor) => {
            contentRef.current = editor;
          }}
          initialValue={post?.content || ''}
          init={{
            height: '100%',
            placeholder: '내용을 입력하세요',
            font_family_formats: 'Noto Sans KR',
            plugins: 'lists link paste codesample emoticons',
            menubar: 'format',
            toolbar:
              'undo redo | blocks | formatselect | bold italic | emoticons codesample link | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
            image_title: false,
            paste_data_image: false,
          }}
        />
      </ContentTextArea>
    </WritePostContainer>
  );
};

export default WritePost;
