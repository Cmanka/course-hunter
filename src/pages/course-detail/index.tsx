import { Box, Image } from 'grommet';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getDetails } from '@/shared/helpers/get-card-details';
import { courseById } from '@/shared/recoil/course';

import {
  Description,
  InfoLabel,
  InfoValue,
  InfoWrapper,
  Owner,
  Rate,
  Title,
  TopWrapper,
  Wrapper,
} from './styled';

const CourseDetail: FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const course = useRecoilValue(courseById({ id }));

  return (
    <Wrapper>
      <TopWrapper>
        <Box>
          <Title>{course.title}</Title>
          <Description>{course.description}</Description>
          <Rate>
            +{course.rated.like}/-{course.rated.dislike}
          </Rate>
        </Box>
        <Owner>{course.publisher__username}</Owner>
      </TopWrapper>
      <InfoWrapper>
        <Image src={course.preview} />
        <Box direction="row" gap="20px">
          {getDetails(course).map(({ label, value }) => (
            <Box key={label}>
              <InfoLabel>{t(label)}</InfoLabel>
              <InfoValue>{value}</InfoValue>
            </Box>
          ))}
        </Box>
      </InfoWrapper>
    </Wrapper>
  );
};

export { CourseDetail };
