const chips = Array.from(document.querySelectorAll('.chip'));
const meterFill = document.getElementById('meterFill');
const signalText = document.getElementById('signalText');

const signalModes = [
  {
    label: 'Neural Sync',
    width: '68%',
    text: 'Neural coherence is balanced and the interface remains calm under load.'
  },
  {
    label: 'Echo Pulse',
    width: '82%',
    text: 'Pulse feedback intensifies while preserving clarity and signal fidelity.'
  },
  {
    label: 'Bio Glow',
    width: '94%',
    text: 'Bioluminescent layers bloom across the interface without disrupting focus.'
  }
];

function updateSignal(index) {
  const mode = signalModes[index];
  chips.forEach((chip, chipIndex) => {
    chip.classList.toggle('active', chipIndex === index);
  });

  meterFill.style.width = mode.width;
  signalText.textContent = mode.text;
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    updateSignal(Number(chip.dataset.index));
  });
});

updateSignal(0);

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));
