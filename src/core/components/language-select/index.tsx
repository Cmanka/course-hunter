import { Language } from 'core/constants/language';
import { Select } from 'grommet';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Option } from './types';

const LanguageSelect: FC = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] =
    useState<keyof typeof Language>('Russian');

  const handleChangeLanguage = ({ option: { value, label } }: Option) => {
    setCurrentLanguage(label);
    changeLanguage(value);
  };

  return (
    <Select
      labelKey="label"
      valueLabel={t(currentLanguage)}
      onChange={handleChangeLanguage}
      options={Object.entries(Language).map(([label, value]) => ({
        label: t(label),
        value,
      }))}
    />
  );
};

export { LanguageSelect };