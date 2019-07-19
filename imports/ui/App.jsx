import React from 'react';
import { getCommits } from "/imports/actions/github";
import groupBy from "lodash/groupBy";
import { Commit } from "./Commit";

class App extends React.Component {
    state = {
        grouped: {},
        authors: [],
        author: null,
    };

    componentDidMount() {
        getCommits().then(({ data: commits }) => {
            const grouped = groupBy(commits, 'author.login');

            this.setState({
                grouped,
                authors: Object.keys(grouped),
            });
        });
    }

    chooseCommitsByAuthor = (author) => {
        this.setState({ author });
    };

    render(){
        return (
            <div>
                <h1>Welcome to RepoViewer!</h1>

                <h3>Authors:</h3>
                <ol>
                    {this.state.authors.map((author) => (
                        <li key={author}>
                            <a href={`#${author}`} onClick={() => this.chooseCommitsByAuthor(author)}>
                                {author}
                            </a>
                        </li>
                    ))}
                </ol>

                {this.state.author && (
                    <>
                        <h3>Commits</h3>
                        <ol>
                            {this.state.grouped[this.state.author].map((commit) => (
                                <li key={commit.sha} >
                                    <Commit data={commit} />
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </div>
        );
    }
}

export default App;
