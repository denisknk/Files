import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Wrapper } from './components/Wrapper';
import { FileWrapper } from './components/FileWrapper';
import { loadFiles } from '../../../store/actions/files';
import { Loader } from '../../components/Loader';
import { FileItem } from './FileItem';
import { AppState } from '../../../store/configureStore';
import { SearchField } from './components/SearchField';

export const FileList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: AppState) => state.files);
  const [searchText, setSearchText] = useState('');
  const filesIds = data.allIds;
  const files = data.byId;

  useEffect(() => {
    dispatch(loadFiles());
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchText(value);
  }

  const filterFiles = () => {
    return searchText ? filesIds.filter((fileId) => {
      const titleInLowerCase = files[+fileId].title.toLowerCase();
      const searchTextInLowercase = searchText.toLowerCase();

      return titleInLowerCase.includes(searchTextInLowercase);
    }) : filesIds;
  }

  const filteredFiles = filterFiles();

  return (
    <Wrapper>
      {loading && <Loader />}
      <SearchField
        placeholder="Search files"
        type="search"
        value={searchText}
        onChange={handleSearch}
      />
      <FileWrapper>
        {filteredFiles.length > 0 ? filteredFiles.map((fileId) => (
          <FileItem
            key={+fileId}
            title={files[+fileId].title}
            size={files[+fileId].size}
            createdAt={files[+fileId].createdAt}
          />
        )) : error ? (
          <Typography variant="h1">
            Files not found
          </Typography>
        ) : null}
      </FileWrapper>
    </Wrapper>
  );
};
