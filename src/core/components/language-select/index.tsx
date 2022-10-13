import { Select } from 'grommet';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from '@/core/constants/language';

import { Wrapper } from './styled';
import { Option } from './types';

const LanguageSelect: FC = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] =
    useState<keyof typeof Language>('English');

  const handleChangeLanguage = ({ option: { value, label } }: Option) => {
    setCurrentLanguage(label);
    changeLanguage(value);
  };

  return (
    <Wrapper>
      <Select
        labelKey="label"
        valueLabel={t(currentLanguage)}
        onChange={handleChangeLanguage}
        options={Object.entries(Language).map(([label, value]) => ({
          label: t(label),
          value,
        }))}
      />
    </Wrapper>
  );
};

export { LanguageSelect };
