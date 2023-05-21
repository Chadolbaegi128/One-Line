import { useEffect, useRef, useState } from 'react';
import {
  CategoryModalContainer,
  CategoryModalItem,
  CloseModalButton,
  SubmitEditButton,
} from './category-styled';
import { CategoryType } from '@/types/getTypes';
import { CategoryFormType } from '@/types/formTypes';

interface Props {
  categoryItem?: CategoryType;
  onModalOpenedChange: (isOpened: boolean) => void;
}

const CategoryModal = (props: Props) => {
  const categoryNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('id, name', props.categoryItem);

    if (props.categoryItem && categoryNameRef.current) {
      categoryNameRef.current.value = props.categoryItem.name;
    }
  }, [props]);

  const closeModal = () => {
    props.onModalOpenedChange(false);
  };

  const editCategoryName = () => {
    console.log('edit', props.categoryItem?.id, categoryNameRef.current?.value);
    closeModal();
  };

  return (
    <CategoryModalContainer>
      <CategoryModalItem>
        <CloseModalButton type="button" onClick={closeModal}>
          닫기
        </CloseModalButton>
        <div>
          <input type="text" ref={categoryNameRef} />
        </div>
        <SubmitEditButton type="button" onClick={editCategoryName}>
          완료
        </SubmitEditButton>
      </CategoryModalItem>
    </CategoryModalContainer>
  );
};

export default CategoryModal;
