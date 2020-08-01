console.log('app is running');

const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility Toggle',
    isVisible: false,
    message: 'Secret message'
}

const onShowAndHide = () => {
    app.isVisible = !app.isVisible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowAndHide}>{app.isVisible ? 'Hide Details' : 'Show Details'}</button>
            {app.isVisible && (
                <p>{app.message}</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
