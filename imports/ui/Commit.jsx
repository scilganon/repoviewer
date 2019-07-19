import React from "react";

export const Commit = ({ data: { sha, commit: { message, author: { date } } } }) => (
    <div style={{ backgroundColor: /\d/.test(sha[sha.length -1]) ? "yellow" : 'inherit' }}>
        <abbr title={sha}><code>{sha.slice(0,6)}</code></abbr> - {date}
        <pre>{message}</pre>
    </div>
);
