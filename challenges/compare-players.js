const players = [
	{
		last_name: 'Lillard',
		id: '23432_234',
		fppg: 34.2132,
		first_name: 'Damian'
	},
		{
		last_name: 'James',
		id: '23324_454',
		fppg: 29.2132,
		first_name: 'LeBron'
	},
		{
		last_name: 'Lowry',
		id: '16905_164',
		fppg: 24.32,
		first_name: 'Kyle'
	},
		{
		last_name: 'Green',
		id: '89303_330',
		fppg: 14.22,
		first_name: 'Draymond'
	},
	{
		last_name: 'Whiteside',
		id: '89431_565',
		fppg: 21.9043,
		first_name: 'Hassan'
	},
	{
		last_name: 'Curry',
		id: '68928_001',
		fppg: 32.6743,
		first_name: 'Stephen'
	},
]

function getRandomNumber(playersCount) {
	return Math.floor(Math.random() * playersCount);
}

function getPlayerPair(players) {
	let playerOne = getRandomNumber(players.length);
	let playerTwo = getRandomNumber(players.length);
  
	while (playerOne === playerTwo) {
		return getPlayerPair(players);
	}
	return [players[playerOne], players[playerTwo]];
}

function checkIfObjKeysMatch(obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function checkIfPairExists(pair, playersCompareArray) {
  let pairsExist = false;
	playersCompareArray.map(function(playersArray) {
		const doesPlayerOneExist = checkIfObjKeysMatch(playersArray[0], pair[0]) || checkIfObjKeysMatch(playersArray[1], pair[0]);
		const doesPlayerTwoExist = checkIfObjKeysMatch(playersArray[0], pair[1]) || checkIfObjKeysMatch(playersArray[1], pair[1]);

		if (doesPlayerOneExist && doesPlayerTwoExist) {
			pairsExist = true;
		}
	});
	return pairsExist;
}

function getPlayersToCompare(players, playersToCompareArray = []) {
	let arr = playersToCompareArray;
	while (arr.length < 5) {
		let playersPair = getPlayerPair(players);
		if (arr.length >= 1) {
			let doesPlayersPairExist = checkIfPairExists(playersPair, arr);
			if (doesPlayersPairExist) {
				return getPlayersToCompare(players, arr);
			} else {
				arr.push(playersPair);
			}
		} else {
			arr.push(playersPair);
		}
	}

	return arr;
}

function comparePlayers(a, b) {
	return a.fppg > b.fppg ? a : b;
}

/**
 * @description Primary function to gather pairs of players to compare
 * Each pair must be unique
 * Runs comparison and returns players with the most point among the pair
 * @param {Object<Array>} players 
 * @returns {Object<Array>}
 */
function getTopScoringPlayers(players) {
	const playersToCompare = getPlayersToCompare(players);
  // console.log(playersToCompare)
  return playersToCompare.map((players) => {
    return comparePlayers(players[0], players[1]);
  });
}

console.log(getTopScoringPlayers(players))