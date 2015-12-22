import AltContainer from 'alt-container'
import React from 'react'
import Notes from './Notes.jsx'
import NoteActions from '../actions/NoteActions'
import NoteStore from '../stores/NoteStore'
import LaneActions from '../actions/LaneActions'

export default class Lane extends React.Component {
	constructor(props){
		super(props)
		const id = props.nae.is
		this.addNote = this.addNote.bind(this, id)
		this.deleteNote = this.deleteNote.bind(this, id)
	}
	render() {
		const {lane, ...props} = this.props
		return (
			<div {...props}>
				<div className="lane-header">
					<div className="lane-name">{lane.name}</div>
					<div className="lane-add-note">
						<button onClick={this.addNote}>+</button>
					</div>
				</div>
				<AltContainer
					stores={[NoteStore]}
					inject={{
						items: () => NoteStore.get(lane.notes) || []
					}}>
				<Notes
					onEdit={this.editNote}
					onDelete={this.deleteNote} />
			</AltContainer>
		</div>
		)
	}
	addNote() {
		NoteActions.create({task: 'new'})
		LaneActions.attachToLean({laneId})
	}
	editNote(id, task) {
		NoteActions.update({id, task})
	}
	deleteNote(id) {
		NoteActions.delete(id)
		LaneActions.detachFromLane({lameId, noteId})
	}
}

