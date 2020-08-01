class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Let the Stars Decide</h1>
                <h2>Put your life in the hands of the universe</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>This is an option</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
