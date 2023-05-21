import { useEffect, useRef, useState } from 'react';
import {
  CategoryItemContainer,
  CategoryName,
  CategoryButtonContainer,
  SubmitEditButton,
} from './category-styled';
import { CategoryType } from '@/types/getTypes';
import { CategoryFormType } from '@/types/formTypes';
import * as API from '@/utils/api';

interface Props {
  category: CategoryType;
  getCategories: () => void;
}

const CategoryItem = (props: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');

  const categoryRef = useRef<HTMLInputElement>(null);

  const editCategory = () => {
    setIsEdit(true);
    setCategoryName(props.category.name);
  };

  const submitEdit = async () => {
    if (!categoryName) {
      return categoryRef.current?.focus();
    }
    await API.patch<CategoryFormType>(`/categories/${props.category.id}`, {
      name: categoryName,
    });
    setIsEdit(false);
    props.getCategories();
  };

  const deleteCategory = async () => {
    if (confirm('카테고리를 삭제하시겠습니까?')) {
      await API.delete<CategoryFormType>(`/categories/${props.category.id}`);
      props.getCategories();
    }
  };

  useEffect(() => {
    console.log('cat', props.category);
  }, []);

  return (
    <CategoryItemContainer>
      {isEdit ? (
        <input
          type="text"
          ref={categoryRef}
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
        />
      ) : (
        <CategoryName>{props.category.name}</CategoryName>
      )}

      <CategoryButtonContainer>
        {isEdit ? (
          <>
            <SubmitEditButton type="button" onClick={submitEdit}>
              완료
            </SubmitEditButton>
            <SubmitEditButton type="button" onClick={() => setIsEdit(false)}>
              취소
            </SubmitEditButton>
          </>
        ) : (
          <>
            <SubmitEditButton type="button" onClick={editCategory}>
              편집
            </SubmitEditButton>
            <SubmitEditButton type="button" onClick={deleteCategory}>
              삭제
            </SubmitEditButton>
          </>
        )}
      </CategoryButtonContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
