import { Box, Image } from 'grommet';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Loader } from '@/shared/components/loader';
import { QueryKey } from '@/shared/constants/query-key';
import { getDetails } from '@/shared/helpers/get-card-details';
import { parseUrl } from '@/shared/helpers/parse-url';
import { useQuery } from '@/shared/hooks/use-query';
import { Course } from '@/shared/interfaces/course';

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
  const { data, loading } = useQuery<Course>({
    method: 'GET',
    query: parseUrl(QueryKey.CourseDetail, id),
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <TopWrapper>
        <Box>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          <Rate>
            +{data.rated.like}/-{data.rated.dislike}
          </Rate>
        </Box>
        <Owner>{data.publisher__username}</Owner>
      </TopWrapper>
      <InfoWrapper>
        <Image src={data.preview} />
        <Box direction="row" gap="20px">
          {getDetails(data).map(({ label, value }) => (
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
