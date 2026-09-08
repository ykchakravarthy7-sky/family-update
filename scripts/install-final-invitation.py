from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
page = root / 'index.html'
source = page.read_text(encoding='utf-8')
start = source.index('<section id="final" class="screen">')
end = source.index('</section>', start) + len('</section>')
old = source[start:end]
assert 'id="replayBtn"' in old and 'id="finalFill"' in old, 'Unexpected final screen; refusing to replace it'
assert 'id="startBtn"' in source and 'id="alertFill"' in source, 'Original reveal sequence is missing'

replacement = '''<section id="final" class="screen" aria-label="Family update complete">
  <div class="final-artwork">
    <img src="assets/final-invitation.png" alt="" width="1024" height="1792" decoding="async">
    <div class="visually-hidden">
      <h1>New family member identified. You're going to be grandparents!</h1>
      <p>Family upgrade successful. Grandmother, Grandfather, Mother, Father and Uncle.</p>
      <p>Baby installing, 10 percent. Installation has started successfully. New family member loading with love.</p>
      <p>Estimated arrival: Month / Year.</p>
    </div>
    <div class="visually-hidden" role="progressbar" aria-label="Baby installing" aria-valuemin="0" aria-valuemax="100" aria-valuenow="10"><span id="finalFill" class="fill"></span></div>
    <button class="artwork-replay" id="replayBtn" aria-label="Replay surprise"><span class="visually-hidden">Replay surprise</span></button>
  </div>
</section>'''
source = source[:start] + replacement + source[end:]
stylesheet = '<link rel="stylesheet" href="styles/final-artwork.css">'
if stylesheet not in source:
    assert '</head>' in source
    source = source.replace('</head>', stylesheet + '</head>', 1)
assert source.count('id="final"') == 1
assert source.count('id="finalFill"') == 1
assert source.count('id="replayBtn"') == 1
assert source.count('id="startBtn"') == 1
assert source.count('id="alertFill"') == 1
assert 'assets/baby-mascot.png' in old, 'Original mascot was unexpectedly changed'
assert 'const timing=' in source and 'warning:4000' in source
page.write_text(source, encoding='utf-8')
print('Updated final screen only; original sequence and timing retained.')
