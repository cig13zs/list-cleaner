const sample = "zebra\napple\nbanana\napple\n\norange\nbanana";

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const statsEl = document.getElementById('output-stats') || document.getElementById('stats');

function process() {
  const txt = inputEl.value;
  const cleaned = ListCleaner.clean(txt, { sort: 'asc' });
  outputEl.value = cleaned;
  const count = cleaned.split('\n').filter(l => l.length > 0).length;
  if (statsEl) statsEl.textContent = `Cleaned & sorted: ${count} unique items`;
}

document.getElementById('btn-run').addEventListener('click', process);
inputEl.addEventListener('input', process);
document.getElementById('btn-sample').addEventListener('click', () => { inputEl.value = sample; process(); });
document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(outputEl.value); alert('Copied clean list!'); });
if (document.getElementById('btn-clear')) document.getElementById('btn-clear').addEventListener('click', () => { inputEl.value = ''; outputEl.value = ''; });
process();
