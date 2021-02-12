let etoile = '*'
let espace = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let pyramide = ''
let end = 14
let start = 1

for (let i = 0; i < 16; i++) {
  console.log(pyramide + espace.join(' ') + pyramide)
  pyramide += etoile
  espace.pop()
}