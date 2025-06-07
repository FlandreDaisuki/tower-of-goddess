const MAPPING = Object.freeze({
  '0011': '211',
  '0101': '121',
  '0110': '112',
  '1011': '022',
  '1012': '031',
  '1021': '013',
  '1101': '202',
  '1102': '301',
  '1110': '220',
  '1120': '310',
  '1201': '103',
  '1210': '130',
  '2112': '004',
  '2121': '040',
  '2211': '400',
});

const calculate = () => {
  const emptyValue = document.querySelector('input[name="empty"]:checked')?.value;
  const leftValue = document.querySelector('input[name="left"]:checked')?.value;
  const centerValue = document.querySelector('input[name="center"]:checked')?.value;
  const rightValue = document.querySelector('input[name="right"]:checked')?.value;

  const group = [emptyValue, leftValue, centerValue, rightValue];
  if (group.filter(Boolean).length < group.length) {
    return;
  }
  const outputEl = document.querySelector('#output');
  if(outputEl) {
    outputEl.textContent = MAPPING[group.join('')] ?? '此組合不存在，請重新確認。';
  }
}

for (const inputEl of document.querySelectorAll('input')) {
  inputEl.onchange = calculate;
}
