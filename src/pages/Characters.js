const Character = () => {
    const view = `
    <div class="Charaters-inner">
        <article class="Character-card">
            <img src="image.png" alt="name">
            <h2>Name</h2>
        </article>
        <article class="Charaters-card">
            <h3>Episodes</h3>
            <h3>Status</h3>
            <h3>Species</h3>
            <h3>Gender</h3>
            <h3>Origin</h3>
            <h3>Last Location</h3>
        </article>
    </div>
`;
    return view;
};
export default Character;