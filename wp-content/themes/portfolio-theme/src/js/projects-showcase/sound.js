/**
 * A restrained "swish" cue for the Projects showcase — synthesized via Web
 * Audio, not an audio file. Two quick, softly filtered air strokes in
 * close succession (not one sustained whoosh, and nothing tonal) — reads
 * as fabric or paper moving past rather than a UI beep, and stays quiet
 * enough to never feel like it's interrupting the reveal it accompanies.
 * Deliberately self-contained here (not shared with the homepage
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

	const duration = 0.5;
	const length = Math.floor( ctx.sampleRate * duration );
	const buffer = ctx.createBuffer( 1, length, ctx.sampleRate );
	const data = buffer.getChannelData( 0 );

	// Brown-ish noise (each sample leans on the last) rather than raw white
	// noise — white noise's flat spectrum reads as a harsh hiss even once
	// bandpassed; this softens it toward something closer to moving air.
	let last = 0;
	for ( let i = 0; i < length; i++ ) {
		const white = Math.random() * 2 - 1;
		last = ( last + white * 0.15 ) / 1.15;
		data[ i ] = last * 3.2;
	}

	noiseBuffer = buffer;
	return buffer;
}

/** One filtered-noise stroke: a short bandpass sweep with a soft
 * attack/decay envelope. `startAt` / `peakFrequency` let two of these be
 * layered slightly offset to read as "swish, swish" rather than one
 * sound. */
function playStroke( ctx, startAt, peakFrequency, gainPeak ) {
	const duration = 0.26;
	const source = ctx.createBufferSource();
	source.buffer = getNoiseBuffer( ctx );

	const filter = ctx.createBiquadFilter();
	filter.type = 'bandpass';
	filter.Q.setValueAtTime( 0.7, startAt );
	filter.frequency.setValueAtTime( peakFrequency, startAt );
	filter.frequency.exponentialRampToValueAtTime( peakFrequency * 0.4, startAt + duration );

	const gainNode = ctx.createGain();
	gainNode.gain.setValueAtTime( 0.0001, startAt );
	gainNode.gain.exponentialRampToValueAtTime( gainPeak, startAt + 0.035 );
	gainNode.gain.exponentialRampToValueAtTime( 0.0001, startAt + duration );

	source.connect( filter );
	filter.connect( gainNode );
	gainNode.connect( ctx.destination );

	source.start( startAt );
	source.stop( startAt + duration + 0.02 );
}

/** Played once per project-to-project reveal (at the moment the timeline
 * starts, not scrubbed or repeated during it) — see revealTo() in
 * index.js. */
export function playRevealSound() {
	const ctx = getContext();
	if ( ! ctx ) {
		return;
	}

	const now = ctx.currentTime;

	// Two strokes, the second slightly quieter and lower — a coordinated
	// "swish, swish" rather than a doubled-up echo of the same sound.
	playStroke( ctx, now, 2100, 0.055 );
	playStroke( ctx, now + 0.1, 1500, 0.04 );
}
