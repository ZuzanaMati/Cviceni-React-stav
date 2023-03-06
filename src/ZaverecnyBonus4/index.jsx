import React, { useState } from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
	let [vstup1, setVstup1] = useState(0)
	let [vstup2, setVstup2] = useState(0)

	return (
		<>
			<input
				type="number"
				defaultValue="0"
				onChange={(e) => setVstup1(Number(e.target.value))} /> +{' '}

			<input
				type="number"
				defaultValue="0"
				onChange={(e) => setVstup2(Number(e.target.value))} /> = <output>{vstup1 + vstup2}</output>
		</>
	)
}
