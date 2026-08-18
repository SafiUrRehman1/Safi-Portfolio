import * as THREE from 'three';

/**
 * Builds the static "digital workspace" scene: a slim architectural desk
 * with exactly five meaningful objects (monitor, notebook, phone, a small
 * terminal device, and a lamp), lit for a soft, restrained, premium-render
 * feel. Screen content is drawn onto small offscreen <canvas> elements and
 * used as emissive textures — no external image/model assets, so there is
 * nothing to preload and nothing that can fail to fetch.
 *
 * Deliberately no animation loop, no controls, no interaction wiring here —
 * this phase only establishes geometry, materials, lighting, and camera.
 */

// Restrained but readable palette. Desk/notebook lean warm (a believable
// dark-walnut/leather value), monitor/phone/terminal/lamp lean cool-neutral
// metal/plastic — enough hue+value separation to read as distinct materials
// against a near-black background, without introducing any accent color.
const COLORS = {
	floor: 0x08090b,
	wall: 0x0c0e12,
	desk: 0x2e2015,
	deskLeg: 0x231a10,
	monitorBody: 0x2c2e32,
	terminalBody: 0x26282c,
	notebookCover: 0x3c3022,
	phoneBody: 0x24262a,
	lampMetal: 0x2d2f33,
	lampShade: 0x3a3c40,
	lampBulbOff: 0x86807a,
};

const DESK_TOP_Y = 0.75;
const DESK_TOP_THICKNESS = 0.025;

// Lamp on/off targets — read by the interaction layer to smoothly lerp the
// bulb material and its practical light between these two states, rather
// than snapping. "Off" still keeps a faint residual glow/light rather than
// going fully dark, matching the rest of the scene's restrained-not-black
// lighting philosophy.
export const LAMP_STATES = {
	on: {
		emissiveColor: 0xffb877,
		emissiveIntensity: 1.5,
		lightIntensity: 1.3,
	},
	off: {
		emissiveColor: 0x3a332c,
		emissiveIntensity: 0.12,
		lightIntensity: 0,
	},
};

/** Draws onto an offscreen canvas and returns it as a Three.js texture. */
function createCanvasTexture( width, height, draw ) {
	const canvas = document.createElement( 'canvas' );
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext( '2d' );
	draw( ctx, width, height );
	const texture = new THREE.CanvasTexture( canvas );
	texture.colorSpace = THREE.SRGBColorSpace;
	return texture;
}

/** A minimal, abstract dark-editor silhouette — sidebar + code-line blocks.
 * Deliberately not a literal IDE clone, just enough to read as "an editor"
 * from desk-viewing distance. */
function drawMonitorScreen( ctx, w, h ) {
	ctx.fillStyle = '#0c1219';
	ctx.fillRect( 0, 0, w, h );

	ctx.fillStyle = '#141b24';
	ctx.fillRect( 0, 0, w, h * 0.09 );

	const sidebarWidth = w * 0.15;
	ctx.fillStyle = '#0f151d';
	ctx.fillRect( 0, h * 0.09, sidebarWidth, h );

	ctx.fillStyle = '#3d4f61';
	const sidebarLines = [ 0.16, 0.24, 0.32, 0.44, 0.52, 0.6, 0.72 ];
	sidebarLines.forEach( ( ratio ) => {
		ctx.fillRect( sidebarWidth * 0.18, h * ratio, sidebarWidth * 0.64, h * 0.022 );
	} );

	// Brighter, higher-contrast line colors than a real editor's syntax
	// theme would use — this screen is viewed from "across a desk," not
	// read up close, so contrast is pushed further than literal accuracy.
	const lineColors = [ '#5b9bd5', '#6fbf87', '#8b93a3', '#5b9bd5', '#6fbf87' ];
	const lineWidths = [ 0.5, 0.32, 0.62, 0.4, 0.7, 0.28, 0.5, 0.6, 0.34, 0.58, 0.44, 0.66, 0.3 ];
	const startX = sidebarWidth + w * 0.045;
	const lineHeight = h * 0.052;
	let y = h * 0.17;
	lineWidths.forEach( ( widthRatio, i ) => {
		const indent = ( i % 3 ) * w * 0.018;
		ctx.fillStyle = lineColors[ i % lineColors.length ];
		ctx.fillRect( startX + indent, y, widthRatio * ( w - startX - w * 0.06 ), lineHeight * 0.48 );
		y += lineHeight;
	} );
}

