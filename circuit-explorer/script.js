const views = {
  circuit: {image:'assets/circuit.png', title:'Explore the connections behind an output.', description:'Explore the Basketball cluster and its connections to the selected basketball output token.', alt:'Circuit Explorer showing the Basketball cluster and its connections to the basketball output for the Michael Jordan prompt.'},
  heatmap: {image:'assets/heatmap.png', title:'Inspect features across layers and tokens.', description:'Inspect the Basketball cluster’s feature-position heatmap alongside its circuit graph and feature list.', alt:'Michael Jordan circuit with the Basketball feature-position heatmap and a list of 13 features in the right-hand panel.'}
};
const tabs = [...document.querySelectorAll('[data-view]')];
const img = document.querySelector('#system-image');
function selectView(key, focus = false) {
  const view = views[key];
  tabs.forEach(tab => { const active = tab.dataset.view === key; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; if (active && focus) tab.focus(); });
  img.src = view.image; img.alt = view.alt;
  document.querySelector('#view-title').textContent = view.title;
  document.querySelector('#view-description').textContent = view.description;
  document.querySelector('#view-panel').setAttribute('aria-labelledby', `tab-${key}`);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectView(tab.dataset.view));
  tab.addEventListener('keydown', event => {
    let next;
    if(event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if(event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if(event.key === 'Home') next = 0;
    if(event.key === 'End') next = tabs.length - 1;
    if(next !== undefined){event.preventDefault(); selectView(tabs[next].dataset.view, true);}
  });
});
document.querySelectorAll('[data-jump]').forEach(button => button.addEventListener('click', () => {
  selectView(button.dataset.jump, true); document.querySelector('#system').scrollIntoView({block:'start'});
}));
const dialog = document.querySelector('#image-dialog');
document.querySelector('#enlarge').addEventListener('click', () => {
  const expanded = document.querySelector('#dialog-image'); expanded.src = img.src; expanded.alt = img.alt; dialog.showModal();
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog) dialog.close();});
