const views = {
  circuit: {image:'assets/circuit.png', title:'Explore the connections behind an output.', description:'Navigate semantic clusters and inspect their connections to the selected output token.', alt:'Circuit Explorer showing semantic clusters, a capital-city circuit graph, and feature descriptions for the Dallas prompt.'},
  heatmap: {image:'assets/heatmap.png', title:'Inspect features across layers and tokens.', description:'Connect a feature’s position in the model with its descriptions, activations, and associations.', alt:'Feature inspection for a Beijing output, with a layer-by-token heatmap and feature evidence.'},
  steering: {image:'assets/steering.png', title:'Compare a hypothesis with an intervention.', description:'Set token-level interventions and compare baseline and steered outputs in the same workspace.', alt:'Steering experiment comparing baseline and steered outputs for the Dallas prompt.'}
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
