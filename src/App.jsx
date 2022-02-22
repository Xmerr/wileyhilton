import { Themer } from './helpers/Themer';
import { About, Contact, Home, MainMenu } from '@pages';
import './index.scss';

function App() {
    return (
        <Themer>
            <MainMenu />
            <Home id='me' />
            <About id='about' />
            <Contact id='contact' />
        </Themer>
    );
}

export default App;
