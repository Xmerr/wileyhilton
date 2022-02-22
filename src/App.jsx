import { Themer } from './helpers/Themer';
import { Home, MainMenu } from '@pages';
import './index.scss';

function App() {
    return (
        <Themer>
            <MainMenu />
            <Home id='me' />
        </Themer>
    );
}

export default App;
