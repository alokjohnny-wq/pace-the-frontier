from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
p=Path(__file__).resolve().parent
W,H=1200,630
im=Image.new('RGB',(W,H),'#f5f2e9');d=ImageDraw.Draw(im)
ink='#192f38';green='#17685d';muted='#52636a';line='#cbd2c7'
fontdir=Path('/System/Library/Fonts/Supplemental')
def f(name,size): return ImageFont.truetype(str(fontdir/name),size)
sans='Arial.ttf';bold='Arial Bold.ttf';serif='Georgia.ttf';italic='Georgia Italic.ttf'
d.rectangle((0,0,1200,10),fill=green)
d.text((55,43),'PACE THE FRONTIER',font=f(bold,18),fill=ink)
d.text((860,43),'EVIDENCE AUDIT / 30 SEP 2026',font=f(sans,15),fill=muted)
d.line((55,88,1145,88),fill=line,width=2)
d.text((52,119),'A monster',font=f(serif,91),fill=ink)
d.text((52,215),'duopoly?',font=f(italic,103),fill=green)
d.text((58,359),'Testing the leap from faster models',font=f(sans,29),fill=ink)
d.text((58,402),'to $10 trillion companies.',font=f(sans,29),fill=ink)
d.line((775,131,775,465),fill=line,width=2)
d.text((822,148),'FORECAST UNDER REVIEW',font=f(bold,14),fill=green)
d.text((810,211),'$10T',font=f(serif,98),fill=ink)
d.text((822,335),'for each company',font=f(sans,24),fill=ink)
d.text((822,371),'within 12 months',font=f(sans,24),fill=ink)
d.line((55,514,1145,514),fill=line,width=2)
d.text((57,551),'CAPABILITY   /   COMPETITION   /   VALUATION',font=f(bold,16),fill=green)
d.text((859,551),'A sourced claim-by-claim analysis',font=f(sans,15),fill=muted)
im.save(p/'preview-card.png',optimize=True)
print('Saved 1200 × 630 preview card')
