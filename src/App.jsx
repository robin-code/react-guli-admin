import {Button, message} from 'antd';


function App() {

    const hello = () => {
        message.info('This is a normal message');
    }
    return (
        <>
            <Button type="primary" onClick={hello}>Button</Button>
        </>
    )
}

export default App