/** A small terminal device's screen: a few lines of static, muted (not
 * neon-green) monospace text. */
function drawTerminalScreen( ctx, w, h ) {
	ctx.fillStyle = '#0a0c0f';
	ctx.fillRect( 0, 0, w, h );
	ctx.font = `${ Math.floor( h * 0.16 ) }px "Courier New", monospace`;
	ctx.fillStyle = '#9fb0ae';
	ctx.textBaseline = 'top';
	ctx.fillText( 'GitHub', w * 0.1, h * 0.16 );
	ctx.fillText( 'Resume', w * 0.1, h * 0.42 );
	ctx.fillStyle = '#6c7a78';
	ctx.fillText( '_', w * 0.1, h * 0.68 );
}

/** A minimal contact-card silhouette for the phone screen — an avatar dot
 * and a couple of text bars, not literal icons. */
function drawPhoneScreen( ctx, w, h ) {
	ctx.fillStyle = '#0b0d10';
	ctx.fillRect( 0, 0, w, h );

	ctx.fillStyle = '#3a4650';
	ctx.beginPath();
	ctx.arc( w / 2, h * 0.28, w * 0.16, 0, Math.PI * 2 );
	ctx.fill();

	ctx.fillStyle = '#2a333b';
	ctx.fillRect( w * 0.28, h * 0.52, w * 0.44, h * 0.03 );
	ctx.fillRect( w * 0.34, h * 0.58, w * 0.32, h * 0.025 );
}

/** A subtle, embossed-looking "About" label on the notebook cover — a
 * regular (non-emissive) diffuse texture, not a self-lit screen. */
function drawNotebookCover( ctx, w, h, baseColorHex ) {
	ctx.fillStyle = baseColorHex;
	ctx.fillRect( 0, 0, w, h );
	ctx.font = `${ Math.floor( h * 0.09 ) }px Georgia, serif`;
	ctx.fillStyle = 'rgba(255, 245, 230, 0.16)';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText( 'ABOUT', w / 2, h * 0.86 );
}

function createDesk() {
	const group = new THREE.Group();
	const topMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.desk,
		roughness: 0.55,
		metalness: 0.06,
	} );
	const legMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.deskLeg,
		roughness: 0.5,
		metalness: 0.15,
	} );

	const top = new THREE.Mesh(
		new THREE.BoxGeometry( 1.5, DESK_TOP_THICKNESS, 0.65 ),
		topMaterial
	);
	top.position.set( 0, DESK_TOP_Y, 0 );
	top.castShadow = false;
	top.receiveShadow = true;
	group.add( top );

	const legHeight = DESK_TOP_Y - DESK_TOP_THICKNESS / 2;
	const legGeometry = new THREE.BoxGeometry( 0.03, legHeight, 0.6 );
	[ -0.7, 0.7 ].forEach( ( x ) => {
		const leg = new THREE.Mesh( legGeometry, legMaterial );
		leg.position.set( x, legHeight / 2, 0 );
		leg.castShadow = true;
		leg.receiveShadow = true;
		group.add( leg );
	} );

	return group;
}

