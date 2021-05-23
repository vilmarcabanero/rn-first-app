import React, { useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'

const App = () => {
	const [outputText, setOutputText] = useState('Hello G! I like you!')

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{outputText}</Text>
			<Button
				title='Can I ask you something?'
				onPress={() => setOutputText('Will you be my girlfriend?')}
			/>

			<Button
				style={styles.button}
				title='Refresh'
				onPress={() => setOutputText('Hello G! I like you!')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	text: {
		color: 'steelblue',
		marginBottom: 5,
		fontSize: 16,
	},
})

export default App
