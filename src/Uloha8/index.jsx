import React, { useState } from 'react'

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
	let [prsi, setPrsi] = useState("mozna")

	let handleClick = () => {
		if (prsi === "mozna") {
			setPrsi("ano")
		} else if (prsi === "ano") {
			setPrsi("ne")
		} else {
			setPrsi("mozna")
		}
	}

	return (
		<>
			<h3>Prší v Brně: {prsi} </h3>
			<button
				onClick={handleClick}>
				změnit</button>
		</>
	)
}