function createMonitor() {
	const group = new THREE.Group();
	const bodyMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.monitorBody,
		roughness: 0.35,
		metalness: 0.35,
	} );

	const screenTexture = createCanvasTexture( 512, 288, drawMonitorScreen );
	const screenMaterial = new THREE.MeshStandardMaterial( {
		color: 0x000000,
		roughness: 0.22,
		metalness: 0.1,
		map: screenTexture,
		emissive: new THREE.Color( 0xffffff ),
		emissiveMap: screenTexture,
		emissiveIntensity: 0.85,
	} );

	const base = new THREE.Mesh(
		new THREE.CylinderGeometry( 0.09, 0.11, 0.02, 24 ),
		bodyMaterial
	);
	base.position.set( 0, 0.01, 0 );
	base.castShadow = true;
	base.receiveShadow = true;
	group.add( base );

	const neck = new THREE.Mesh( new THREE.BoxGeometry( 0.03, 0.16, 0.03 ), bodyMaterial );
	neck.position.set( 0, 0.1, 0 );
	neck.castShadow = true;
	group.add( neck );

	const panel = new THREE.Mesh( new THREE.BoxGeometry( 0.56, 0.32, 0.018 ), bodyMaterial );
	panel.position.set( 0, 0.34, -0.005 );
	panel.castShadow = true;
	panel.receiveShadow = true;
	group.add( panel );

	const screen = new THREE.Mesh( new THREE.PlaneGeometry( 0.52, 0.29 ), screenMaterial );
	screen.position.set( 0, 0.34, 0.0045 );
	screen.userData.isScreen = true;
	screen.userData.baseEmissiveIntensity = 0.85;
	group.add( screen );

	group.rotation.x = THREE.MathUtils.degToRad( -2 );
	return group;
}

/** A small dedicated developer device (GitHub/Resume) — a compact box with
 * its own small screen, deliberately much smaller than the monitor so it
 * reads as a secondary device, not another workstation. */
function createTerminal() {
	const bodyMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.terminalBody,
		roughness: 0.55,
		metalness: 0.2,
	} );

	const screenTexture = createCanvasTexture( 128, 96, drawTerminalScreen );
	const screenMaterial = new THREE.MeshStandardMaterial( {
		color: 0x000000,
		roughness: 0.3,
		metalness: 0.05,
		map: screenTexture,
		emissive: new THREE.Color( 0xffffff ),
		emissiveMap: screenTexture,
		emissiveIntensity: 0.4,
	} );

	const group = new THREE.Group();
	const body = new THREE.Mesh( new THREE.BoxGeometry( 0.11, 0.05, 0.08 ), bodyMaterial );
	body.castShadow = true;
	body.receiveShadow = true;
	group.add( body );

	const screen = new THREE.Mesh( new THREE.PlaneGeometry( 0.09, 0.036 ), screenMaterial );
	screen.position.set( 0, 0.01, 0.0405 );
	screen.userData.isScreen = true;
	screen.userData.baseEmissiveIntensity = 0.4;
	group.add( screen );

	return group;
}

function createNotebook() {
	const coverHex = '#' + COLORS.notebookCover.toString( 16 ).padStart( 6, '0' );
	const coverTexture = createCanvasTexture( 256, 256, ( ctx, w, h ) =>
		drawNotebookCover( ctx, w, h, coverHex )
	);
	const coverMaterial = new THREE.MeshStandardMaterial( {
		color: 0xffffff,
		map: coverTexture,
		roughness: 0.75,
		metalness: 0,
	} );
	const edgeMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.notebookCover,
		roughness: 0.8,
		metalness: 0,
	} );

	const notebook = new THREE.Mesh(
		new THREE.BoxGeometry( 0.21, 0.014, 0.28 ),
		[ edgeMaterial, edgeMaterial, coverMaterial, edgeMaterial, edgeMaterial, edgeMaterial ]
	);
	notebook.castShadow = true;
	notebook.receiveShadow = true;
	return notebook;
}

