//CodingwCal - Github Strudel Harp Harmonies
setcps(.39)
swing(.3)

let drums =
  stack(
    s("bd ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("~ ~ ~ ~ mt ~ ~ ~"),
    s("~ ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ ~ ~ ~ ~ ~ ~"),
    s("hh ~ hh ~ hh rim ~ hh"),
    s("rim ~ rim ~ rim ~ rim ~")
  )

let drumsTwo =
  stack(
    s("bd ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ sd ~ ~ ~ sd ~"),
    s("~ ~ ~ ~ mt ~ ~ ~"),
    s("~ ~ ~ ~ bd ~ ~ ~"),
    s("~ ~ ~ ~ ~ ~ ~ ~"),
    s("hh ~ hh ~ hh rim*2 ~ hh"),
    s("rim ~ rim ~ rim ~ rim ~")
  )

let chords =
  note("<[f3, a3, c4, e4]*2 [g3, c4, d4, f4] [e3, g3, b3, d4]*2 [a3, c4, e4, g4]*4>")
    .sound("piano") 
    .slow(1)
    .delay(.3)
    ._pianoroll()
let altChords =
    note("<[f3, a4, c4, e4, f4, f5, f6] [a3, g4, c4, d4, a4] [e3, g4, b4, d4, e4] [e3, e4, a4, c5, e5, g5]*4>")
    .sound("piano") 
    .slow(1)
    .delay(.2)
    ._pianoroll()
let harp =
  note("<[f3 a3 c4 e4 a3 c4 f4 c4] [g3 c4 d4 f4 a3 c4 a4 e4] [e3 g3 b3 d4 a3 c4 e4 a4] [a3 c4 e4 g4 a3 c4 e4 d4]>")
  .sound("harp").lpf(7000)
  .fast(2)
  .delay(.20)
  .gain(1.6)
  ._pianoroll()

let harp2 =
  note("<[a4 c5 e5 g5, g6] [a4 b4 d4 e5] [g4 b4 d5 a5, g6 g7] [a4 c5 e5 d5, a5]>")
    .sound("harp")
    .gain(1.5)
    .fast(2)
    .delay(.1)
    .release(.12)
    .scope()
    ._pianoroll()

let bass =
  note("<f2 ~ g2 ~ e1 ~ a1 ~>")
    .sound("gm_fretless_bass").lpf(800)
    .delay(.22)
    ._pianoroll()
let sub =
  note("<f1 ~ g1 ~ e1 ~ a0 ~>")
    .sound("bass")
    .gain(.3)
    .lpf(250)
    ._pianoroll()
let lead =
  note("<a4 ~ c5 ~ ~ g4 ~ e4>")
    .sound("flute")
    .gain(.55)
    .room(.25)
    .delay(.22)
    ._pianoroll()
let lead2 =
  note("<~ e5 ~ ~ d5 ~ c5 ~>")
    .sound("flute")
    .gain(.35)
    .room(.2)
    .delay(.15)
    ._pianoroll()
let texture =
  s("white")
    .gain(.01)
    .slow(8)

arrange(
  [2, stack(chords, texture)],
  [8, stack(chords, drums, bass, texture)],
  [4, stack(chords, drums, bass, harp, texture)],
  [8, stack(drumsTwo, bass, sub, altChords, harp2, lead, lead2, texture)]
)
