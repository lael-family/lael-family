fetch('sites.json')
  .then(res => res.json())
  .then(sites => {
    const container = document.getElementById('site-list');
    sites.forEach(site => {
      const card = document.createElement('div');
      card.className = 'site-card';
      card.innerHTML = `
        <h2>${site.name}</h2>
        <p>${site.url}</p>
        <a href="${site.url}">Visit</a>
      `;
      container.appendChild(card);
    });
  });
