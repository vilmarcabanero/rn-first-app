import React, { useState } from 'react'
import * as RN from 'react-native'
import styled from 'styled-components'

const App = () => {
	const [outputText, setOutputText] = useState('Hello G! I like you!')

	return (
		<RN.View style={styles.container}>
			<Text>{outputText}</Text>
			<RN.Button
				title='Can I ask you something?'
				onPress={() => setOutputText('Will you be my girlfriend?')}
			/>
		</RN.View>
	)
}

const styles = RN.StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

const Text = styled(RN.Text)`
	color: steelblue;
	font-size: 16px;
	margin-bottom: 5px;
`

export default App
