import {restaurants} from './Mock/mock.ts';

export function App() {
  return (
    <ul className={'list'}>
      <li>
        <h2>{restaurants[0].name}</h2>
        <h3>Menu:</h3>
        <ul>
          <li>{restaurants[0].menu[0].name}</li>
          <li>{restaurants[0].menu[1].name}</li>
          <li>{restaurants[0].menu[2].name}</li>
        </ul>
        <h3>Reviews:</h3>
        <ul>
          <li><p>{restaurants[0].reviews[0].text}</p></li>
          <li><p>{restaurants[0].reviews[1].text}</p></li>
        </ul>
      </li>
      <li>
        <h2>{restaurants[1].name}</h2>
        <h3>Menu:</h3>
        <ul>
          <li>{restaurants[1].menu[0].name}</li>
          <li>{restaurants[1].menu[1].name}</li>
        </ul>
        <h3>Reviews:</h3>
        <ul>
          <li><p>{restaurants[1].reviews[0].text}</p></li>
          <li><p>{restaurants[1].reviews[1].text}</p></li>
          <li><p>{restaurants[1].reviews[2].text}</p></li>
        </ul>
      </li>
      <li>
        <h2>{restaurants[2].name}</h2>
        <h3>Menu:</h3>
        <ul>
          <li>{restaurants[2].menu[0].name}</li>
          <li>{restaurants[2].menu[1].name}</li>
          <li>{restaurants[2].menu[2].name}</li>
        </ul>
        <h3>Reviews:</h3>
        <ul>
          <li><p>{restaurants[2].reviews[0].text}</p></li>
        </ul>
      </li>
      <li>
        <h2>{restaurants[3].name}</h2>
        <h3>Menu:</h3>
        <ul>
          <li>{restaurants[3].menu[0].name}</li>
          <li>{restaurants[3].menu[1].name}</li>
        </ul>
        <h3>Reviews:</h3>
        <ul>
          <li><p>{restaurants[3].reviews[0].text}</p></li>
          <li><p>{restaurants[3].reviews[1].text}</p></li>
        </ul>
      </li>
    </ul>
  );
}

