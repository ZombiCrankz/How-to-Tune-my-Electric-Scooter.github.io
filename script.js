const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('setupForm');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const resultList = document.getElementById('resultList');
const copyPlan = document.getElementById('copyPlan');
const copyStatus = document.getElementById('copyStatus');

function buildPlan() {
  const model = document.getElementById('model').value.trim();
  const firmware = document.getElementById('firmware').value.trim();
  const goal = document.getElementById('goal').value;
  const checked = [...form.querySelectorAll('input[name="checks"]:checked')].map(el => el.value);
  const goals = {
    reliability: 'Reliability and battery life',
    comfort: 'Smooth acceleration and comfort',
    range: 'Range and efficiency',
    diagnostics: 'Diagnostics and learning'
  };
  const items = [
    model ? `Model recorded: ${model}` : 'Identify the exact model and hardware revision.',
    firmware ? `Firmware / controller recorded: ${firmware}` : 'Record the current firmware and controller version.',
    `Goal: ${goals[goal]}. Prefer manufacturer-approved settings for this goal.`,
    checked.includes('backup') ? 'Backup / recovery plan marked as confirmed.' : 'Before any firmware change, prepare a verified stock backup and recovery method.',
    checked.includes('battery') ? 'Battery and connectors marked as inspected.' : 'Inspect the battery, wiring, connectors and signs of heat or damage.',
    checked.includes('brakes') ? 'Brakes, tyres and lights marked as checked.' : 'Check brakes, tyres, lights and fasteners before riding.',
    checked.includes('rules') ? 'Manufacturer limits and local rules marked as checked.' : 'Verify the manufacturer limits and local road rules.',
    'Save original settings; change only one variable at a time and document the result.',
    'Stop if there is unusual heat, noise, error codes, power loss or unexpected behaviour.'
  ];
  const missing = ['backup','battery','brakes','rules'].filter(v => !checked.includes(v));
  resultTitle.textContent = missing.length ? `${missing.length} safety check(s) remaining` : 'Baseline checklist generated';
  resultText.textContent = missing.length
    ? 'Use this plan as a reminder. Complete the remaining safety checks before modifying settings.'
    : 'All checklist items are marked. This is not a technical approval; verify specifications before making changes.';
  resultList.replaceChildren(...items.map(text => {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }));
  copyStatus.textContent = '';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  buildPlan();
});

copyPlan.addEventListener('click', async () => {
  const text = `${resultTitle.textContent}\n${resultText.textContent}\n\n${[...resultList.querySelectorAll('li')].map(li => `- ${li.textContent}`).join('\n')}`;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = 'Checklist copied.';
  } catch {
    copyStatus.textContent = 'Clipboard access was blocked by the browser. Select and copy the checklist manually.';
  }
});
