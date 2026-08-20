/**
 * A restrained "reveal" cue for the Projects showcase — synthesized via Web
 * Audio, not an audio file. The transition it pairs with is no longer a
 * lateral swipe but a fade/scale/drift reveal, so the sound follows suit:
 * a brief filtered-noise "air" transient (the outgoing scene giving way)
 * immediately layered with a soft, slightly descending sine tone (the
 * incoming scene settling into place) — read as one coordinated arrival
 * rather than a whoosh sliding past. Deliberately self-contained here (not
 * shared with the homepage workspace's src/js/workspace/sound.js) so this
 * change stays scoped to the Projects page only.
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

	const duration = 0.2;
	const length = Math.floor( ctx.sampleRate * duration );
	const buffer = ctx.createBuffer( 1, length, ctx.sampleRate );
	const data = buffer.getChannelData( 0 );
	for ( let i = 0; i < length; i++ ) {
		data[ i ] = Math.random() * 2 - 1;
	}

	noiseBuffer = buffer;
	return buffer;
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

	// Air transient: short, high, fading fast — reads as the outgoing scene
	// giving way rather than a sustained whoosh.
	const noiseDuration = 0.14;
	const noiseSource = ctx.createBufferSource();
	noiseSource.buffer = getNoiseBuffer( ctx );

	const noiseFilter = ctx.createBiquadFilter();
	noiseFilter.type = 'bandpass';
	noiseFilter.Q.setValueAtTime( 0.8, now );
	noiseFilter.frequency.setValueAtTime( 2000, now );
	noiseFilter.frequency.exponentialRampToValueAtTime( 900, now + noiseDuration );

	const noiseGain = ctx.createGain();
	noiseGain.gain.setValueAtTime( 0.0001, now );
	noiseGain.gain.exponentialRampToValueAtTime( 0.05, now + 0.012 );
	noiseGain.gain.exponentialRampToValueAtTime( 0.0001, now + noiseDuration );

	noiseSource.connect( noiseFilter );
	noiseFilter.connect( noiseGain );
	noiseGain.connect( ctx.destination );

	noiseSource.start( now );
	noiseSource.stop( now + noiseDuration + 0.02 );

	// Settle tone: soft sine, gently descending — reads as the incoming
	// scene arriving and coming to rest, timed to land under the visual's
	// own settle rather than the initial motion.
	const toneStart = now + 0.03;
	const toneDuration = 0.32;
	const oscillator = ctx.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime( 420, toneStart );
	oscillator.frequency.exponentialRampToValueAtTime( 250, toneStart + toneDuration );

	const toneFilter = ctx.createBiquadFilter();
	toneFilter.type = 'lowpass';
	toneFilter.frequency.setValueAtTime( 1400, toneStart );

	const toneGain = ctx.createGain();
	toneGain.gain.setValueAtTime( 0.0001, toneStart );
	toneGain.gain.exponentialRampToValueAtTime( 0.08, toneStart + 0.05 );
	toneGain.gain.exponentialRampToValueAtTime( 0.0001, toneStart + toneDuration );

	oscillator.connect( toneFilter );
	toneFilter.connect( toneGain );
	toneGain.connect( ctx.destination );

	oscillator.start( toneStart );
	oscillator.stop( toneStart + toneDuration + 0.03 );
}
