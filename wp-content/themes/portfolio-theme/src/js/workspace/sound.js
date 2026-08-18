/**
 * Restrained, synthesized UI sound for the workspace scene — no audio
 * assets to source/license/host, just short Web Audio tones shaped to be
 * soft rather than a beep/notification-style sound. Two related but
 * distinct voices: a low, rounded "whoosh-click" for nav-object clicks
 * (paired with the push-in/fade transition), and a slightly snappier,
 * lower-gain "toggle" for the lamp. Both are quiet by design (peak gain
 * ≤0.14) rather than mutable — the goal is that they're never loud enough
 * to need muting. Only ever created/played from within a real click
 * handler, so this never fights browser autoplay-gesture restrictions.
 */

let audioCtx = null;

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

function playTone( { frequency, endFrequency, duration, gain, type, filterFrequency } ) {
	const ctx = getContext();
	if ( ! ctx ) {
		return;
	}

	const now = ctx.currentTime;
	const oscillator = ctx.createOscillator();
	const gainNode = ctx.createGain();
	const filter = ctx.createBiquadFilter();

	oscillator.type = type;
	oscillator.frequency.setValueAtTime( frequency, now );
	oscillator.frequency.exponentialRampToValueAtTime( endFrequency, now + duration );

	filter.type = 'lowpass';
	filter.frequency.setValueAtTime( filterFrequency, now );

	// Quick soft attack, exponential decay — a "click" reads as a UI cue
	// here specifically because it never has a hard/instant edge.
	gainNode.gain.setValueAtTime( 0.0001, now );
	gainNode.gain.exponentialRampToValueAtTime( gain, now + 0.012 );
	gainNode.gain.exponentialRampToValueAtTime( 0.0001, now + duration );

	oscillator.connect( filter );
	filter.connect( gainNode );
	gainNode.connect( ctx.destination );

	oscillator.start( now );
	oscillator.stop( now + duration + 0.03 );
}

/** Monitor/notebook/phone/terminal — played the instant a nav object is
 * clicked, right as the camera push-in and page fade begin. */
export function playNavigateSound() {
	playTone( {
		frequency: 340,
		endFrequency: 230,
		duration: 0.18,
		gain: 0.14,
		type: 'sine',
		filterFrequency: 1200,
	} );
}

/** The lamp toggle — pitched slightly higher for on, lower for off, like a
 * physical switch, and quieter/snappier than the navigate sound since it's
 * a minor utility action rather than the main "entering a page" moment. */
export function playLampSound( isOn ) {
	playTone( {
		frequency: isOn ? 300 : 210,
		endFrequency: isOn ? 260 : 180,
		duration: 0.09,
		gain: 0.11,
		type: 'triangle',
		filterFrequency: 2200,
	} );
}
