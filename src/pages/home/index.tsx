import { Carousel, Heading, Text } from 'grommet';
import { Home as HomeIcon } from 'grommet-icons';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Loader } from '@/core/components/loader';
import { ApiUrl } from '@/core/constants/api-url';
import { AppRoutes } from '@/core/constants/app-routes';
import { QueryKey } from '@/core/constants/query-key';
import { parseUrl } from '@/core/helpers/parse-url';
import { useQuery } from '@/core/hooks/use-query';
import { News } from '@/core/interfaces/news';

import { CarouselContent, CarouselWrapper, Link, Wrapper } from './styled';

const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, loading, query } = useQuery<News[]>({
    method: 'GET',
    query: QueryKey.News,
    api: ApiUrl.Node,
    isQuery: true,
  });

  useEffect(() => {
    query();
  }, [query]);

  const handleToDetail = (id: number) => () => {
    navigate(parseUrl(AppRoutes.NewsDetail, id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <CarouselWrapper>
        <Carousel fill>
          {data.map(({ id, description, title }) => (
            <CarouselContent key={id}>
              <Text>{title}</Text>
              <Text>{description}</Text>
              <Link onClick={handleToDetail(id)}>{t`toDetail`}</Link>
            </CarouselContent>
          ))}
        </Carousel>
      </CarouselWrapper>
      <Heading textAlign="center">{t('homeDesc')}</Heading>
      <HomeIcon size="88px" color="#000" />
    </Wrapper>
  );
};

export { Home };
