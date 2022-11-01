import { Box, Button, Image, Text } from 'grommet';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/shared/constants/app-routes';
import { parseUrl } from '@/shared/helpers/parse-url';
import { Course } from '@/shared/interfaces/course';

import { ProductInfo, Wrapper } from './styled';

const CourseCard: FC<Course> = ({ id, preview, title, description }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleToCourse = () => {
    navigate(parseUrl(AppRoutes.CoursesDetail, id));
  };

  return (
    <Wrapper>
      <Image src={preview} />
      <ProductInfo>
        <Box>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </Box>
        <Button label={t`view`} primary onClick={handleToCourse} />
      </ProductInfo>
    </Wrapper>
  );
};

export { CourseCard };
