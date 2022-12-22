import React from 'react';
import SearchPage from '@theme-original/SearchPage';

export default function SearchPageWrapper(props) {
  return (
    <div className="search-page-wrapper">
      <SearchPage {...props} />
    </div>
  );
}
