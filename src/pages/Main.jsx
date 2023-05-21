import { useState } from 'react';

import { Carousel, LoadingModal } from 'components/common';
import { WeatherCard } from 'components/UI';
import Banner from 'components/UI/main/Banner';
import { useAddress, useFilterSidoDust } from 'hooks';
import { sortSidoDust } from 'utils/dust';
import { SIDO_NAMES } from 'constants';

const Main = () => {
  const { address } = useAddress();
  const [tags, setTags] = useState([
    SIDO_NAMES.find(({ title }) => address?.[0].region_1depth_name.includes(title))?.title ?? '서울',
  ]);
  const [sorted, setSorted] = useState({ subject: '', order: '' });
  const { data, isLoading } = useFilterSidoDust(tags);

  const handleRemoveTagClick = sido => setTags(tags.filter(tag => tag !== sido));

  const handleFilterItemClick = sido => {
    if (tags.some(tag => tag === sido.title)) return;

    setTags([...tags, sido.title]);
  };

  const handleSortItemClick = ({ subject, order }) =>
    setSorted(prev => ({
      ...prev,
      subject,
      order,
    }));

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <>
          <Carousel autoplay />
          <Banner
            handleFilterItemClick={handleFilterItemClick}
            handleRemoveTagClick={handleRemoveTagClick}
            handleSortItemClick={handleSortItemClick}
            tags={tags}
          />
          <WeatherCard data={sortSidoDust(sorted, data)} isShow={false} />
        </>
      )}
    </>
  );
};

export default Main;