function createPhone() {
	const bodyMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.phoneBody,
		roughness: 0.4,
		metalness: 0.45,
	} );

	const screenTexture = createCanvasTexture( 128, 256, drawPhoneScreen );
	const screenMaterial = new THREE.MeshStandardMaterial( {
		color: 0x000000,
		roughness: 0.18,
		metalness: 0.2,
		map: screenTexture,
		emissive: new THREE.Color( 0xffffff ),
		emissiveMap: screenTexture,
		emissiveIntensity: 0.32,
	} );

	const group = new THREE.Group();
	const body = new THREE.Mesh( new THREE.BoxGeometry( 0.07, 0.008, 0.145 ), bodyMaterial );
	body.castShadow = true;
	body.receiveShadow = true;
	group.add( body );

	const screen = new THREE.Mesh( new THREE.PlaneGeometry( 0.06, 0.13 ), screenMaterial );
	screen.rotation.x = -Math.PI / 2;
	screen.position.y = 0.0041;
	screen.userData.isScreen = true;
	screen.userData.baseEmissiveIntensity = 0.32;
	group.add( screen );

	return group;
}

/** A believable articulated desk lamp: base, two-segment arm, an open
 * truncated-cone shade, and a (currently unlit) bulb inside it. Toggling it
 * on is a later interaction phase — for now it must simply look like a real
 * lamp that happens to be off, not an abstract prop. */
/** A cylinder mesh stretched and rotated to connect two points — used for
 * the lamp's arm segments so their direction is derived from real vector
 * math (guaranteed to actually connect base → elbow → shade) rather than
 * guessed Euler angles, which is what previously left the shade hanging
 * past the desk's corner instead of over its surface. */
function buildSegment( start, end, radius, material ) {
	const direction = new THREE.Vector3().subVectors( end, start );
	const length = direction.length();
	const mesh = new THREE.Mesh( new THREE.CylinderGeometry( radius, radius, length, 12 ), material );
	mesh.position.copy( start ).add( end ).multiplyScalar( 0.5 );
	mesh.quaternion.setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), direction.normalize() );
	mesh.castShadow = true;
	return mesh;
}

function createLamp() {
	const metal = new THREE.MeshStandardMaterial( {
		color: COLORS.lampMetal,
		roughness: 0.4,
		metalness: 0.55,
	} );
	const shadeMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.lampShade,
		roughness: 0.55,
		metalness: 0.2,
		side: THREE.DoubleSide,
	} );
	// On by default (per the locked direction) — a warm, visibly glowing bulb.
	const bulbMaterial = new THREE.MeshStandardMaterial( {
		color: 0xfff1d6,
		roughness: 0.4,
		metalness: 0,
		emissive: new THREE.Color( 0xffb877 ),
		emissiveIntensity: 1.5,
	} );

	const group = new THREE.Group();

	// A slightly heavier, more grounded base — reads as a real weighted
	// lamp foot rather than a thin disc.
	const base = new THREE.Mesh( new THREE.CylinderGeometry( 0.065, 0.078, 0.016, 24 ), metal );
	base.position.y = 0.008;
	base.castShadow = true;
	base.receiveShadow = true;
	group.add( base );

	// Joints defined in local space (the group itself sits at the lamp's
	// desk position, back-right of center) and swept toward the desk's
	// center/front so the shade ends up hanging over the work area instead
	// of past the desk's corner.
	const basePoint = new THREE.Vector3( 0, 0.02, 0 );
	const elbow = new THREE.Vector3( -0.1, 0.42, 0.16 );
	const shadeTarget = new THREE.Vector3( -0.15, 0.32, 0.22 );

	group.add( buildSegment( basePoint, elbow, 0.007, metal ) );
	group.add( buildSegment( elbow, shadeTarget, 0.006, metal ) );

	// Small pivot joints at the elbow and shade mount for a believable
	// articulated-arm silhouette rather than two segments meeting sharply.
	const jointGeometry = new THREE.SphereGeometry( 0.009, 12, 10 );
	const elbowJoint = new THREE.Mesh( jointGeometry, metal );
	elbowJoint.position.copy( elbow );
	group.add( elbowJoint );

	// Open truncated-cone shade (wider at the mouth than the neck), aimed
	// down and slightly further toward the desk so it reads as lighting the
	// surface beneath it rather than pointing out into empty space.
	const shadeAxis = new THREE.Vector3( -0.12, -1, 0.12 ).normalize();
	const shade = new THREE.Mesh(
		new THREE.CylinderGeometry( 0.032, 0.06, 0.09, 24, 1, true ),
		shadeMaterial
	);
	shade.position.copy( shadeTarget ).addScaledVector( shadeAxis, 0.03 );
	shade.quaternion.setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), shadeAxis );
	shade.castShadow = true;
	shade.receiveShadow = true;
	group.add( shade );

	// A small mounting collar where the arm meets the shade's neck — a
	// modest, structural detail (not decoration) that makes the joint read
	// as a designed fitting rather than the shade simply floating in place.
	const collar = new THREE.Mesh( new THREE.CylinderGeometry( 0.014, 0.014, 0.014, 16 ), metal );
	collar.position.copy( shadeTarget );
	collar.quaternion.setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), shadeAxis );
	group.add( collar );

	const bulb = new THREE.Mesh( new THREE.SphereGeometry( 0.022, 16, 12 ), bulbMaterial );
	bulb.position.copy( shadeTarget ).addScaledVector( shadeAxis, 0.045 );
	group.add( bulb );

	// The practical light source itself: warm, no shadow-casting (the key/
	// fill/rim lights already establish shadow structure — this just adds
	// a soft warm pool on the desk, not a second harsh shadow pass). Higher
	// decay + shorter distance than a physically "correct" bulb would use —
	// this concentrates the brightness tightly around the bulb itself so
	// the glow reads as coming FROM it, rather than a diffuse wash that
	// happens to be nearby.
	const bulbLight = new THREE.PointLight( 0xffb877, 1.3, 1.2, 1.7 );
	bulbLight.position.copy( bulb.position );
	group.add( bulbLight );

	return { group, bulbMaterial, bulbLight };
}

