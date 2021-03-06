var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var _libfiles = [
	'node_modules/three/examples/js/controls/DeviceOrientationControls.js',
	'node_modules/three/examples/js/effects/CardboardEffect.js',
	'node_modules/tween.js/src/Tween.js',
	'src/lib/OrbitControls.js',
	'src/lib/GSVPano.js',
	'src/lib/modifier/BendModifier.js',
];

var _panolensfiles = [
	'src/Panolens.js',
	'src/DataImage.js',
	'src/Modes.js',
	'src/util/Utils.js',
	'src/util/ImageLoader.js',
	'src/util/TextureLoader.js',
	'src/util/CubeTextureLoader.js',
	'src/panorama/Panorama.js',
	'src/panorama/ImagePanorama.js',
	'src/panorama/GoogleStreetviewPanorama.js',
	'src/panorama/CubePanorama.js',
	'src/panorama/BasicPanorama.js',
	'src/panorama/VideoPanorama.js',
	'src/panorama/EmptyPanorama.js',
	'src/interface/Reticle.js',
	'src/interface/Tile.js',
	'src/interface/TileGroup.js',
	'src/interface/SpriteText.js',
	'src/widget/Widget.js',
	'src/infospot/Infospot.js',
	'src/viewer/Viewer.js',
	'src/util/font/Bmfont.js'
];

var _readme = [
	'README.md'
];

var jsdocConfig = {
  	opts: {
	    destination: './docs'
  	},
  	templates: {
	    outputSourceFiles: true,
  		theme: 'paper'
  	}
};

gulp.task( 'default', [ 'minify', 'docs' ] );

gulp.task( 'minify', function() {
  return gulp.src( _libfiles.concat( _panolensfiles ) )
  	.pipe( concat( 'panolens.js', { newLine: ';' } ) )
  	.pipe( gulp.dest( './build/' ) )
  	.pipe( concat( 'panolens.min.js' ) )
    .pipe( uglify() )
    .pipe( gulp.dest( './build/' ) );
});

gulp.task( 'docs', function() {
  return gulp.src( _panolensfiles.concat( _readme ), {read: false} )
    .pipe( jsdoc( jsdocConfig ) );
});