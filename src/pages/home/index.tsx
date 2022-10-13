import { Carousel, Heading, Image } from 'grommet';
import { Home as HomeIcon } from 'grommet-icons';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ApiUrl } from '@/core/constants/api-url';
import { QueryKey } from '@/core/constants/query-key';
import { useQuery } from '@/core/hooks/use-query';
import { News } from '@/core/interfaces/news';

import { CarouselWrapper, Wrapper } from './styled';

const Home: FC = () => {
  const { t } = useTranslation();
  const { query } = useQuery<News[]>({
    method: 'GET',
    query: QueryKey.News,
    api: ApiUrl.Node,
  });

  useEffect(() => {
    query().then((news) => {
      console.log(news);
    });
  }, [query]);

  return (
    <Wrapper>
      <CarouselWrapper>
        <Carousel fill>
          <Image
            fit="cover"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
        </Carousel>
      </CarouselWrapper>
      <Heading textAlign="center">{t('homeDesc')}</Heading>
      <HomeIcon size="88px" color="#000" />
    </Wrapper>
  );
};

export { Home };
