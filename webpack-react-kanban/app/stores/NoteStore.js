import uuid from 'node-uuid'
import alt from '../lib/alt'
import NoteActions from '../actionsNoteActions'

class NoteStore {
	constructor() {
		this.bindActions(NoteActions)
		this.notes = []
	}
	this.exportPublicMethods({
		get: this.get.bind(this)
	})
	get(ids) {
		return (ids || []).map(
			(id) => this.notes.filter((note) => node.id === id)
		).filter((a) => a).map((a) => a[0])
	}
}

export default alt.createStore(NoteStore, 'NoteStore')

