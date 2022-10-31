import { Image, Text } from 'grommet';
import React, { FC } from 'react';

import { Course } from '@/core/interfaces/course';

import { ProductInfo, Wrapper } from './styled';

const CourseCard: FC<Course> = ({ preview, title, description }) => {
  return (
    <Wrapper>
      <Image src={preview} />
      <ProductInfo>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </ProductInfo>
    </Wrapper>
  );
};

export { CourseCard };
