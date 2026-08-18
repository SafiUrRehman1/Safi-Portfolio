/**
 * A restrained "swipe" cue for the Projects showcase — synthesized via Web
 * Audio (filtered noise with a sweeping bandpass center frequency), not an
 * audio file. Reads as a soft whoosh of air rather than a click/beep, and
 * is deliberately self-contained here (not shared with the homepage
 * workspace's src/js/workspace/sound.js) so this change stays scoped to
 * the Projects page only.
 */

let audioCtx = null;
let noiseBuffer = null;

function getContext() {
	const AudioContextClass = window.AudioContext || window.webkitAudioContext;
	if ( ! AudioContextClass ) {
		return null;
	}

	if ( ! audioCtx ) {
		audioCtx = new AudioContextClass();
	}

	if ( audioCtx.state === 'suspended' ) {
		audioCtx.resume();
	}

	return audioCtx;
}

function getNoiseBuffer( ctx ) {
	if ( noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate ) {
		return noiseBuffer;
	}

	const duration = 0.3;
	const length = Math.floor( ctx.sampleRate * duration );
	const buffer = ctx.createBuffer( 1, length, ctx.sampleRate );
	const data = buffer.getChannelData( 0 );
	for ( let i = 0; i < length; i++ ) {
		data[ i ] = Math.random() * 2 - 1;
	}

	noiseBuffer = buffer;
	return buffer;
}

/** Played once per project-to-project transition (never continuously
 * during the scrub itself) — see the dominant-change check in index.js. */
export function playSwipeSound() {
	const ctx = getContext();
	if ( ! ctx ) {
		return;
	}

	const now = ctx.currentTime;
	const duration = 0.22;

	const source = ctx.createBufferSource();
	source.buffer = getNoiseBuffer( ctx );

	const filter = ctx.createBiquadFilter();
	filter.type = 'bandpass';
	filter.Q.setValueAtTime( 0.9, now );
	filter.frequency.setValueAtTime( 2400, now );
	filter.frequency.exponentialRampToValueAtTime( 500, now + duration );

	const gainNode = ctx.createGain();
	gainNode.gain.setValueAtTime( 0.0001, now );
	gainNode.gain.exponentialRampToValueAtTime( 0.09, now + 0.02 );
	gainNode.gain.exponentialRampToValueAtTime( 0.0001, now + duration );

	source.connect( filter );
	filter.connect( gainNode );
	gainNode.connect( ctx.destination );

	source.start( now );
	source.stop( now + duration + 0.02 );
}
