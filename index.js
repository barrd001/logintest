const guideList = document.querySelector('#guides');

// setup guides
const setupGuides = (data) => {

    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        console.log(guide);
        const li = `
        <li>
        <div>${guide.title}</div>
        <div>${guide.content}</div>
        </li>
        `;
        html += li;
        console.log(html); 
    });
     guideList.innerHTML = html;
}