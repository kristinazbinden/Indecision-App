console.log('App.js is running');

const app = {
    title: 'Let the Stars Decide',
    subtitle: 'Test paragraph with dummy text whatever',
    options: []
}

const onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;

        if (option) {
            app.options.push(option);
            renderOptionApp();
            e.target.elements.option.value = '';
        }
};

const onremoveAll = () => {
    app.options.length = 0;
    renderOptionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];
// JSX = JavaScript XML
const renderOptionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Your options are: ' + app.options : 'No options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do></button>
            <button onClick={onremoveAll}>Remove All</button>
            <ul>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}


renderOptionApp();
