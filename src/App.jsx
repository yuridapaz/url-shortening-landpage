/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import Theme from './Theme';
import { BodyContainer, BodyContent, ShorteningLinksContainer } from './App.styled';
import Header from './styles/Header';
import Form from './components/Form';
import ListShorteningItem from './components/ListShorteningItem';
import AdvancedStatistics from './styles/AdvancedStatistics';
import BoostToday from './styles/BoostToday';
import Description from './styles/Description';
import Footer from './styles/Footer';
import { shorteningClient as getShorteningClient } from './services/shorteningClient';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [checkInputValue, setCheckInputValue] = useState('');
  const [shorteningUrlList, setShorteningUrlList] = useState([]);
  const shorteningClient = getShorteningClient();

  const handleSubmit = async (url) => {
    if (checkValidUrl(url)) {
      const shortUrlObj = await shorteningClient.getShorteningLink(url);
      checkUrlListItem(shortUrlObj);
      setInputValue('');
      setCheckInputValue('');
      return;
    }
    setCheckInputValue(true);
  };

  const checkValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const checkUrlListItem = (shortUrlObj) => {
    if (!shorteningUrlList.find((elem) => elem.code === shortUrlObj.code)) {
      const newList = [...shorteningUrlList, shortUrlObj];
      setShorteningUrlList(newList);
    }
  };

  return (
    <Theme>
      <BodyContainer>
        <Header />
        <Description />
        <BodyContent>
          <Form
            onClick={() => handleSubmit(inputValue)}
            inputValue={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            validateUrl={checkInputValue}
          />

          <ShorteningLinksContainer>
            {shorteningUrlList.map((item) => {
              return <ListShorteningItem fullUrl={item.original_link} shortUrl={item.short_link} />;
            })}
          </ShorteningLinksContainer>

          <AdvancedStatistics />
          <BoostToday />
        </BodyContent>
        <Footer />
      </BodyContainer>
    </Theme>
  );
}

export default App;
