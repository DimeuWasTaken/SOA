import './App.css';

const Container = React.lazy(() => import('auth/Container'));

function App() {
    return (
        <div className="App">
            <h1>Storage App</h1>
            <Container />
        </div>
    );
}

export default App;
