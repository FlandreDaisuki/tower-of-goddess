const ANSWERS = Object.freeze({
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
  const empty = document.querySelector('input[name="empty"]:checked')?.value ?? '.';
  const left = document.querySelector('input[name="left"]:checked')?.value ?? '.';
  const center = document.querySelector('input[name="center"]:checked')?.value ?? '.';
  const right = document.querySelector('input[name="right"]:checked')?.value ?? '.';

  const pattern = [empty, left, center, right].join('');
  let matchedCount = 0;
  let matchedAns = null;
  for (const [k, v] of Object.entries(ANSWERS)) {
    const re = new RegExp(`^${pattern}$`);
    if(re.test(k)) {
      matchedCount++;
      if(matchedCount === 1) {
        matchedAns = v;
      } else {
        matchedAns = null;
        break;
      }
    }
  }

  const outputEl = document.querySelector('#output');
  if(outputEl) {
    outputEl.textContent = matchedAns ?? '此組合不存在，請重新確認。';
  }
}

for (const inputEl of document.querySelectorAll('input')) {
  inputEl.checked = false;
  inputEl.onchange = calculate;
}