function createEnvironment() {
	const group = new THREE.Group();

	const floorMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.floor,
		roughness: 0.9,
		metalness: 0,
	} );
	const floor = new THREE.Mesh( new THREE.PlaneGeometry( 8, 8 ), floorMaterial );
	floor.rotation.x = -Math.PI / 2;
	floor.receiveShadow = true;
	group.add( floor );

	const wallMaterial = new THREE.MeshStandardMaterial( {
		color: COLORS.wall,
		roughness: 0.95,
		metalness: 0,
	} );
	const wall = new THREE.Mesh( new THREE.PlaneGeometry( 6, 3 ), wallMaterial );
	wall.position.set( 0, 1.5, -0.95 );
	wall.receiveShadow = true;
	group.add( wall );

	return group;
}

function addLighting( scene ) {
	// Three.js (since r155) interprets light intensity in physically-based
	// units, not the old arbitrary 0–1-ish scale — values that looked
	// reasonable under the old model render as near-black now.
	const ambient = new THREE.HemisphereLight( 0x363c46, 0x0a0b0d, 3.2 );
	scene.add( ambient );

	// Soft key light — the scene's main source, angled to favor the monitor.
	const key = new THREE.DirectionalLight( 0xe8edf5, 6.5 );
	key.position.set( 1.4, 2.4, 1.6 );
	key.target.position.set( 0, DESK_TOP_Y + 0.15, -0.1 );
	key.castShadow = true;
	key.shadow.mapSize.set( 1024, 1024 );
	key.shadow.camera.near = 0.5;
	key.shadow.camera.far = 6;
	key.shadow.camera.left = -1.5;
	key.shadow.camera.right = 1.5;
	key.shadow.camera.top = 1.5;
	key.shadow.camera.bottom = -1.5;
	key.shadow.camera.updateProjectionMatrix();
	key.shadow.bias = -0.0015;
	scene.add( key );
	scene.add( key.target );

	// Soft fill from the opposite side so shadowed faces stay readable
	// rather than crushing to black.
	const fill = new THREE.DirectionalLight( 0x5b6472, 2.2 );
	fill.position.set( -1.8, 1.2, -0.8 );
	scene.add( fill );

	// Rim/edge light from behind the objects — the single most effective
	// technique for separating dark geometry from a dark background
	// without bloom: it catches the back edges of the monitor, notebook,
	// phone, and lamp as thin highlights.
	const rim = new THREE.DirectionalLight( 0x6b7686, 3.4 );
	rim.position.set( -0.6, 1.6, -1.6 );
	scene.add( rim );
}

