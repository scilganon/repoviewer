import GitHub from "github-api";

let client = new GitHub();

export const getCommits = () => {
    let repo = client.getRepo('vuejs/vue');
    return repo.listCommits({
        per_page: 50,
    })
};