/**
 * Fits the camera to a bounding box for the given aspect ratio, using a
 * fixed field of view and a continuous (not breakpoint-based) viewing
 * angle: wider/landscape viewports get a more eye-level cinematic angle,
 * narrower/portrait viewports blend toward a more top-down, intimate angle
 * so a wide-but-short desk composition still fills a tall frame sensibly.
 * The look-at target is also biased slightly above the content's true
 * center, which pushes the desk into the lower portion of the frame and
 * leaves deliberate headroom above it, matching a product-shot composition
 * rather than a dead-centered one.
 *
 * The same function runs on initial load and on every resize, so framing
 * adapts smoothly across any viewport rather than snapping between a
 * handful of hardcoded device presets.
 */
export function frameCamera( camera, box, aspect ) {
	const center = box.getCenter( new THREE.Vector3() );
	const size = box.getSize( new THREE.Vector3() );

	// 0 = wide/landscape (eye-level, cinematic), 1 = narrow/portrait (more top-down, intimate).
	const t = THREE.MathUtils.clamp( THREE.MathUtils.mapLinear( aspect, 0.5, 1.05, 1, 0 ), 0, 1 );
	const elevation = THREE.MathUtils.lerp( 0.62, 1.35, t );
	const depth = THREE.MathUtils.lerp( 1.0, 0.78, t );
	// Portrait/mobile intentionally frames tighter (smaller margin = camera
	// closer) so the workspace feels like the camera moved in close, rather
	// than the same shot simply pulled back into a taller canvas. Desktop's
	// end of this range is pulled in further still so the desk reads as a
	// deliberate hero composition rather than a distant object — mobile's
	// end (0.7) is untouched.
	const margin = THREE.MathUtils.lerp( 0.76, 0.7, t );
	const viewDirection = new THREE.Vector3( 0, elevation, depth ).normalize();

	const vFov = THREE.MathUtils.degToRad( camera.fov );
	const hFov = 2 * Math.atan( Math.tan( vFov / 2 ) * aspect );

	// Orientation-only placeholder to read off the right/up/forward axes for
	// this viewing direction — its distance from center is irrelevant, only
	// the direction matters for the basis.
	const placeholderEye = center.clone().add( viewDirection.clone().multiplyScalar( 1 ) );
	const basis = new THREE.Matrix4().lookAt( placeholderEye, center, new THREE.Vector3( 0, 1, 0 ) );
	const right = new THREE.Vector3().setFromMatrixColumn( basis, 0 );
	const up = new THREE.Vector3().setFromMatrixColumn( basis, 1 );
	const forward = new THREE.Vector3().setFromMatrixColumn( basis, 2 );

	let maxRight = 0;
	let maxUp = 0;
	let maxForward = 0;
	const corner = new THREE.Vector3();
	for ( let i = 0; i < 8; i++ ) {
		corner
			.set(
				i & 1 ? box.max.x : box.min.x,
				i & 2 ? box.max.y : box.min.y,
				i & 4 ? box.max.z : box.min.z
			)
			.sub( center );
		maxRight = Math.max( maxRight, Math.abs( corner.dot( right ) ) );
		maxUp = Math.max( maxUp, Math.abs( corner.dot( up ) ) );
		maxForward = Math.max( maxForward, Math.abs( corner.dot( forward ) ) );
	}

	const distanceForHeight = maxUp / Math.tan( vFov / 2 );
	const distanceForWidth = maxRight / Math.tan( hFov / 2 );
	const distance = Math.max( distanceForHeight, distanceForWidth ) * margin + maxForward;

	camera.position.copy( center ).add( viewDirection.multiplyScalar( distance ) );

	// Bias the look-at target above the true center so the desk composes in
	// the lower portion of the frame, with headroom above. Landscape gets
	// more of this bias (a classic product-shot composition); portrait
	// already has ample vertical room from its aspect alone, so less bias
	// keeps the workspace feeling close/filled rather than adding more
	// empty space on top of empty space.
	const headroomFraction = THREE.MathUtils.lerp( 0.35, 0.12, t );
	const lookTarget = center.clone();
	lookTarget.y += size.y * headroomFraction + 0.04;
	camera.lookAt( lookTarget );
	camera.updateProjectionMatrix();

	// Stashed for the interaction layer: mouse/touch parallax needs to offset
	// the camera along ITS OWN right/up axes (not world X/Y) and always
	// relative to this freshly-computed neutral framing, so it stays correct
	// across resizes/reframes and never drifts from the intended shot.
	camera.userData.basePosition = camera.position.clone();
	camera.userData.lookTarget = lookTarget.clone();
	camera.userData.right = right.clone();
	camera.userData.up = up.clone();
}

export function buildScene( aspect ) {
	const scene = new THREE.Scene();
	scene.background = new THREE.Color( COLORS.floor );

	scene.add( createEnvironment() );

	const deskGroup = new THREE.Group();

	deskGroup.add( createDesk() );

	// The monitor and the three other navigation objects are scaled up
	// slightly beyond their "realistic" size — a deliberate, restrained
	// exaggeration so they read as the scene's important, purposeful
	// objects at a glance, rather than a strict architectural miniature.
	// interactionId + baseScale are read by the interaction layer: raycast
	// hits are walked up to the nearest ancestor with an interactionId, and
	// hover feedback scales relative to baseScale rather than assuming 1.
	const monitor = createMonitor();
	monitor.scale.setScalar( 1.16 );
	monitor.position.set( 0, DESK_TOP_Y + DESK_TOP_THICKNESS / 2, -0.15 );
	monitor.userData.interactionId = 'monitor';
	monitor.userData.baseScale = 1.16;
	deskGroup.add( monitor );

	const terminal = createTerminal();
	terminal.scale.setScalar( 1.12 );
	terminal.position.set( 0.17, DESK_TOP_Y + DESK_TOP_THICKNESS / 2 + 0.025, 0.14 );
	terminal.rotation.y = THREE.MathUtils.degToRad( -6 );
	terminal.userData.interactionId = 'terminal';
	terminal.userData.baseScale = 1.12;
	deskGroup.add( terminal );

	const notebook = createNotebook();
	notebook.scale.setScalar( 1.12 );
	notebook.position.set( -0.45, DESK_TOP_Y + DESK_TOP_THICKNESS / 2 + 0.007, 0.12 );
	notebook.rotation.y = THREE.MathUtils.degToRad( 8 );
	notebook.userData.interactionId = 'notebook';
	notebook.userData.baseScale = 1.12;
	deskGroup.add( notebook );

	const phone = createPhone();
	phone.scale.setScalar( 1.12 );
	phone.position.set( 0.5, DESK_TOP_Y + DESK_TOP_THICKNESS / 2 + 0.004, 0.15 );
	phone.rotation.y = THREE.MathUtils.degToRad( -12 );
	phone.userData.interactionId = 'phone';
	phone.userData.baseScale = 1.12;
	deskGroup.add( phone );

	const { group: lamp, bulbMaterial, bulbLight } = createLamp();
	lamp.position.set( 0.58, DESK_TOP_Y + DESK_TOP_THICKNESS / 2, -0.24 );
	lamp.userData.interactionId = 'lamp';
	lamp.userData.baseScale = 1;
	deskGroup.add( lamp );

	scene.add( deskGroup );

	addLighting( scene );

	const box = new THREE.Box3().setFromObject( deskGroup );

	const camera = new THREE.PerspectiveCamera( 38, aspect, 0.1, 20 );
	frameCamera( camera, box, aspect );

	return {
		scene,
		camera,
		box,
		interactive: {
			monitor,
			terminal,
			notebook,
			phone,
			lamp: { group: lamp, bulbMaterial, bulbLight },
		},
	};
}
